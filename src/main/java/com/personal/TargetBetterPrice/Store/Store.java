package com.personal.TargetBetterPrice.Store;

import java.util.ArrayList;
import java.util.TreeMap;

public class Store {

    private final String location_id;
    private final String distance;
    private final String postal_code;
    private final String address;
    private double taxRate;
    private double currentPrice;
    private double totalPrice;
    private ArrayList<Product> availableProducts;

    public Store(String location_id, String distance, String postal_code) {
        this.location_id = location_id;
        this.distance = distance;
        this.postal_code = postal_code;
        this.address = "address";
        this.availableProducts = new ArrayList<>();
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
    public String getAddress() {return address;}
    public int getProductCount(){return availableProducts.size();}

    public double getCurrentPrice() {
        return currentPrice;
    }

    public void setTaxRate(double taxRate) {
        this.taxRate = taxRate;
    }

    public void addProduct(String name, double price){
        Product product = new Product(name, price);
        product.setTotalPrice(price*taxRate);
        availableProducts.add(product);
    }

    public void setCurrentPrice(double currentPrice) {
        this.currentPrice = currentPrice;
        this.totalPrice = (double) Math.round(((currentPrice*taxRate) + currentPrice)*100)/100;
    }

    public double getTotalPrice() {
        return totalPrice;
    }
}
