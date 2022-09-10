package com.personal.TargetBetterPrice.Store;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoreService {

    public List<Store> getStores()
    {
        return List.of(
                new Store(
                        "2345",
                        "12.5",
                        12345
                )
        );
    }
}
