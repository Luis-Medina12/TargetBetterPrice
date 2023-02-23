package com.personal.TargetBetterPrice;

import com.personal.TargetBetterPrice.Store.StoreInterface;
import com.personal.TargetBetterPrice.Store.Store;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class applicationController {

    @Autowired
    StoreInterface storeService;

    @RequestMapping(value = "/targetBetterPrice/singleItem", method = RequestMethod.GET)
    public ArrayList<Store> stores(@RequestParam String zip, String tcin, String distance)
    {
        storeService.findStoresSingle(zip,tcin,distance);

        return  storeService.getStores();
    }

//    @RequestMapping(value = "/targetBetterPrice/multipleItems", method = RequestMethod.GET)
//    public ArrayList<Store> stores(@RequestParam String zip, int[] tcin, String distance)
//    {
//        storeService.findStoresMultiple(zip,tcin[1],distance);
//        return  storeService.getStores();
//    }
}
