import {zips} from './TaxData';
import { productResp } from './ProductData';
import { locationsResp } from './LocationData';

// takes in a tcin, zip, and distance from user
// will return an array of stores containing the storeName, totalPrice, travelDistance, and address
export const getStoreData = (tcin, zip, distance) =>{

    const stores = [];
    
    for(const store of locationsResp.locations)
    {
      const info = new OutputData(store.address.address_line1, 
        store.location_names[0].name, productResp.product.price.current_retail, store.distance, 
        getTaxRate(store.address.postal_code.substring(0,5)), 
        store.geographic_specifications.longitude, 
        store.geographic_specifications.latitude);
        stores.push(info);

    };

    return stores;
}

function OutputData(address, storeName, price, distance, taxrate, lon, lat){
    this.address = address;
    this.storeName = storeName;
    this.price = price;
    this.distance = distance;
    this.taxrate = taxrate;
    this.lon = lon;
    this.lat = lat;
}

const getTaxRate = (zip) =>{
  for(const city of zips.data)
  {
    if(city.zip === zip)
    {
      return city.combined_rate;
    }
  }
  return 0;

}