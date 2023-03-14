import {zips} from './TaxData';
import { productResp } from './ProductData';
import { locationsResp } from './LocationData';
import axios from 'axios';

import { getPlacesData, getProductData} from '../api';
import { Place } from '@material-ui/icons';

// takes in a tcin, zip, and distance from user
// will return an array of stores containing the storeName, totalPrice, travelDistance, and address
export const getStores = (tcin, zip, distance) =>{
    const stores = [];
    const places = getStoreData();

    console.log(places);

    for(const store of locationsResp.locations)
    {
      const info = new OutputData(store.address.address_line1, 
        store.location_names[0].name, productResp.product.price.current_retail, store.distance, 
        getTaxRate(store.address.postal_code.substring(0,5)), 
        store.geographic_specifications.longitude, 
        store.geographic_specifications.latitude);
        stores.push(info);
    };

    stores.sort((a,b) => a.price - b.price);
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

// Map tax rates on initial render for easy access
const taxRates = new Map();
for(const city of zips.data)
  {
    taxRates.set(city.zip, city.combined_rate);
  }

const getTaxRate = (zip) =>{
  return taxRates.get(zip);
}

const getLocations = () =>{
  
}

const getStoreData = async () => {

  const URL = 'https://8031d83b-398e-47cb-a622-9a364682a8e3.mock.pstmn.io/stores';
  try{
    const {data: {data}}  = await axios.get(URL);
    
    return data;

  } catch(error){
      console.log(error);

  }
}