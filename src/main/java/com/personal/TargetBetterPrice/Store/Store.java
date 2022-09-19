package com.personal.TargetBetterPrice.Store;

public class Store {

    private String location_id;
    private String distance;
    private String postal_code;
    private String address;
    private double taxRate;
    private double currentPrice;
    private double totalPrice;

    public Store(String location_id, String distance, String postal_code, String address) {
        this.location_id = location_id;
        this.distance = distance;
        this.postal_code = postal_code;
        this.address = address;
    }

    public String getStoreID() {
        return location_id;
    }

    public String getDistance() {
        return distance;
    }

    public String getZipCode() {
        return postal_code;
    }

    public String getAddress() {
        return address;
    }

    public void setTaxRate(double taxRate) {
        this.taxRate = taxRate;
    }

    public double getCurrentPrice() {
        return currentPrice;
    }

    public void setCurrentPrice(double currentPrice) {
        this.currentPrice = currentPrice;
        this.totalPrice = (currentPrice*taxRate) + currentPrice;
    }

    public double getTotalPrice() {
        return totalPrice;
    }
}
