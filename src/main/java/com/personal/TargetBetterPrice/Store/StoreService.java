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
    private final ApiKeys apiKey = new ApiKeys();
    private final RestTemplate restTemplate = new RestTemplate();
    private final HttpHeaders headers = new HttpHeaders();

    public void findStoresSingle(String homeZip, String tcin, String distance) {
        //TODO: isolate the API calls into own functions that can be used for both single and multi item calls

        // RestTemplate restTemplate = new RestTemplate();
        // HttpHeaders headers = new HttpHeaders();

        // ------ API Request for locations within the given radius -----------------------------
//        String storeURI = "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?zip="
//                +homeZip+"&radius="+ distance;
//        //"https://4ba751f1-9947-47b0-b376-3fd9d1632b98.mock.pstmn.io";
//
//        headers.set("X-RapidAPI-Key", apiKey.getRapidAPI());
//        headers.set("X-RapidAPI-Host","target-com-store-product-reviews-locations-data.p.rapidapi.com");
//        HttpEntity<Void> requestEntity = new HttpEntity<>(headers);
//        ResponseEntity<String> response = restTemplate.exchange(storeURI, HttpMethod.GET,
//                requestEntity,String.class);
//        JsonObject data = new JsonParser().parse(response.getBody()).getAsJsonObject();
        // --------------------------------------------------------------------------------------

        //Get locations
        JsonArray jsonArray = (JsonArray) getLocations(homeZip, distance).get("locations");

        // TODO: Create a loop to iterate through different locations

        // for now: this grabs the first location and extracts the first address
        JsonObject storeLoc = (JsonObject) jsonArray.get(0);
        JsonObject storeAddress = (JsonObject) storeLoc.get("address");

        // Store ID
        String storeId = storeLoc.get("location_id").toString();

        // Store Distance from home ZIP
        String storeDist = storeLoc.get("distance").toString();

        // Store ZIP
        String zip = storeAddress.get("postal_code").toString().substring(1,6);

        // Create new store object with extracted info
        Store store = new Store(storeId,storeDist,zip);

        // ---------- API request to determine if product is available in store -----------------
//        String productURI = "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/details?store_id=" +
//                storeId+"&tcin=" + tcin;
//        headers.set("X-RapidAPI-Key", apiKey.getRapidAPI());
//        headers.set("X-RapidAPI-Host", "target-com-store-product-reviews-locations-data.p.rapidapi.com");
//        HttpEntity<Void> productRequest = new HttpEntity<>(headers);
//        ResponseEntity<String> productResponse = restTemplate.exchange(productURI, HttpMethod.GET,
//                productRequest,String.class);
//        JsonObject productData = new JsonParser().parse(productResponse.getBody()).getAsJsonObject();
        // --------------------------------------------------------------------------------------

        // Call function that returns product info at specific store
        JsonObject productInfo = (JsonObject) getProductInfo(storeId,tcin).get("product");
        JsonObject priceInfo = (JsonObject) productInfo.get("price");

        // Price of requested product
        double productPrice = Double.parseDouble(priceInfo.get("current_retail").toString());

        // ---------- API call to get tax rate at target location -------------------------------
//        String taxURI = "https://api.apilayer.com/tax_data/tax_rates?zip=" + zip + "&country=US";
//        headers.set("apikey", "48n1QGuhg6DP7ERxniyNs0l1L0ItasrH");
//        HttpEntity<Void> taxRequest = new HttpEntity<>(headers);
//        ResponseEntity<String> taxResponse = restTemplate.exchange(taxURI, HttpMethod.GET,
//                taxRequest, String.class);
//        JsonObject taxData = new JsonParser().parse(taxResponse.getBody()).getAsJsonObject();
        // --------------------------------------------------------------------------------------

        store.setTaxRate(Double.parseDouble(getTaxRate(zip).get("combined_rate").toString()));
        store.setCurrentPrice(productPrice);

        // Add found store to list of stores
        stores.add(store);
    }

    public void findStoresMultiple(String homeZip, String tcin, String distance) {
        //Gets locations around customer and creates array with info
        JsonArray jsonArray = (JsonArray) getLocations(homeZip, distance).get("locations");

        JsonObject storeLoc = (JsonObject) jsonArray.get(0);
        // Store Address
        JsonObject storeAddress = (JsonObject) storeLoc.get("address");

        // Store ID
        String storeID = storeLoc.get("location_id").toString();

        // Store Distance from home ZIP
        String storeDist = storeLoc.get("distance").toString();

        // Store ZIP
        String zip = storeAddress.get("postal_code").toString().substring(1,6);

        // Create new store object with extracted info
        Store store = new Store(storeID,storeDist,zip);

        //TODO: grab product info for every store


        // TODO: add stores with >0 products into stores array

    }

    @Override
    public ArrayList<Store> getStores() {
        return stores;
    }

    // API Request for locations within the given radius
    public JsonObject getLocations(String zip, String distance){

        String storeURI = "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?zip="
                +zip+"&radius="+ distance;
        //"https://4ba751f1-9947-47b0-b376-3fd9d1632b98.mock.pstmn.io";
        headers.set("X-RapidAPI-Key", apiKey.getRapidAPI());
        headers.set("X-RapidAPI-Host","target-com-store-product-reviews-locations-data.p.rapidapi.com");
        HttpEntity<Void> requestEntity = new HttpEntity<>(headers);
        ResponseEntity<String> response = restTemplate.exchange(storeURI, HttpMethod.GET,
                requestEntity,String.class);

        return new JsonParser().parse(response.getBody()).getAsJsonObject();
    }

    // API request to determine if product is available in store
    public JsonObject getProductInfo(String storeID, String tcin){
        String productURI = "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/details?store_id=" +
                storeID+"&tcin=" + tcin;
        headers.set("X-RapidAPI-Key", apiKey.getRapidAPI());
        headers.set("X-RapidAPI-Host", "target-com-store-product-reviews-locations-data.p.rapidapi.com");
        HttpEntity<Void> productRequest = new HttpEntity<>(headers);
        ResponseEntity<String> productResponse = restTemplate.exchange(productURI, HttpMethod.GET,
                productRequest,String.class);

        return new JsonParser().parse(productResponse.getBody()).getAsJsonObject();
    }

    public JsonObject getTaxRate(String zip){
        String taxURI = "https://api.apilayer.com/tax_data/tax_rates?zip=" + zip + "&country=US";
        headers.set("apikey", "48n1QGuhg6DP7ERxniyNs0l1L0ItasrH");
        HttpEntity<Void> taxRequest = new HttpEntity<>(headers);
        ResponseEntity<String> taxResponse = restTemplate.exchange(taxURI, HttpMethod.GET,
                taxRequest, String.class);

        return new JsonParser().parse(taxResponse.getBody()).getAsJsonObject();
    }
}
