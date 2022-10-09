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


@Service
public class StoreService implements StoreInterface{

    private final ArrayList<Store> stores = new ArrayList<>();
    private final RestTemplate restTemplate = new RestTemplate();
    private final HttpHeaders headers = new HttpHeaders();
    private final ApiKeys apiKey = new ApiKeys();

    @Override
    public void insertStores(String homeZip, int tcin, String distance) {

        String storeURI = "https://230fa55e-acf6-4912-8733-05b3164c1d59.mock.pstmn.io/multiStore";
//                "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?zip="
//                +homeZip+"&radius="+ distance;

        headers.set("X-RapidAPI-Key", apiKey.getRapidAPI());
        headers.set("X-RapidAPI-Host","target-com-store-product-reviews-locations-data.p.rapidapi.com");

        HttpEntity<Void> requestEntity = new HttpEntity<>(headers);
        ResponseEntity<String> response = restTemplate.exchange(storeURI, HttpMethod.GET,
                requestEntity,String.class);
        JsonObject data = JsonParser.parseString(response.getBody()).getAsJsonObject();

        // extract locations from response
        JsonArray jsonArray = (JsonArray) data.get("locations");

        // Goes through every location returned within radius, and adds it to list
        // Extracts storeID, storeZIP, and distance
        for(int i = 0; i < jsonArray.size(); i++)
        {
            JsonObject storeLoc = (JsonObject) jsonArray.get(i);
            JsonObject storeAddress = (JsonObject) storeLoc.get("address");
            // Store ID
            String storeId = storeLoc.get("location_id").toString();

            // Store Distance from home ZIP
            String storeDist = storeLoc.get("distance").toString();

            // Store's Zip Code
            String zip = storeAddress.get("postal_code").toString().substring(1,6);

            double productPrice = getProductPrice(storeId,tcin);
            Store store = new Store(storeId,storeDist,zip);

            // get tax rate and set it to new store Object
            store.setTaxRate(getTaxRate(zip));

            // get tax rate and set it to new store Object
            store.setCurrentPrice(productPrice);

            // insert created store into the array
            stores.add(store);
        }

        // Loop will remove any store where product isn't available (price = 0)
        for(int i=0; i< stores.size(); i++)
        {
            if(stores.get(i).getCurrentPrice() == 0.0)
            {
                stores.remove(i);
            }
        }
    }

    @Override
    public ArrayList<Store> getStores() {
        return stores;
    }

    // Returns effective tax rate for zip code
    public double getTaxRate(String storeZip)
    {
        //String taxURI = "https://api.apilayer.com/tax_data/tax_rates?zip=" + storeZip + "&country=US";

        String taxURI ="https://230fa55e-acf6-4912-8733-05b3164c1d59.mock.pstmn.io/"+storeZip;
        headers.set("apikey", apiKey.getApiLayer());

        HttpEntity<Void> taxRequest = new HttpEntity<>(headers);
        ResponseEntity<String> taxResponse = restTemplate.exchange(taxURI, HttpMethod.GET,
                taxRequest, String.class);

        JsonObject taxData = JsonParser.parseString(taxResponse.getBody()).getAsJsonObject();
        return Double.parseDouble(taxData.get("combined_rate").toString());
    }

    // Returns product price if available at store
    // If call returns 404 then not in stock, so returns 0;
    public double getProductPrice(String storeID, int TCIN)
    {

        String productURI = "https://230fa55e-acf6-4912-8733-05b3164c1d59.mock.pstmn.io/productDetails";

//                "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/details?store_id=" +
//                storeId+"&tcin=" + tcin;
        headers.set("X-RapidAPI-Key", apiKey.getRapidAPI());
        headers.set("X-RapidAPI-Host", "target-com-store-product-reviews-locations-data.p.rapidapi.com");

        HttpEntity<Void> productRequest = new HttpEntity<>(headers);

        try{
            ResponseEntity<String> productResponse = restTemplate.exchange(productURI, HttpMethod.GET,
                    productRequest,String.class);

            JsonObject productData = JsonParser.parseString(productResponse.getBody()).getAsJsonObject();
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