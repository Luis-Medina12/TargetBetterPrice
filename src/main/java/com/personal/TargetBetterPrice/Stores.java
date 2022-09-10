package com.personal.TargetBetterPrice;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.google.gson.*;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Stores {
    private String storeData;
    private String storeID;
    private String distance;
    private int zipCode;
    private double taxRate;

    public Stores(String storeData) {
        this.storeData = storeData;
        setStoreData();
    }

    public String getStoreID() {
        return storeID;
    }

    public String getDistance() {
        return distance;
    }

    public int getZipCode() {
        return zipCode;
    }

    //This function will parse the store info and set each variable
    // TODO: 9/6/2022 Create new class of stores - will be a data structure to hold
    //  info on stores within given range
    private void setStoreData()
    {
        JsonObject data = new JsonParser().parse(this.storeData).getAsJsonObject();
        JsonArray jsonArray = (JsonArray) data.get("locations");
        JsonObject storeLoc = (JsonObject) jsonArray.get(0);
        JsonObject storeAdd = (JsonObject) storeLoc.get("address");

        this.storeID = storeLoc.get("location_id").toString();
        this.distance = storeLoc.get("distance").toString();
        this.zipCode = Integer.parseInt(storeAdd.get("postal_code").toString().substring(1,6));
    }
}
