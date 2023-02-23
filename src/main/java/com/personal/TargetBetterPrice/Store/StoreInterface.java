package com.personal.TargetBetterPrice.Store;

import java.util.ArrayList;

public interface StoreInterface {
    void findStoresSingle(String homeZip, String tcin, String distance);
    void findStoresMultiple(String homeZip, String tcin, String distance);
    ArrayList<Store> getStores();
}
