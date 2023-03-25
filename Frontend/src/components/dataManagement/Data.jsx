import {zips} from './TaxData';
import axios from 'axios';

// takes in a tcin, zip, and distance from user
// will return promise containing store location data
let results;
export const getStores = async (tcin, zip, distance) =>{
    
  const URL = 'https://8031d83b-398e-47cb-a622-9a364682a8e3.mock.pstmn.io/stores';

  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
    
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

export const getTaxRate = (zip) =>{
  return taxRates.get(zip);
}