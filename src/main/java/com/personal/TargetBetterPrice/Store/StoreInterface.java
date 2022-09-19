package com.personal.TargetBetterPrice.Store;

import java.util.ArrayList;

public interface StoreInterface {
    public abstract void insertStores(String homeZip, int tcin, String distance);
    public abstract ArrayList<Store> getStores();
}
