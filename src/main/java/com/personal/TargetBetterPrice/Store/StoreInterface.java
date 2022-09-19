package com.personal.TargetBetterPrice.Store;

import java.util.ArrayList;

public interface StoreInterface {
    void insertStores(String homeZip, int tcin, String distance);
    ArrayList<Store> getStores();
}
