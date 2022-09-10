package com.personal.TargetBetterPrice.Store;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;


@JsonIgnoreProperties(ignoreUnknown = true)
@Entity
@Table
public class Store {
    @Id
    @SequenceGenerator(
            name = "store_sequence",
            sequenceName = "store_sequence",
            allocationSize = 1
    )

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "store_sequence"
    )
    //private String storeData;
    private String storeID;
    private String distance;
    private int zipCode;
    //private double taxRate;

    public Store() {
    }

    public Store(String storeID, String distance, int zipCode) {
        this.storeID = storeID;
        this.distance = distance;
        this.zipCode = zipCode;
    }

//    public Store(String storeData) {
//        this.storeData = storeData;
//        //setStoreData();
//    }

    public String getStoreID() {
        return storeID;
    }

    public String getDistance() {
        return distance;
    }

    public int getZipCode() {
        return zipCode;
    }

//    public void setStoreData(String storeData) {
//        this.storeData = storeData;
//    }

    public void setStoreID(String storeID) {
        this.storeID = storeID;
    }

    public void setDistance(String distance) {
        this.distance = distance;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }

//    public void setTaxRate(double taxRate) {
//        this.taxRate = taxRate;
//    }

    //    //This function will parse the store info and set each variable
//    // TODO: 9/6/2022 Create new class of stores - will be a data structure to hold
//    //  info on stores within given range
//    private void setStoreData()
//    {
//        JsonObject data = new JsonParser().parse(this.storeData).getAsJsonObject();
//        JsonArray jsonArray = (JsonArray) data.get("locations");
//        JsonObject storeLoc = (JsonObject) jsonArray.get(0);
//        JsonObject storeAdd = (JsonObject) storeLoc.get("address");
//
//        this.storeID = storeLoc.get("location_id").toString();
//        this.distance = storeLoc.get("distance").toString();
//        this.zipCode = Integer.parseInt(storeAdd.get("postal_code").toString().substring(1,6));
//    }
}
