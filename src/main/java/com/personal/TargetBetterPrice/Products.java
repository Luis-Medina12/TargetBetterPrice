package com.personal.TargetBetterPrice;

public class Products {
    // TODO: 9/6/2022 Call API to grab product info based on TCIN and store within this
    //  class.

    private String name;
    private int TCIN;
    private long finalPrice;
    private long currentPrice;

    public Products(String product) {
        setProductInfo(product);
    }

    public String getName() {
        return name;
    }

    public int getTCIN() {
        return TCIN;
    }

    public long getFinalPrice() {
        return finalPrice;
    }

    public long getCurrentPrice() {
        return currentPrice;
    }

    // TODO: 9/6/2022 Similar to Store Class - pas in JSON info as String and parse.
    //  Once parsed, extract needed info
    private void setProductInfo(String productInfo) {
    }
}
