package com.personal.TargetBetterPrice.Store;

public class Product {
  private String name;
  private double retailPrice;
  private double totalPrice;

  public Product(String name, double price) {
    this.name = name;
    this.retailPrice = price;
  }

  public double getTotalPrice() {
    return totalPrice;
  }

  public void setTotalPrice(double totalPrice) {
    this.totalPrice = totalPrice;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public double getRetailPrice() {
    return retailPrice;
  }

  public void setRetailPrice(double retailPrice) {
    this.retailPrice = retailPrice;
  }
}
