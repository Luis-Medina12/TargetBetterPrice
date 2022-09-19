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
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;

@Service
public class StoreService implements StoreInterface{

    private final ArrayList<Store> stores = new ArrayList<>();

    @Override
    public void insertStores(String homeZip, int tcin, String distance) {

        ApiKeys apiKey = new ApiKeys();
        RestTemplate restTemplate = new RestTemplate();
        String storeURI = "https://4ba751f1-9947-47b0-b376-3fd9d1632b98.mock.pstmn.io";
        // Actual Api works, setting to test Server for now to save server calls
        //"https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?zip="+zipCode+"&radius=3";
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-RapidAPI-Key", apiKey.getRapidAPI());
        headers.set("X-RapidAPI-Host","target-com-store-product-reviews-locations-data.p.rapidapi.com");

        HttpEntity<Void> requestEntity = new HttpEntity<>(headers);
        ResponseEntity<String> response = restTemplate.exchange(storeURI, HttpMethod.GET,
                requestEntity,String.class);

        JsonObject data = new JsonParser().parse(response.getBody()).getAsJsonObject();
        JsonArray jsonArray = (JsonArray) data.get("locations");

        // TODO: 9/19/2022 Why is storeAddress not working? Not parsing right?
        for(int i = 0; i<jsonArray.size(); i++)
        {
            JsonObject storeLoc = (JsonObject) jsonArray.get(i);
            JsonObject storeAddress = (JsonObject) storeLoc.get("storeAddress");

            System.out.println(storeAddress.toString());
            stores.add(new Store(storeLoc.get("location_id").toString(),
                    storeLoc.get("distance").toString(),
                    storeAddress.get("postal_code").toString().substring(1,6),
                    storeAddress.get("address_line1").toString()));
        }

        String productURI = "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/details?store_id=" +
                stores.get(0).getStoreID()+"&tcin=" + tcin;
        headers.set("X-RapidAPI-Key", apiKey.getRapidAPI());
        headers.set("X-RapidAPI-Host", "target-com-store-product-reviews-locations-data.p.rapidapi.com");

        HttpEntity<Void> productRequest = new HttpEntity<>(headers);
        ResponseEntity<String> productResponse = restTemplate.exchange(productURI, HttpMethod.GET,
                productRequest,String.class);

        JsonObject productData = new JsonParser().parse(productResponse.getBody()).getAsJsonObject();
        JsonObject productInfo = (JsonObject) productData.get("product");
        JsonObject priceInfo = (JsonObject) productInfo.get("price");
        double productPrice = Double.parseDouble(priceInfo.get("price").toString());


        for (Store store : stores) {
            String taxURI = "https://api.apilayer.com/tax_data/tax_rates?zip=" + store.getZipCode() + "&country=US";
            headers.set("apikey", "48n1QGuhg6DP7ERxniyNs0l1L0ItasrH");

            HttpEntity<Void> taxRequest = new HttpEntity<>(headers);
            ResponseEntity<String> taxResponse = restTemplate.exchange(taxURI, HttpMethod.GET,
                    taxRequest, String.class);

            JsonObject taxData = new JsonParser().parse(taxResponse.getBody()).getAsJsonObject();
            store.setTaxRate(Double.parseDouble(taxData.get("combined_rate").toString()));
            store.setCurrentPrice(productPrice);
        }

    }

    @Override
    public ArrayList<Store> getStores() {
        return stores;
    }

//    public static Store insertStores(String tcin, String distance, String homeZip)
//    {
//        ApiKeys apiKey = new ApiKeys();
//        RestTemplate restTemplate = new RestTemplate();
//        String storeURI = "https://4ba751f1-9947-47b0-b376-3fd9d1632b98.mock.pstmn.io";
//        // Actual Api works, setting to test Server for now to save server calls
//        //"https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?zip="+zipCode+"&radius=3";
//        HttpHeaders headers = new HttpHeaders();
//        headers.set("X-RapidAPI-Key", apiKey.getRapidAPI());
//        headers.set("X-RapidAPI-Host","target-com-store-product-reviews-locations-data.p.rapidapi.com");
//
//        HttpEntity<Void> requestEntity = new HttpEntity<>(headers);
//        ResponseEntity<String> response2 = restTemplate.exchange(storeURI, HttpMethod.GET,
//                requestEntity,String.class);
//
//        storeList = new StoreList(response2.getBody());
//
//    }

}
