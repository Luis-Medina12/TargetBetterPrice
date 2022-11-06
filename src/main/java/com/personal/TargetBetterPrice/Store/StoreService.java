package com.personal.TargetBetterPrice.Store;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.personal.TargetBetterPrice.ApiKeys;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Objects;


@Service
public class StoreService implements StoreInterface{
    private final ArrayList<ArrayList<Store>> requests = new ArrayList<>();
    private final RestTemplate restTemplate = new RestTemplate();
    private final HttpHeaders headers = new HttpHeaders();
    private final ApiKeys apiKey = new ApiKeys();
    private int requestNum=0;

    @Override
    public void insertStores(String homeZip, int tcin, String distance) {

        String storeURI = //"https://230fa55e-acf6-4912-8733-05b3164c1d59.mock.pstmn.io/multiStore";
                "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?zip="
                +homeZip+"&radius="+ distance;

        headers.set("X-RapidAPI-Key", apiKey.getRapidAPI());
        headers.set("X-RapidAPI-Host","target-com-store-product-reviews-locations-data.p.rapidapi.com");

        HttpEntity<Void> requestEntity = new HttpEntity<>(headers);
        ResponseEntity<String> response = restTemplate.exchange(storeURI, HttpMethod.GET,
                requestEntity,String.class);
        JsonObject data = JsonParser.parseString(Objects.requireNonNull(response.getBody())).getAsJsonObject();

        // extract locations from response
        JsonArray jsonArray = (JsonArray) data.get("locations");

        // Goes through every location returned within radius, and adds it to list
        // Extracts storeID, storeZIP, and distance

        String storeId, storeDist, zip;
        double productPrice;

        ArrayList<Store> stores = new ArrayList<>();

        for(int i = 0; i < jsonArray.size(); i++)
        {
            JsonObject storeLoc = (JsonObject) jsonArray.get(i);
            JsonObject storeAddress = (JsonObject) storeLoc.get("address");
            // Store ID
            storeId = storeLoc.get("location_id").toString();

            // Store Distance from home ZIP
            storeDist = storeLoc.get("distance").toString();

            // Store's Zip Code
            zip = storeAddress.get("postal_code").toString().substring(1,6);

            productPrice = getProductPrice(storeId,tcin);
            if(productPrice >0)
            {
                Store store = new Store(storeId,storeDist,zip);

                // get tax rate and set it to new store Object
                store.setTaxRate(getTaxRate(zip));

                // get tax rate and set it to new store Object
                store.setCurrentPrice(productPrice);

                // insert created store into the array
                stores.add(store);
            }
        }
        requests.add(stores);
    }

    @Override
    public ArrayList<Store> getStores() {
        return requests.get(requestNum++);
    }

    // Returns effective tax rate for zip code
    public double getTaxRate(String storeZip)
    {
        String taxURI = "https://api.apilayer.com/tax_data/tax_rates?zip=" + storeZip + "&country=US";

        //String taxURI ="https://230fa55e-acf6-4912-8733-05b3164c1d59.mock.pstmn.io/"+storeZip;
        headers.set("apikey", apiKey.getApiLayer());

        HttpEntity<Void> taxRequest = new HttpEntity<>(headers);
        ResponseEntity<String> taxResponse = restTemplate.exchange(taxURI, HttpMethod.GET,
                taxRequest, String.class);

        JsonObject taxData = JsonParser.parseString(Objects.requireNonNull(taxResponse.getBody())).getAsJsonObject();
        return Double.parseDouble(taxData.get("combined_rate").toString());
    }

    // Returns product price if available at store
    // If call returns 404 then not in stock, so returns 0;
    public double getProductPrice(String storeID, int TCIN)
    {

        String productURI = "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/details?store_id=" + storeID+"&tcin=" + TCIN;
//        String productURI ="https://230fa55e-acf6-4912-8733-05b3164c1d59.mock.pstmn.io/productDetails";
        headers.set("X-RapidAPI-Key", apiKey.getRapidAPI());
        headers.set("X-RapidAPI-Host", "target-com-store-product-reviews-locations-data.p.rapidapi.com");

        HttpEntity<Void> productRequest = new HttpEntity<>(headers);

        try{
            ResponseEntity<String> productResponse = restTemplate.exchange(productURI, HttpMethod.GET,
                    productRequest,String.class);

            JsonObject productData = JsonParser.parseString(Objects.requireNonNull(productResponse.getBody())).getAsJsonObject();
            JsonObject productInfo = (JsonObject) productData.get("product");
            JsonObject priceInfo = (JsonObject) productInfo.get("price");

            return Double.parseDouble(priceInfo.get("current_retail").toString());
        }catch (HttpStatusCodeException e)
        {
            if( e.getRawStatusCode() == 404)
            {
                return 0;
            }
        }
        return 0;
    }
}