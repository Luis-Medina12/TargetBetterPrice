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

        String storeURI = "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?zip="
                +homeZip+"&radius="+ distance;

        //"https://4ba751f1-9947-47b0-b376-3fd9d1632b98.mock.pstmn.io";

        HttpHeaders headers = new HttpHeaders();
        headers.set("X-RapidAPI-Key", apiKey.getRapidAPI());
        headers.set("X-RapidAPI-Host","target-com-store-product-reviews-locations-data.p.rapidapi.com");

        HttpEntity<Void> requestEntity = new HttpEntity<>(headers);
        ResponseEntity<String> response = restTemplate.exchange(storeURI, HttpMethod.GET,
                requestEntity,String.class);

        JsonObject data = new JsonParser().parse(response.getBody()).getAsJsonObject();
        JsonArray jsonArray = (JsonArray) data.get("locations");
        JsonObject storeLoc = (JsonObject) jsonArray.get(0);
        JsonObject storeAddress = (JsonObject) storeLoc.get("address");

        // Store ID
        String storeId = storeLoc.get("location_id").toString();

        // Store Distance from home ZIP
        String storeDist = storeLoc.get("distance").toString();

        // ZIP CODE
        String zip = storeAddress.get("postal_code").toString().substring(1,6);

        Store store = new Store(storeId,storeDist,zip);

        String productURI = "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/details?store_id=" +
                storeId+"&tcin=" + tcin;
        headers.set("X-RapidAPI-Key", apiKey.getRapidAPI());
        headers.set("X-RapidAPI-Host", "target-com-store-product-reviews-locations-data.p.rapidapi.com");

        HttpEntity<Void> productRequest = new HttpEntity<>(headers);
        ResponseEntity<String> productResponse = restTemplate.exchange(productURI, HttpMethod.GET,
                productRequest,String.class);

        JsonObject productData = new JsonParser().parse(productResponse.getBody()).getAsJsonObject();
        JsonObject productInfo = (JsonObject) productData.get("product");
        JsonObject priceInfo = (JsonObject) productInfo.get("price");

        // Price of requested product
        double productPrice = Double.parseDouble(priceInfo.get("current_retail").toString());

        String taxURI = "https://api.apilayer.com/tax_data/tax_rates?zip=" + zip + "&country=US";
        headers.set("apikey", "48n1QGuhg6DP7ERxniyNs0l1L0ItasrH");

        HttpEntity<Void> taxRequest = new HttpEntity<>(headers);
        ResponseEntity<String> taxResponse = restTemplate.exchange(taxURI, HttpMethod.GET,
                taxRequest, String.class);

        JsonObject taxData = new JsonParser().parse(taxResponse.getBody()).getAsJsonObject();
        store.setTaxRate(Double.parseDouble(taxData.get("combined_rate").toString()));
        store.setCurrentPrice(productPrice);

        stores.add(store);

    }

    @Override
    public ArrayList<Store> getStores() {
        return stores;
    }

}
