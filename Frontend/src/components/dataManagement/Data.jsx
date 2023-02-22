
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

const locationsResp = {
    "locations": [
      {
        "location_id": 2354,
        "type_code": "STR",
        "type_description": "Store",
        "status": "Open",
        "distance": 1.76,
        "distance_unit": "mile",
        "location_names": [
          {
            "name_type": "Proj Name",
            "name": "Phoenix Spectrum"
          }
        ],
        "address": {
          "address_line1": "5715 N 19th Ave",
          "city": "Phoenix",
          "county": "Maricopa",
          "region": "AZ",
          "state": "Arizona",
          "postal_code": "85015-2433"
        },
        "capabilities": [
          {
            "capability_code": "Wine Beer Spir",
            "capability_name": "Wine, Beer & Spirits Available"
          },
          {
            "capability_code": "Drive Up",
            "capability_name": "Drive Up"
          },
          {
            "capability_code": "Opt",
            "capability_name": "Target Optical"
          },
          {
            "capability_code": "Ulta",
            "capability_name": "Ulta Beauty at Target"
          },
          {
            "capability_code": "Starbucks",
            "capability_name": "Starbucks Cafe"
          },
          {
            "capability_code": "CVS pharmacy",
            "capability_name": "CVS pharmacy"
          },
          {
            "capability_code": "Bakery",
            "capability_name": "Bakery"
          },
          {
            "capability_code": "Store Pickup",
            "capability_name": "Store Pickup"
          },
          {
            "capability_code": "Mobile",
            "capability_name": "Cell Phone Activation Counter"
          },
          {
            "capability_code": "Expand Grocery",
            "capability_name": "Expanded Grocery"
          },
          {
            "capability_code": "Deli",
            "capability_name": "Deli"
          },
          {
            "capability_code": "Shipt Delivery",
            "capability_name": "Shipt Delivery"
          }
        ],
        "physical_specifications": {
          "total_building_area": 177308
        },
        "contact_information": {
          "building_area": "MAIN",
          "telephone_type": "VOICE",
          "telephone_number": "602-308-3604"
        },
        "geographic_specifications": {
          "latitude": 33.520769,
          "longitude": -112.096798,
          "time_zone_code": "MST",
          "iso_time_zone": "America/Phoenix"
        },
        "rolling_operating_hours": {
          "regular_event_hours": {
            "days": [
              {
                "sequence_number": 1,
                "date": "2023-01-20",
                "day_name": "Friday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-20",
                    "end_date": "2023-01-20"
                  }
                ]
              },
              {
                "sequence_number": 2,
                "date": "2023-01-21",
                "day_name": "Saturday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-21",
                    "end_date": "2023-01-21"
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "location_id": 3261,
        "type_code": "STR",
        "type_description": "Store",
        "status": "Open",
        "distance": 4.46,
        "distance_unit": "mile",
        "location_names": [
          {
            "name_type": "Proj Name",
            "name": "Phoenix Uptown Camelback"
          }
        ],
        "address": {
          "address_line1": "1625 E Camelback Rd",
          "city": "Phoenix",
          "county": "Maricopa",
          "region": "AZ",
          "state": "Arizona",
          "postal_code": "85016-3901"
        },
        "capabilities": [
          {
            "capability_code": "Drive Up",
            "capability_name": "Drive Up"
          },
          {
            "capability_code": "Fresh Grocery",
            "capability_name": "Fresh Grocery"
          },
          {
            "capability_code": "Wine Beer",
            "capability_name": "Wine & Beer Available"
          },
          {
            "capability_code": "Starbucks",
            "capability_name": "Starbucks Cafe"
          },
          {
            "capability_code": "CVS pharmacy",
            "capability_name": "CVS pharmacy"
          },
          {
            "capability_code": "Store Pickup",
            "capability_name": "Store Pickup"
          },
          {
            "capability_code": "Shipt Delivery",
            "capability_name": "Shipt Delivery"
          }
        ],
        "physical_specifications": {
          "total_building_area": 50706
        },
        "contact_information": {
          "building_area": "MAIN",
          "telephone_type": "VOICE",
          "telephone_number": "602-603-7581"
        },
        "geographic_specifications": {
          "latitude": 33.507522,
          "longitude": -112.046462,
          "time_zone_code": "MST",
          "iso_time_zone": "America/Phoenix"
        },
        "rolling_operating_hours": {
          "regular_event_hours": {
            "days": [
              {
                "sequence_number": 1,
                "date": "2023-01-20",
                "day_name": "Friday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "07:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-20",
                    "end_date": "2023-01-20"
                  }
                ]
              },
              {
                "sequence_number": 2,
                "date": "2023-01-21",
                "day_name": "Saturday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-21",
                    "end_date": "2023-01-21"
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "location_id": 2341,
        "type_code": "STR",
        "type_description": "Store",
        "status": "Open",
        "distance": 5.2,
        "distance_unit": "mile",
        "location_names": [
          {
            "name_type": "Proj Name",
            "name": "Glendale"
          }
        ],
        "address": {
          "address_line1": "10404 N 43rd Ave",
          "city": "Glendale",
          "county": "Maricopa",
          "region": "AZ",
          "state": "Arizona",
          "postal_code": "85302-2019"
        },
        "capabilities": [
          {
            "capability_code": "Cafe-Pizza",
            "capability_name": "Café-Pizza"
          },
          {
            "capability_code": "Drive Up",
            "capability_name": "Drive Up"
          },
          {
            "capability_code": "Fresh Grocery",
            "capability_name": "Fresh Grocery"
          },
          {
            "capability_code": "Wine Beer",
            "capability_name": "Wine & Beer Available"
          },
          {
            "capability_code": "Starbucks",
            "capability_name": "Starbucks Cafe"
          },
          {
            "capability_code": "CVS pharmacy",
            "capability_name": "CVS pharmacy"
          },
          {
            "capability_code": "Store Pickup",
            "capability_name": "Store Pickup"
          },
          {
            "capability_code": "Mobile",
            "capability_name": "Cell Phone Activation Counter"
          },
          {
            "capability_code": "Shipt Delivery",
            "capability_name": "Shipt Delivery"
          }
        ],
        "physical_specifications": {
          "total_building_area": 129810
        },
        "contact_information": {
          "building_area": "MAIN",
          "telephone_type": "VOICE",
          "telephone_number": "623-931-4434"
        },
        "geographic_specifications": {
          "latitude": 33.580184,
          "longitude": -112.152971,
          "time_zone_code": "MST",
          "iso_time_zone": "America/Phoenix"
        },
        "rolling_operating_hours": {
          "regular_event_hours": {
            "days": [
              {
                "sequence_number": 1,
                "date": "2023-01-20",
                "day_name": "Friday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-20",
                    "end_date": "2023-01-20"
                  }
                ]
              },
              {
                "sequence_number": 2,
                "date": "2023-01-21",
                "day_name": "Saturday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-21",
                    "end_date": "2023-01-21"
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "location_id": 851,
        "type_code": "STR",
        "type_description": "Store",
        "status": "Open",
        "distance": 5.94,
        "distance_unit": "mile",
        "location_names": [
          {
            "name_type": "Proj Name",
            "name": "Westridge"
          }
        ],
        "address": {
          "address_line1": "7409 W Virginia Ave",
          "city": "Phoenix",
          "county": "Maricopa",
          "region": "AZ",
          "state": "Arizona",
          "postal_code": "85035-1336"
        },
        "capabilities": [
          {
            "capability_code": "Cafe-Pizza",
            "capability_name": "Café-Pizza"
          },
          {
            "capability_code": "Drive Up",
            "capability_name": "Drive Up"
          },
          {
            "capability_code": "Wine Beer",
            "capability_name": "Wine & Beer Available"
          },
          {
            "capability_code": "Starbucks",
            "capability_name": "Starbucks Cafe"
          },
          {
            "capability_code": "CVS pharmacy",
            "capability_name": "CVS pharmacy"
          },
          {
            "capability_code": "Store Pickup",
            "capability_name": "Store Pickup"
          },
          {
            "capability_code": "Mobile",
            "capability_name": "Cell Phone Activation Counter"
          },
          {
            "capability_code": "Shipt Delivery",
            "capability_name": "Shipt Delivery"
          }
        ],
        "physical_specifications": {
          "total_building_area": 122376
        },
        "contact_information": {
          "building_area": "MAIN",
          "telephone_type": "VOICE",
          "telephone_number": "623-245-1800"
        },
        "geographic_specifications": {
          "latitude": 33.475425,
          "longitude": -112.218617,
          "time_zone_code": "MST",
          "iso_time_zone": "America/Phoenix"
        },
        "rolling_operating_hours": {
          "regular_event_hours": {
            "days": [
              {
                "sequence_number": 1,
                "date": "2023-01-20",
                "day_name": "Friday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-20",
                    "end_date": "2023-01-20"
                  }
                ]
              },
              {
                "sequence_number": 2,
                "date": "2023-01-21",
                "day_name": "Saturday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-21",
                    "end_date": "2023-01-21"
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "location_id": 950,
        "type_code": "STR",
        "type_description": "Store",
        "status": "Open",
        "distance": 8.33,
        "distance_unit": "mile",
        "location_names": [
          {
            "name_type": "Proj Name",
            "name": "Arcadia Crossing"
          }
        ],
        "address": {
          "address_line1": "4515 E Thomas Rd",
          "city": "Phoenix",
          "county": "Maricopa",
          "region": "AZ",
          "state": "Arizona",
          "postal_code": "85018-7614"
        },
        "capabilities": [
          {
            "capability_code": "Snack Bar Pizza",
            "capability_name": "Snack Bar - Pizza"
          },
          {
            "capability_code": "Drive Up",
            "capability_name": "Drive Up"
          },
          {
            "capability_code": "Opt",
            "capability_name": "Target Optical"
          },
          {
            "capability_code": "Fresh Grocery",
            "capability_name": "Fresh Grocery"
          },
          {
            "capability_code": "Wine Beer",
            "capability_name": "Wine & Beer Available"
          },
          {
            "capability_code": "Starbucks",
            "capability_name": "Starbucks Cafe"
          },
          {
            "capability_code": "CVS pharmacy",
            "capability_name": "CVS pharmacy"
          },
          {
            "capability_code": "Store Pickup",
            "capability_name": "Store Pickup"
          },
          {
            "capability_code": "Mobile",
            "capability_name": "Cell Phone Activation Counter"
          },
          {
            "capability_code": "Shipt Delivery",
            "capability_name": "Shipt Delivery"
          }
        ],
        "physical_specifications": {
          "total_building_area": 122482
        },
        "contact_information": {
          "building_area": "MAIN",
          "telephone_type": "VOICE",
          "telephone_number": "602-952-1797"
        },
        "geographic_specifications": {
          "latitude": 33.477388,
          "longitude": -111.984509,
          "time_zone_code": "MST",
          "iso_time_zone": "America/Phoenix"
        },
        "rolling_operating_hours": {
          "regular_event_hours": {
            "days": [
              {
                "sequence_number": 1,
                "date": "2023-01-20",
                "day_name": "Friday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-20",
                    "end_date": "2023-01-20"
                  }
                ]
              },
              {
                "sequence_number": 2,
                "date": "2023-01-21",
                "day_name": "Saturday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-21",
                    "end_date": "2023-01-21"
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "location_id": 1361,
        "type_code": "STR",
        "type_description": "Store",
        "status": "Open",
        "distance": 8.44,
        "distance_unit": "mile",
        "location_names": [
          {
            "name_type": "Proj Name",
            "name": "Peoria SW"
          }
        ],
        "address": {
          "address_line1": "9350 W Northern Ave",
          "city": "Glendale",
          "county": "Maricopa",
          "region": "AZ",
          "state": "Arizona",
          "postal_code": "85305-1103"
        },
        "capabilities": [
          {
            "capability_code": "Drive Up",
            "capability_name": "Drive Up"
          },
          {
            "capability_code": "Opt",
            "capability_name": "Target Optical"
          },
          {
            "capability_code": "Fresh Grocery",
            "capability_name": "Fresh Grocery"
          },
          {
            "capability_code": "Wine Beer",
            "capability_name": "Wine & Beer Available"
          },
          {
            "capability_code": "CVS pharmacy",
            "capability_name": "CVS pharmacy"
          },
          {
            "capability_code": "Store Pickup",
            "capability_name": "Store Pickup"
          },
          {
            "capability_code": "Mobile",
            "capability_name": "Cell Phone Activation Counter"
          },
          {
            "capability_code": "Shipt Delivery",
            "capability_name": "Shipt Delivery"
          }
        ],
        "physical_specifications": {
          "total_building_area": 125400
        },
        "contact_information": {
          "building_area": "MAIN",
          "telephone_type": "VOICE",
          "telephone_number": "623-877-8440"
        },
        "geographic_specifications": {
          "latitude": 33.554179,
          "longitude": -112.259787,
          "time_zone_code": "MST",
          "iso_time_zone": "America/Phoenix"
        },
        "rolling_operating_hours": {
          "regular_event_hours": {
            "days": [
              {
                "sequence_number": 1,
                "date": "2023-01-20",
                "day_name": "Friday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-20",
                    "end_date": "2023-01-20"
                  }
                ]
              },
              {
                "sequence_number": 2,
                "date": "2023-01-21",
                "day_name": "Saturday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-21",
                    "end_date": "2023-01-21"
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "location_id": 2236,
        "type_code": "STR",
        "type_description": "Store",
        "status": "Open",
        "distance": 9.51,
        "distance_unit": "mile",
        "location_names": [
          {
            "name_type": "Proj Name",
            "name": "Phoenix 7th Street and Bell"
          }
        ],
        "address": {
          "address_line1": "16806 N 7th St",
          "city": "Phoenix",
          "county": "Maricopa",
          "region": "AZ",
          "state": "Arizona",
          "postal_code": "85022-2662"
        },
        "capabilities": [
          {
            "capability_code": "Wine Beer Spir",
            "capability_name": "Wine, Beer & Spirits Available"
          },
          {
            "capability_code": "Cafe-Pizza",
            "capability_name": "Café-Pizza"
          },
          {
            "capability_code": "Drive Up",
            "capability_name": "Drive Up"
          },
          {
            "capability_code": "Opt",
            "capability_name": "Target Optical"
          },
          {
            "capability_code": "Starbucks",
            "capability_name": "Starbucks Cafe"
          },
          {
            "capability_code": "CVS pharmacy",
            "capability_name": "CVS pharmacy"
          },
          {
            "capability_code": "Bakery",
            "capability_name": "Bakery"
          },
          {
            "capability_code": "Store Pickup",
            "capability_name": "Store Pickup"
          },
          {
            "capability_code": "Mobile",
            "capability_name": "Cell Phone Activation Counter"
          },
          {
            "capability_code": "Expand Grocery",
            "capability_name": "Expanded Grocery"
          },
          {
            "capability_code": "Deli",
            "capability_name": "Deli"
          },
          {
            "capability_code": "Shipt Delivery",
            "capability_name": "Shipt Delivery"
          }
        ],
        "physical_specifications": {
          "total_building_area": 177605
        },
        "contact_information": {
          "building_area": "MAIN",
          "telephone_type": "VOICE",
          "telephone_number": "602-794-3601"
        },
        "geographic_specifications": {
          "latitude": 33.63865,
          "longitude": -112.069,
          "time_zone_code": "MST",
          "iso_time_zone": "America/Phoenix"
        },
        "rolling_operating_hours": {
          "regular_event_hours": {
            "days": [
              {
                "sequence_number": 1,
                "date": "2023-01-20",
                "day_name": "Friday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-20",
                    "end_date": "2023-01-20"
                  }
                ]
              },
              {
                "sequence_number": 2,
                "date": "2023-01-21",
                "day_name": "Saturday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-21",
                    "end_date": "2023-01-21"
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "location_id": 233,
        "type_code": "STR",
        "type_description": "Store",
        "status": "Open",
        "distance": 10.01,
        "distance_unit": "mile",
        "location_names": [
          {
            "name_type": "Proj Name",
            "name": "Paradise Valley"
          }
        ],
        "address": {
          "address_line1": "12602 N Paradise Village Pkwy W",
          "city": "Phoenix",
          "county": "Maricopa",
          "region": "AZ",
          "state": "Arizona",
          "postal_code": "85032-7671"
        },
        "capabilities": [
          {
            "capability_code": "Drive Up",
            "capability_name": "Drive Up"
          },
          {
            "capability_code": "Ulta",
            "capability_name": "Ulta Beauty at Target"
          },
          {
            "capability_code": "Fresh Grocery",
            "capability_name": "Fresh Grocery"
          },
          {
            "capability_code": "Wine Beer",
            "capability_name": "Wine & Beer Available"
          },
          {
            "capability_code": "Starbucks",
            "capability_name": "Starbucks Cafe"
          },
          {
            "capability_code": "CVS pharmacy",
            "capability_name": "CVS pharmacy"
          },
          {
            "capability_code": "Store Pickup",
            "capability_name": "Store Pickup"
          },
          {
            "capability_code": "Mobile",
            "capability_name": "Cell Phone Activation Counter"
          },
          {
            "capability_code": "Shipt Delivery",
            "capability_name": "Shipt Delivery"
          }
        ],
        "physical_specifications": {
          "total_building_area": 120065
        },
        "contact_information": {
          "building_area": "MAIN",
          "telephone_type": "VOICE",
          "telephone_number": "602-953-2151"
        },
        "geographic_specifications": {
          "latitude": 33.600407,
          "longitude": -111.989239,
          "time_zone_code": "MST",
          "iso_time_zone": "America/Phoenix"
        },
        "rolling_operating_hours": {
          "regular_event_hours": {
            "days": [
              {
                "sequence_number": 1,
                "date": "2023-01-20",
                "day_name": "Friday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-20",
                    "end_date": "2023-01-20"
                  }
                ]
              },
              {
                "sequence_number": 2,
                "date": "2023-01-21",
                "day_name": "Saturday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-21",
                    "end_date": "2023-01-21"
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "location_id": 2149,
        "type_code": "STR",
        "type_description": "Store",
        "status": "Open",
        "distance": 10.29,
        "distance_unit": "mile",
        "location_names": [
          {
            "name_type": "Proj Name",
            "name": "Phoenix SW"
          }
        ],
        "address": {
          "address_line1": "9830 W Lower Buckeye Rd",
          "city": "Tolleson",
          "county": "Maricopa",
          "region": "AZ",
          "state": "Arizona",
          "postal_code": "85353-9424"
        },
        "capabilities": [
          {
            "capability_code": "Cafe-Pizza",
            "capability_name": "Café-Pizza"
          },
          {
            "capability_code": "Drive Up",
            "capability_name": "Drive Up"
          },
          {
            "capability_code": "Fresh Grocery",
            "capability_name": "Fresh Grocery"
          },
          {
            "capability_code": "Wine Beer",
            "capability_name": "Wine & Beer Available"
          },
          {
            "capability_code": "Starbucks",
            "capability_name": "Starbucks Cafe"
          },
          {
            "capability_code": "CVS pharmacy",
            "capability_name": "CVS pharmacy"
          },
          {
            "capability_code": "Store Pickup",
            "capability_name": "Store Pickup"
          },
          {
            "capability_code": "Mobile",
            "capability_name": "Cell Phone Activation Counter"
          },
          {
            "capability_code": "Shipt Delivery",
            "capability_name": "Shipt Delivery"
          }
        ],
        "physical_specifications": {
          "total_building_area": 126879
        },
        "contact_information": {
          "building_area": "MAIN",
          "telephone_type": "VOICE",
          "telephone_number": "623-687-2136"
        },
        "geographic_specifications": {
          "latitude": 33.423059,
          "longitude": -112.269381,
          "time_zone_code": "MST",
          "iso_time_zone": "America/Phoenix"
        },
        "rolling_operating_hours": {
          "regular_event_hours": {
            "days": [
              {
                "sequence_number": 1,
                "date": "2023-01-20",
                "day_name": "Friday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-20",
                    "end_date": "2023-01-20"
                  }
                ]
              },
              {
                "sequence_number": 2,
                "date": "2023-01-21",
                "day_name": "Saturday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-21",
                    "end_date": "2023-01-21"
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "location_id": 1905,
        "type_code": "STR",
        "type_description": "Store",
        "status": "Open",
        "distance": 10.33,
        "distance_unit": "mile",
        "location_names": [
          {
            "name_type": "Proj Name",
            "name": "South Mountain"
          }
        ],
        "address": {
          "address_line1": "2140 E Baseline Rd",
          "city": "Phoenix",
          "county": "Maricopa",
          "region": "AZ",
          "state": "Arizona",
          "postal_code": "85042-6910"
        },
        "capabilities": [
          {
            "capability_code": "Drive Up",
            "capability_name": "Drive Up"
          },
          {
            "capability_code": "Fresh Grocery",
            "capability_name": "Fresh Grocery"
          },
          {
            "capability_code": "Wine Beer",
            "capability_name": "Wine & Beer Available"
          },
          {
            "capability_code": "Starbucks",
            "capability_name": "Starbucks Cafe"
          },
          {
            "capability_code": "CVS pharmacy",
            "capability_name": "CVS pharmacy"
          },
          {
            "capability_code": "Store Pickup",
            "capability_name": "Store Pickup"
          },
          {
            "capability_code": "WIC",
            "capability_name": "Accepts WIC"
          },
          {
            "capability_code": "Mobile",
            "capability_name": "Cell Phone Activation Counter"
          },
          {
            "capability_code": "Shipt Delivery",
            "capability_name": "Shipt Delivery"
          }
        ],
        "physical_specifications": {
          "total_building_area": 124734
        },
        "contact_information": {
          "building_area": "MAIN",
          "telephone_type": "VOICE",
          "telephone_number": "602-281-1119"
        },
        "geographic_specifications": {
          "latitude": 33.379333,
          "longitude": -112.03501,
          "time_zone_code": "MST",
          "iso_time_zone": "America/Phoenix"
        },
        "rolling_operating_hours": {
          "regular_event_hours": {
            "days": [
              {
                "sequence_number": 1,
                "date": "2023-01-20",
                "day_name": "Friday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-20",
                    "end_date": "2023-01-20"
                  }
                ]
              },
              {
                "sequence_number": 2,
                "date": "2023-01-21",
                "day_name": "Saturday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-21",
                    "end_date": "2023-01-21"
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "location_id": 825,
        "type_code": "STR",
        "type_description": "Store",
        "status": "Open",
        "distance": 10.67,
        "distance_unit": "mile",
        "location_names": [
          {
            "name_type": "Proj Name",
            "name": "Peoria North"
          }
        ],
        "address": {
          "address_line1": "8055 W Bell Rd",
          "city": "Peoria",
          "county": "Maricopa",
          "region": "AZ",
          "state": "Arizona",
          "postal_code": "85382-3806"
        },
        "capabilities": [
          {
            "capability_code": "Drive Up",
            "capability_name": "Drive Up"
          },
          {
            "capability_code": "Opt",
            "capability_name": "Target Optical"
          },
          {
            "capability_code": "Fresh Grocery",
            "capability_name": "Fresh Grocery"
          },
          {
            "capability_code": "Wine Beer",
            "capability_name": "Wine & Beer Available"
          },
          {
            "capability_code": "Starbucks",
            "capability_name": "Starbucks Cafe"
          },
          {
            "capability_code": "CVS pharmacy",
            "capability_name": "CVS pharmacy"
          },
          {
            "capability_code": "Store Pickup",
            "capability_name": "Store Pickup"
          },
          {
            "capability_code": "Mobile",
            "capability_name": "Cell Phone Activation Counter"
          },
          {
            "capability_code": "Shipt Delivery",
            "capability_name": "Shipt Delivery"
          }
        ],
        "physical_specifications": {
          "total_building_area": 132798
        },
        "contact_information": {
          "building_area": "MAIN",
          "telephone_type": "VOICE",
          "telephone_number": "623-979-0250"
        },
        "geographic_specifications": {
          "latitude": 33.636207,
          "longitude": -112.22854,
          "time_zone_code": "MST",
          "iso_time_zone": "America/Phoenix"
        },
        "rolling_operating_hours": {
          "regular_event_hours": {
            "days": [
              {
                "sequence_number": 1,
                "date": "2023-01-20",
                "day_name": "Friday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-20",
                    "end_date": "2023-01-20"
                  }
                ]
              },
              {
                "sequence_number": 2,
                "date": "2023-01-21",
                "day_name": "Saturday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-21",
                    "end_date": "2023-01-21"
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "location_id": 1141,
        "type_code": "STR",
        "type_description": "Store",
        "status": "Open",
        "distance": 10.91,
        "distance_unit": "mile",
        "location_names": [
          {
            "name_type": "Proj Name",
            "name": "Phoenix I17 and SR101"
          }
        ],
        "address": {
          "address_line1": "2727 W Agua Fria Fwy",
          "city": "Phoenix",
          "county": "Maricopa",
          "region": "AZ",
          "state": "Arizona",
          "postal_code": "85027-3929"
        },
        "capabilities": [
          {
            "capability_code": "Drive Up",
            "capability_name": "Drive Up"
          },
          {
            "capability_code": "Fresh Grocery",
            "capability_name": "Fresh Grocery"
          },
          {
            "capability_code": "Wine Beer",
            "capability_name": "Wine & Beer Available"
          },
          {
            "capability_code": "Starbucks",
            "capability_name": "Starbucks Cafe"
          },
          {
            "capability_code": "CVS pharmacy",
            "capability_name": "CVS pharmacy"
          },
          {
            "capability_code": "Store Pickup",
            "capability_name": "Store Pickup"
          },
          {
            "capability_code": "Mobile",
            "capability_name": "Cell Phone Activation Counter"
          },
          {
            "capability_code": "Shipt Delivery",
            "capability_name": "Shipt Delivery"
          }
        ],
        "physical_specifications": {
          "total_building_area": 122540
        },
        "contact_information": {
          "building_area": "MAIN",
          "telephone_type": "VOICE",
          "telephone_number": "623-869-8070"
        },
        "geographic_specifications": {
          "latitude": 33.666761,
          "longitude": -112.119577,
          "time_zone_code": "MST",
          "iso_time_zone": "America/Phoenix"
        },
        "rolling_operating_hours": {
          "regular_event_hours": {
            "days": [
              {
                "sequence_number": 1,
                "date": "2023-01-20",
                "day_name": "Friday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-20",
                    "end_date": "2023-01-20"
                  }
                ]
              },
              {
                "sequence_number": 2,
                "date": "2023-01-21",
                "day_name": "Saturday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-21",
                    "end_date": "2023-01-21"
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "location_id": 2176,
        "type_code": "STR",
        "type_description": "Store",
        "status": "Open",
        "distance": 13.73,
        "distance_unit": "mile",
        "location_names": [
          {
            "name_type": "Proj Name",
            "name": "Tempe Rio Salado"
          }
        ],
        "address": {
          "address_line1": "1800 E Rio Salado Pkwy",
          "city": "Tempe",
          "county": "Maricopa",
          "region": "AZ",
          "state": "Arizona",
          "postal_code": "85281-2266"
        },
        "capabilities": [
          {
            "capability_code": "Wine Beer Spir",
            "capability_name": "Wine, Beer & Spirits Available"
          },
          {
            "capability_code": "Cafe-Pizza",
            "capability_name": "Café-Pizza"
          },
          {
            "capability_code": "Drive Up",
            "capability_name": "Drive Up"
          },
          {
            "capability_code": "Fresh Grocery",
            "capability_name": "Fresh Grocery"
          },
          {
            "capability_code": "Starbucks",
            "capability_name": "Starbucks Cafe"
          },
          {
            "capability_code": "CVS pharmacy",
            "capability_name": "CVS pharmacy"
          },
          {
            "capability_code": "Store Pickup",
            "capability_name": "Store Pickup"
          },
          {
            "capability_code": "Mobile",
            "capability_name": "Cell Phone Activation Counter"
          },
          {
            "capability_code": "Shipt Delivery",
            "capability_name": "Shipt Delivery"
          }
        ],
        "physical_specifications": {
          "total_building_area": 138288
        },
        "contact_information": {
          "building_area": "MAIN",
          "telephone_type": "VOICE",
          "telephone_number": "480-214-2667"
        },
        "geographic_specifications": {
          "latitude": 33.430441,
          "longitude": -111.905248,
          "time_zone_code": "MST",
          "iso_time_zone": "America/Phoenix"
        },
        "rolling_operating_hours": {
          "regular_event_hours": {
            "days": [
              {
                "sequence_number": 1,
                "date": "2023-01-20",
                "day_name": "Friday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-20",
                    "end_date": "2023-01-20"
                  }
                ]
              },
              {
                "sequence_number": 2,
                "date": "2023-01-21",
                "day_name": "Saturday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-21",
                    "end_date": "2023-01-21"
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "location_id": 1242,
        "type_code": "STR",
        "type_description": "Store",
        "status": "Open",
        "distance": 13.74,
        "distance_unit": "mile",
        "location_names": [
          {
            "name_type": "Proj Name",
            "name": "Goodyear"
          }
        ],
        "address": {
          "address_line1": "1515 N Litchfield Rd",
          "city": "Goodyear",
          "county": "Maricopa",
          "region": "AZ",
          "state": "Arizona",
          "postal_code": "85395-1237"
        },
        "capabilities": [
          {
            "capability_code": "Drive Up",
            "capability_name": "Drive Up"
          },
          {
            "capability_code": "Opt",
            "capability_name": "Target Optical"
          },
          {
            "capability_code": "Fresh Grocery",
            "capability_name": "Fresh Grocery"
          },
          {
            "capability_code": "Wine Beer",
            "capability_name": "Wine & Beer Available"
          },
          {
            "capability_code": "Starbucks",
            "capability_name": "Starbucks Cafe"
          },
          {
            "capability_code": "Disney",
            "capability_name": "Disney store at Target"
          },
          {
            "capability_code": "CVS pharmacy",
            "capability_name": "CVS pharmacy"
          },
          {
            "capability_code": "Store Pickup",
            "capability_name": "Store Pickup"
          },
          {
            "capability_code": "Mobile",
            "capability_name": "Cell Phone Activation Counter"
          },
          {
            "capability_code": "Shipt Delivery",
            "capability_name": "Shipt Delivery"
          }
        ],
        "physical_specifications": {
          "total_building_area": 125102
        },
        "contact_information": {
          "building_area": "MAIN",
          "telephone_type": "VOICE",
          "telephone_number": "623-935-3510"
        },
        "geographic_specifications": {
          "latitude": 33.462942,
          "longitude": -112.355692,
          "time_zone_code": "MST",
          "iso_time_zone": "America/Phoenix"
        },
        "rolling_operating_hours": {
          "regular_event_hours": {
            "days": [
              {
                "sequence_number": 1,
                "date": "2023-01-20",
                "day_name": "Friday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-20",
                    "end_date": "2023-01-20"
                  }
                ]
              },
              {
                "sequence_number": 2,
                "date": "2023-01-21",
                "day_name": "Saturday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-21",
                    "end_date": "2023-01-21"
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "location_id": 363,
        "type_code": "STR",
        "type_description": "Store",
        "status": "Open",
        "distance": 13.78,
        "distance_unit": "mile",
        "location_names": [
          {
            "name_type": "Proj Name",
            "name": "Scottsdale Talking Stick Way"
          }
        ],
        "address": {
          "address_line1": "9000 E Talking Stick Way",
          "city": "Scottsdale",
          "county": "Maricopa",
          "region": "AZ",
          "state": "Arizona",
          "postal_code": "85250-8502"
        },
        "capabilities": [
          {
            "capability_code": "Drive Up",
            "capability_name": "Drive Up"
          },
          {
            "capability_code": "Fresh Grocery",
            "capability_name": "Fresh Grocery"
          },
          {
            "capability_code": "Starbucks",
            "capability_name": "Starbucks Cafe"
          },
          {
            "capability_code": "Disney",
            "capability_name": "Disney store at Target"
          },
          {
            "capability_code": "CVS pharmacy",
            "capability_name": "CVS pharmacy"
          },
          {
            "capability_code": "Store Pickup",
            "capability_name": "Store Pickup"
          },
          {
            "capability_code": "Mobile",
            "capability_name": "Cell Phone Activation Counter"
          },
          {
            "capability_code": "Shipt Delivery",
            "capability_name": "Shipt Delivery"
          }
        ],
        "physical_specifications": {
          "total_building_area": 105730
        },
        "contact_information": {
          "building_area": "MAIN",
          "telephone_type": "VOICE",
          "telephone_number": "480-951-4403"
        },
        "geographic_specifications": {
          "latitude": 33.54021,
          "longitude": -111.887628,
          "time_zone_code": "MST",
          "iso_time_zone": "America/Phoenix"
        },
        "rolling_operating_hours": {
          "regular_event_hours": {
            "days": [
              {
                "sequence_number": 1,
                "date": "2023-01-20",
                "day_name": "Friday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-20",
                    "end_date": "2023-01-20"
                  }
                ]
              },
              {
                "sequence_number": 2,
                "date": "2023-01-21",
                "day_name": "Saturday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-21",
                    "end_date": "2023-01-21"
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "location_id": 1360,
        "type_code": "STR",
        "type_description": "Store",
        "status": "Open",
        "distance": 14.33,
        "distance_unit": "mile",
        "location_names": [
          {
            "name_type": "Proj Name",
            "name": "Phoenix NE"
          }
        ],
        "address": {
          "address_line1": "21001 N Tatum Blvd Ste 20",
          "city": "Phoenix",
          "county": "Maricopa",
          "region": "AZ",
          "state": "Arizona",
          "postal_code": "85050-4207"
        },
        "capabilities": [
          {
            "capability_code": "Drive Up",
            "capability_name": "Drive Up"
          },
          {
            "capability_code": "Opt",
            "capability_name": "Target Optical"
          },
          {
            "capability_code": "Fresh Grocery",
            "capability_name": "Fresh Grocery"
          },
          {
            "capability_code": "Wine Beer",
            "capability_name": "Wine & Beer Available"
          },
          {
            "capability_code": "Starbucks",
            "capability_name": "Starbucks Cafe"
          },
          {
            "capability_code": "CVS pharmacy",
            "capability_name": "CVS pharmacy"
          },
          {
            "capability_code": "Store Pickup",
            "capability_name": "Store Pickup"
          },
          {
            "capability_code": "Mobile",
            "capability_name": "Cell Phone Activation Counter"
          },
          {
            "capability_code": "Shipt Delivery",
            "capability_name": "Shipt Delivery"
          }
        ],
        "physical_specifications": {
          "total_building_area": 142362
        },
        "contact_information": {
          "building_area": "MAIN",
          "telephone_type": "VOICE",
          "telephone_number": "480-419-9380"
        },
        "geographic_specifications": {
          "latitude": 33.674884,
          "longitude": -111.974585,
          "time_zone_code": "MST",
          "iso_time_zone": "America/Phoenix"
        },
        "rolling_operating_hours": {
          "regular_event_hours": {
            "days": [
              {
                "sequence_number": 1,
                "date": "2023-01-20",
                "day_name": "Friday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-20",
                    "end_date": "2023-01-20"
                  }
                ]
              },
              {
                "sequence_number": 2,
                "date": "2023-01-21",
                "day_name": "Saturday",
                "is_open": true,
                "hours": [
                  {
                    "begin_time": "08:00:00",
                    "end_time": "22:00:00",
                    "begin_date": "2023-01-21",
                    "end_date": "2023-01-21"
                  }
                ]
              }
            ]
          }
        }
      }
    ]
  }

const productResp = {
    "product": {
      "__typename": "Product",
      "tcin": "85756675",
      "category": {
        "parent_category_id": "5xtdw"
      },
      "ratings_and_reviews": {
        "has_verified": true,
        "statistics": {
          "not_recommended_count": 1,
          "question_count": 3,
          "rating": {
            "average": 4.72,
            "count": 356,
            "distribution": {
              "rating1": 4,
              "rating2": 2,
              "rating3": 11,
              "rating4": 57,
              "rating5": 282
            },
            "secondary_averages": [
              {
                "id": "colorQuality",
                "label": "color quality",
                "range": 5,
                "type": "RATING",
                "value": 5
              },
              {
                "id": "SoundQuality",
                "label": "sound quality",
                "range": 5,
                "type": "RATING",
                "value": 5
              },
              {
                "id": "brightness",
                "label": "brightness",
                "range": 5,
                "type": "RATING",
                "value": 5
              },
              {
                "id": "Features",
                "label": "features",
                "range": 5,
                "type": "RATING",
                "value": 5
              },
              {
                "id": "blackLevels",
                "label": "black levels",
                "range": 5,
                "type": "RATING",
                "value": 5
              }
            ]
          },
          "recommended_count": 2,
          "recommended_percentage": 66,
          "review_count": 354
        },
        "most_recent": [
          {
            "id": "aaf7e597-bee7-46d4-b526-19cd0d15de09",
            "text": "[This review was collected as part of a promotion.] Sleek & narrow without sacrificing any quality! Great cost too- awesome buy!",
            "author": {
              "nickname": "Jax S",
              "external_id": "fa87c165-7e84-5aca-bc9a-e55526bde30e"
            },
            "title": "Great",
            "rating": {
              "value": 5,
              "submitted_at": "2023-01-08T21:51:27Z"
            }
          },
          {
            "id": "68971d05-b009-4733-9b4b-2a739530e443",
            "text": "I bought this TV about a month ago and I'm happy I did. The picture clarity is wonderful and the audio is great for the room it's in.",
            "author": {
              "nickname": "Jason in Reno",
              "external_id": "d93b8a5e-1cfd-5b60-84b3-56c0debaab54"
            },
            "title": "Excellent quality",
            "rating": {
              "value": 5,
              "submitted_at": "2023-01-08T18:49:45Z"
            }
          },
          {
            "id": "d66eb969-6d52-40f7-8888-e71276a1845d",
            "text": "I like my 65 B2. The picture quality is great, and the blacks are perfect. I love watching anything on it. But the remote and the menu are not user-friendly at all. 1. It's annoying to press the main button in the control and activate the pointer. You have to be very cautious not to trigger it. 2. I liked the fireworks screensaver, but as soon as I entered my zip code the fireworks screensaver switched to a clock. I don't like it and there is no option to switch it back. 3. There is no option to set the weather units in Celsius. 4. The home screen is not intuitive at all. I mostly use apps (Netflix, Disney+, etc) and these apps are buried down and occupy a tiny portion of the screen. The user should have more freedom on how to arrange the home screen.",
            "author": {
              "nickname": "AGL9",
              "external_id": "3d57b738-0efe-5986-96a2-157a913bd89e"
            },
            "title": "The picture is gorgeous, but I hate the OS",
            "rating": {
              "value": 4,
              "submitted_at": "2023-01-08T02:39:14Z"
            }
          },
          {
            "id": "c66f0897-9933-4161-84ce-5c2cd7943774",
            "text": "Bought this TV for a Christmas gift for my wife and I. First time I’ve been to the DM store. My whole experience was great from start to finish. The best part was my wife was concerned about being able to control it. She’s a champ at it. Very easy to maneuver around. Thanks NFM for the experience. Donnie Glenn",
            "author": {
              "nickname": "Dglenn",
              "external_id": "7f2c836a-4e3f-5028-a75c-014d193d1b61"
            },
            "title": "Fantastic TV",
            "rating": {
              "value": 5,
              "submitted_at": "2023-01-07T16:14:26Z"
            }
          },
          {
            "id": "08bfa556-012b-4ce4-94bc-730b8994c824",
            "text": "Fantastic picture the colors are amazing looks great on the wall and it was so easy to set up I highly recommend",
            "author": {
              "nickname": "Dennis o",
              "external_id": "9fd4b031-c07d-55d0-8a64-1fcfae9022aa"
            },
            "title": "Great",
            "rating": {
              "value": 5,
              "submitted_at": "2023-01-07T15:52:12Z"
            }
          },
          {
            "id": "f459245b-344c-4072-93b0-6d7ff1903746",
            "text": "We had this TV installed about a month ago and it is awesome. Great picture and we are still figuring out all the capabilities of it. I would definitely recommend LG and this product to anyone.",
            "author": {
              "nickname": "JacoBean",
              "external_id": "6fd0bb8d-3eee-53fd-bbd1-11bd4118cbb3"
            },
            "title": "Great picture",
            "rating": {
              "value": 5,
              "submitted_at": "2023-01-07T14:11:53Z"
            }
          },
          {
            "id": "2bb57104-4977-4567-8cb4-3f9f5d68af10",
            "text": "[This review was collected as part of a promotion.] I love technology and my wife says that our house looks like a spaceship with so many things we have connected!! Lol. After doing a lot of research and checking several reviews on specialized websites, I chose this TV that after just over 1 month of use, has made me very happy with its UNBELIEVABLE image and built-in technology. Now even my wife is loving watching the TV series with me without dozing off (before she couldn't stay awake) so she doesn't miss any details!! We are happy!!",
            "author": {
              "nickname": "diegocarvalho",
              "external_id": "5c19b455-e7c1-546c-8189-bbbf1980b9b8"
            },
            "title": "The right buy!!",
            "rating": {
              "value": 5,
              "submitted_at": "2023-01-06T20:49:05Z"
            }
          },
          {
            "id": "c4311125-489d-4aaf-a307-a700de6f34bd",
            "text": "This TV was a personal purchase. My eyesight isn't what it used to be and have this larger, crisper screen has made a tremendous difference when watching movies, football, and everything else.",
            "author": {
              "nickname": "Dudeman1",
              "external_id": "76d600ef-db7e-5fe2-ac75-6f23656f8c3c"
            },
            "title": "Great OLED TV",
            "rating": {
              "value": 5,
              "submitted_at": "2023-01-06T16:51:58Z"
            }
          }
        ],
        "photos": [
          "https://target.scene7.com/is/image/Target/GUEST_58f94a07-7cc2-4660-90e8-863b6e3052ec",
          "https://target.scene7.com/is/image/Target/GUEST_66c3a58f-1ca0-4636-b571-e824a0991a1d",
          "https://target.scene7.com/is/image/Target/GUEST_0fcef8bb-829d-4969-9f60-aa5a94581326",
          "https://target.scene7.com/is/image/Target/GUEST_46d1d0c5-5a8d-4a75-9967-eed388465cfb",
          "https://target.scene7.com/is/image/Target/GUEST_0c6f38eb-bd11-435f-a09a-b03bbdb8c8aa",
          "https://target.scene7.com/is/image/Target/GUEST_d3c72e8c-c203-49c6-b981-4d7056f7d9dd",
          "https://target.scene7.com/is/image/Target/GUEST_88c41a77-f805-46a9-8101-d4cd099f580a",
          "https://target.scene7.com/is/image/Target/GUEST_4e53fa0f-7f63-428c-8bc6-e95a2c761575",
          "https://target.scene7.com/is/image/Target/GUEST_06f7a402-93ea-46b2-8a3b-75565bc356d2",
          "https://target.scene7.com/is/image/Target/GUEST_583c5639-70db-4281-b25f-f30e8b78fca8",
          "https://target.scene7.com/is/image/Target/GUEST_54d5a96c-aec5-4469-a5a3-95c42e9f4331",
          "https://target.scene7.com/is/image/Target/GUEST_1a1ad5a7-7455-410f-b7a7-f882f30bb461"
        ]
      },
      "esp": {
        "tcin": "51505487",
        "enrichment": {
          "images": {
            "base_url": "//target.scene7.com/is/image/Target/",
            "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_0d433fca-2fd1-42b1-96dc-294da59af72c",
            "primary_image": "GUEST_0d433fca-2fd1-42b1-96dc-294da59af72c"
          }
        },
        "price": {
          "formatted_current_price": "$105.00",
          "formatted_current_price_type": "reg"
        },
        "product_description": {
          "title": "3 Year TV Protection Plan ($1250-$1499.99) - Allstate",
          "bullet_descriptions": [
            "<B>Benefits:</B> 24/7 Support, Free 2-Way Shipping, No Deductible, No Additional Cost",
            "<B>Support:</B> Online, Phone",
            "<B>Includes:</B> Mechanical Defects, Normal Wear and Tear Coverage",
            "<B>Minimum Qualifying Item Price:</B> 1250",
            "<B>Maximum Qualifying Item Price:</B> 1499.99",
            "<B>Service plan type:</B> Allstate - TV",
            "<B>Number of years protected:</B> 3 years"
          ]
        }
      },
      "item": {
        "cart_add_on_threshold": 35,
        "compliance": {
          "is_proposition_65": true,
          "proposition_65_warning_text": "Cancer and reproductive harm"
        },
        "disclaimer": {
          "description": "ENERGYGUIDE LABEL REQUIRED",
          "type": "EnergyGuide Label Required"
        },
        "dpci": "008-09-6245",
        "eligibility_rules": {
          "hold": {
            "is_active": true
          },
          "ship_to_store": {
            "is_active": true
          }
        },
        "enrichment": {
          "buy_url": "https://www.target.com/p/lg-65-34-class-4k-uhd-smart-oled-tv-oled65b2pua/-/A-85756675",
          "images": {
            "base_url": "//target.scene7.com/is/image/Target/",
            "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_5151b214-96cf-4184-bc77-d8a5d71875cd",
            "primary_image": "GUEST_5151b214-96cf-4184-bc77-d8a5d71875cd",
            "alternate_images": [
              "GUEST_b97a33be-04ad-4392-a1e3-c0b8a2c7ba80",
              "GUEST_5aee1de8-d2b2-43d0-8648-f5ef6f780ffb",
              "GUEST_dd345d39-0ac4-4195-a68e-b117f8e020e3",
              "GUEST_2775a8fa-a29c-45b4-9148-b32b8acfec60",
              "GUEST_1143b007-9191-4f81-ae49-20b98742ff3c",
              "GUEST_173e4c2d-4612-4375-a04f-e7401118a783",
              "GUEST_47e73820-bf26-48e2-90ac-c7137dfc9f11",
              "GUEST_b7fce351-2f82-48c4-973f-b9c8d1627da1",
              "GUEST_0ba89da9-1296-4fc4-97e4-e3a006ece677"
            ],
            "alternate_image_urls": [
              "https://target.scene7.com/is/image/Target/GUEST_b97a33be-04ad-4392-a1e3-c0b8a2c7ba80",
              "https://target.scene7.com/is/image/Target/GUEST_5aee1de8-d2b2-43d0-8648-f5ef6f780ffb",
              "https://target.scene7.com/is/image/Target/GUEST_dd345d39-0ac4-4195-a68e-b117f8e020e3",
              "https://target.scene7.com/is/image/Target/GUEST_2775a8fa-a29c-45b4-9148-b32b8acfec60",
              "https://target.scene7.com/is/image/Target/GUEST_1143b007-9191-4f81-ae49-20b98742ff3c",
              "https://target.scene7.com/is/image/Target/GUEST_173e4c2d-4612-4375-a04f-e7401118a783",
              "https://target.scene7.com/is/image/Target/GUEST_47e73820-bf26-48e2-90ac-c7137dfc9f11",
              "https://target.scene7.com/is/image/Target/GUEST_b7fce351-2f82-48c4-973f-b9c8d1627da1",
              "https://target.scene7.com/is/image/Target/GUEST_0ba89da9-1296-4fc4-97e4-e3a006ece677"
            ],
            "content_labels": [
              {
                "image_url": "https://target.scene7.com/is/image/Target/GUEST_47e73820-bf26-48e2-90ac-c7137dfc9f11"
              },
              {
                "image_url": "https://target.scene7.com/is/image/Target/GUEST_0ba89da9-1296-4fc4-97e4-e3a006ece677"
              },
              {
                "image_url": "https://target.scene7.com/is/image/Target/GUEST_b97a33be-04ad-4392-a1e3-c0b8a2c7ba80"
              },
              {
                "image_url": "https://target.scene7.com/is/image/Target/GUEST_b7fce351-2f82-48c4-973f-b9c8d1627da1"
              },
              {
                "image_url": "https://target.scene7.com/is/image/Target/GUEST_dd345d39-0ac4-4195-a68e-b117f8e020e3"
              },
              {
                "image_url": "https://target.scene7.com/is/image/Target/GUEST_1143b007-9191-4f81-ae49-20b98742ff3c"
              },
              {
                "image_url": "https://target.scene7.com/is/image/Target/GUEST_173e4c2d-4612-4375-a04f-e7401118a783"
              },
              {
                "image_url": "https://target.scene7.com/is/image/Target/GUEST_5aee1de8-d2b2-43d0-8648-f5ef6f780ffb"
              },
              {
                "image_url": "https://target.scene7.com/is/image/Target/GUEST_2775a8fa-a29c-45b4-9148-b32b8acfec60"
              },
              {
                "image_url": "https://target.scene7.com/is/image/Target/GUEST_5151b214-96cf-4184-bc77-d8a5d71875cd"
              }
            ]
          },
          "size_chart_fragment_url": "https://digitalcontent.target.com/itemcontent/sizecharts/htmlfragments/lg-electronics-comparison-chart-65/lg/lg-electronics-comparison-chart.html",
          "videos": [
            {
              "video_captions": [
                {
                  "caption_url": "https://target.scene7.com/is/content/Target/GUEST_061548ee-b2cb-4a6a-9ad6-efbb14461f24",
                  "language": "EN"
                }
              ],
              "video_files": [
                {
                  "mime_type": "video/mp4",
                  "video_height_pixels": "720",
                  "video_url": "https://target.scene7.com/is/content/Target/GUEST_cd98b18e-b627-4650-ad80-f9e463361a4a_Flash9_Autox720p_2600k"
                }
              ],
              "video_length_seconds": "44",
              "video_poster_image": "https://target.scene7.com/is/image/Target/GUEST_cd98b18e-b627-4650-ad80-f9e463361a4a",
              "video_title": "85412330\n"
            }
          ],
          "return_policies": [
            {
              "user_type": "best_guest",
              "day_count": 60
            },
            {
              "user_type": "regular_guest",
              "day_count": 30
            }
          ]
        },
        "environmental_segmentation": {
          "is_hazardous_material": false
        },
        "formatted_return_method": "This item can be returned to any Target store or Target.com.",
        "fulfillment": {
          "is_gift_wrap_eligible": false,
          "po_box_prohibited_message": "We regret that this item cannot be shipped to PO Boxes.",
          "purchase_limit": 10,
          "shipping_exclusion_codes": [
            "United States Minor Outlying Islands",
            "American Samoa (see also separate entry under AS)",
            "Puerto Rico (see also separate entry under PR)",
            "Northern Mariana Islands",
            "Virgin Islands, U.S.",
            "APO/FPO",
            "Guam (see also separate entry under GU)"
          ]
        },
        "handling": {
          "import_designation_description": "Imported"
        },
        "merchandise_classification": {
          "class_id": 9,
          "department_id": 8,
          "department_name": "TV/HOME ELECTRONICS"
        },
        "package_dimensions": {
          "depth": 8.1,
          "dimension_unit_of_measure": "INCH",
          "height": 37.4,
          "weight": 73.9,
          "weight_unit_of_measure": "POUND",
          "width": 68.4
        },
        "primary_barcode": "195174028131",
        "primary_brand": {
          "canonical_url": "/b/lg-electronics/-/N-4y41g",
          "linking_id": "4y41g",
          "name": "LG Electronics"
        },
        "product_description": {
          "bullet_descriptions": [
            "<B>Dimensions (Overall):</B> 32.8 Inches (H) x 57 Inches (W) x 1.8 Inches (D)",
            "<B>Weight:</B> 52.9 Pounds",
            "<B>Electronics Condition:</B> New",
            "<B>Electronics Features:</B> 4K Ultra High Definition, Streaming Capability, Smart TV, Bluetooth, Dolby Vision",
            "<B>Aspect Ratio:</B> 16:9 Aspect Ratio",
            "<B>Screen Resolution:</B> 2160p",
            "<B>Native screen refresh rate:</B> 120 Hz",
            "<B>Wireless Technology:</B> Wi-Fi",
            "<B>Screen Size:</B> 64.5 Inches",
            "<B>Stand Depth:</B> 9.7 Inches",
            "<B>Stand Width:</B> 22 Inches",
            "<B>VESA Mounting Standard:</B> 300x200",
            "<B>Product Depth with Stand:</B> 9.7 Inches",
            "<B>Product Height with Stand:</B> 34.2 Inches",
            "<B>Product Width with Stand:</B> 57 Inches",
            "<B>Backlight type:</B> OLED (No Backlight)",
            "<B>Smart platform:</B> LG webOS",
            "<B>Voice assistant built-in:</B> Alexa Built-in, Google Assistant Built-in",
            "<B>Number of HDMI ports:</B> 4",
            "<B>High Dynamic Range (HDR):</B> Hybrid Log-Gamma (HLG), HDR10, Dolby Vision",
            "<B>Screen Mirroring Technology:</B> Apple Airplay",
            "<B>Battery:</B> 2 AA Alkaline, Required, Included",
            "<B>Warranty:</B> 1 Year Limited Warranty. To obtain a copy of the manufacturer's or supplier's warranty for this item prior to purchasing the item, please call Target Guest Services at 1-800-591-3869"
          ],
          "downstream_description": "The lightning-fast refresh rate, gaming features and 4K resolution you want with the LG OLED picture quality you love. Self-lit OLED pixels bring to life infinite contrast, perfect black and over a billion colors that add depth and bring out the bold, brazen and beautiful. Experience a lifelike picture with more depth and rich colors thanks to our advanced α7 Gen5 AI Processor 4K that adjusts picture and sound qualities to give you a fabulous experience no matter what you’re watching. And on game day, you can get in the game with a 120Hz refresh rate that can keep up with the action on the court, field or ice for a sharp, colorful picture from start to finish. And you’ll always be at the top of your game with NVIDIA G-SYNC®, FreeSync™ Premium and VRR to experience real-time action — plus, the LG Game Optimizer and 2 HDMI 2.1 ports to get you (and keep you) in the action. When you want to take a break from gaming, enjoy built-in access to your favorite streaming apps, including Netflix, Hulu, HBO Max and Disney+* and more for the whole family. And no matter what you’re watching or playing, every moment will be enhanced with Dolby Vision™ IQ that automatically changes display settings based on lighting in the room and Dolby Atmos®** sound technology delivers the most immersive sound experience. It’s not just OLED. It’s LG OLED. The gold standard in OLED TV from the creators of OLED.<br /><br />*Internet connection and subscriptions to streaming services are required. HBO Max™ ©2022 Warner Media, LLC. All Rights Reserved. HBO Max is used under license.<br />**Dolby, Dolby Atmos and the double-D symbol are registered trademarks of Dolby Laboratories.",
          "soft_bullet_description": "&bull;Self-lighting OLED: Perfect Black, Intense Color, Infinite Contrast<br>&bull;α7 Gen 5 AI Processor 4K: AI Picture Pro & AI Sound Pro<br>&bull;Cinema HDR (Dolby Vision, HDR10, HLG), Dynamic Tone Mapping<br>&bull;Home Cinema: Dolby Vision IQ, FILMMAKER MODE<br>&bull;webOS 22 w/ Magic Remote<br>&bull;LG Channels: Free access to programming on over 300+ LG Channels<br>&bull;Ultimate Gameplay: Game Optimizer, VRR, ALLM, HGiG, NVIDIA G-SYNC, FreeSync<br>&bull;Google Assistant and Alexa Built-In",
          "soft_bullets": {
            "bullets": [
              "Self-lighting OLED: Perfect Black, Intense Color, Infinite Contrast",
              "α7 Gen 5 AI Processor 4K: AI Picture Pro & AI Sound Pro",
              "Cinema HDR (Dolby Vision, HDR10, HLG), Dynamic Tone Mapping",
              "Home Cinema: Dolby Vision IQ, FILMMAKER MODE",
              "webOS 22 w/ Magic Remote",
              "LG Channels: Free access to programming on over 300+ LG Channels",
              "Ultimate Gameplay: Game Optimizer, VRR, ALLM, HGiG, NVIDIA G-SYNC, FreeSync",
              "Google Assistant and Alexa Built-In"
            ],
            "title": "highlights"
          },
          "title": "LG 65&#34; Class 4K UHD Smart OLED TV - OLED65B2PUA"
        },
        "product_vendors": [
          {
            "id": "1035294",
            "vendor_name": "LG ELECTRONICS USA"
          }
        ],
        "relationship_type_code": "SA",
        "return_policies_guest_message": "This item must be returned within 30 days of the date it was purchased in store, shipped, delivered by a Shipt shopper, or made ready for pickup.",
        "wellness_merchandise_attributes": [
          {
            "parent_id": "304005",
            "value_id": "809325",
            "value_name": "OLED TVs",
            "badge_url": "https://target.scene7.com/is/image/Target/GUEST_9a449203-9594-4258-b297-e13e191cc8e5",
            "wellness_description": "Organic light-emitting diode TVs produce both light and color from a single diode with an electric power source"
          },
          {
            "parent_id": "304350",
            "value_id": "829071",
            "value_name": "Smart TV",
            "badge_url": "https://target.scene7.com/is/image/Target/GUEST_599ba3ee-803b-4bd5-ad17-020c32eb20bd",
            "wellness_description": "Features integrated Internet and interactive Web 2.0 features"
          },
          {
            "parent_id": "304593",
            "value_id": "843588",
            "value_name": "4K Ultra High Definition",
            "badge_url": "https://target.scene7.com/is/image/Target/GUEST_980a6e33-59a1-4a75-a2fc-423b67440583",
            "wellness_description": "4k Ultra HD display that adds more color resolution and depth. "
          },
          {
            "parent_id": "304593",
            "value_id": "236443",
            "value_name": "Bluetooth",
            "badge_url": "https://target.scene7.com/is/image/Target/GUEST_9c3369a7-9e1c-4f62-becb-f0fb4cd9cd68",
            "wellness_description": "A technology that allows devices to communicate with each other without cables or wires"
          }
        ],
        "will_be_shipped_in_original_package": true
      },
      "price": {
        "formatted_current_price": "$1,399.99",
        "formatted_current_price_type": "sale",
        "formatted_comparison_price": "$1,899.99",
        "formatted_comparison_price_type": "reg",
        "location_id": 3991,
        "save_dollar": 500,
        "save_percent": 26,
        "current_retail": 1399.99,
        "external_system_id": "701121885",
        "reg_retail": 1899.99,
        "is_current_price_range": false
      },
      "promotions": []
    }
  };

const zips = {"data": [{
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85001"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85002"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85003"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85004"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85005"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85006"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85007"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85008"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85009"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85010"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85011"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85012"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85013"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85014"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85015"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85016"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85017"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85018"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85019"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85020"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85021"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85022"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85023"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85024"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85026"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85027"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85028"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85029"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85030"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85031"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85032"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85033"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85034"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85035"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85036"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85037"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85038"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85039"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85040"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85041"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85042"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85043"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85044"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85045"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85046"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85048"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85050"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85051"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85053"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85054"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85060"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85061"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85062"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85063"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85064"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85065"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85066"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85067"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85068"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85069"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85070"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85071"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85072"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85073"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85074"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85075"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85076"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85078"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85079"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85080"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85082"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85083"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85085"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85086"
  },
  {
    "city": "NEW RIVER",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85087"
  },
  {
    "city": "APACHE JUNCTION",
    "city_rate": 0.024,
    "combined_district_rate": 0.035,
    "combined_rate": 0.091,
    "combined_use_rate": 0.08,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85117"
  },
  {
    "city": "GOLD CANYON",
    "city_rate": 0,
    "combined_district_rate": 0.011,
    "combined_rate": 0.067,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85118"
  },
  {
    "city": "APACHE JUNCTION",
    "city_rate": 0.024,
    "combined_district_rate": 0.035,
    "combined_rate": 0.091,
    "combined_use_rate": 0.08,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85119"
  },
  {
    "city": "APACHE JUNCTION",
    "city_rate": 0.024,
    "combined_district_rate": 0.035,
    "combined_rate": 0.091,
    "combined_use_rate": 0.08,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85120"
  },
  {
    "city": "BAPCHULE",
    "city_rate": 0,
    "combined_district_rate": 0.026,
    "combined_rate": 0.082,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.026,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85121"
  },
  {
    "city": "CASA GRANDE",
    "city_rate": 0.02,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85122"
  },
  {
    "city": "ARIZONA CITY",
    "city_rate": 0,
    "combined_district_rate": 0.011,
    "combined_rate": 0.067,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85123"
  },
  {
    "city": "CHANDLER HEIGHTS",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85127"
  },
  {
    "city": "COOLIDGE",
    "city_rate": 0.03,
    "combined_district_rate": 0.040999999999999995,
    "combined_rate": 0.097,
    "combined_use_rate": 0.086,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85128"
  },
  {
    "city": "CASA GRANDE",
    "city_rate": 0.02,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85130"
  },
  {
    "city": "ELOY",
    "city_rate": 0.03,
    "combined_district_rate": 0.040999999999999995,
    "combined_rate": 0.097,
    "combined_use_rate": 0.086,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85131"
  },
  {
    "city": "FLORENCE",
    "city_rate": 0.02,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85132"
  },
  {
    "city": "HAYDEN",
    "city_rate": 0.03,
    "combined_district_rate": 0.04,
    "combined_rate": 0.096,
    "combined_use_rate": 0.086,
    "country": "US",
    "county": "GILA",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85135"
  },
  {
    "city": "KEARNY",
    "city_rate": 0,
    "combined_district_rate": 0.011,
    "combined_rate": 0.067,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85137"
  },
  {
    "city": "MARICOPA",
    "city_rate": 0.02,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85138"
  },
  {
    "city": "MARICOPA",
    "city_rate": 0,
    "combined_district_rate": 0.011,
    "combined_rate": 0.067,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85139"
  },
  {
    "city": "SAN TAN VALLEY",
    "city_rate": 0,
    "combined_district_rate": 0.011,
    "combined_rate": 0.067,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85140"
  },
  {
    "city": "PICACHO",
    "city_rate": 0,
    "combined_district_rate": 0.011,
    "combined_rate": 0.067,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85141"
  },
  {
    "city": "QUEEN CREEK",
    "city_rate": 0.0225,
    "combined_district_rate": 0.0295,
    "combined_rate": 0.0855,
    "combined_use_rate": 0.0785,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85142"
  },
  {
    "city": "SAN TAN VALLEY",
    "city_rate": 0,
    "combined_district_rate": 0.011,
    "combined_rate": 0.067,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85143"
  },
  {
    "city": "RED ROCK",
    "city_rate": 0,
    "combined_district_rate": 0.011,
    "combined_rate": 0.067,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85145"
  },
  {
    "city": "SACATON",
    "city_rate": 0,
    "combined_district_rate": 0.026,
    "combined_rate": 0.082,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.026,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85147"
  },
  {
    "city": "STANFIELD",
    "city_rate": 0,
    "combined_district_rate": 0.011,
    "combined_rate": 0.067,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85172"
  },
  {
    "city": "SUPERIOR",
    "city_rate": 0.04,
    "combined_district_rate": 0.051000000000000004,
    "combined_rate": 0.107,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85173"
  },
  {
    "city": "APACHE JUNCTION",
    "city_rate": 0.024,
    "combined_district_rate": 0.035,
    "combined_rate": 0.091,
    "combined_use_rate": 0.08,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85178"
  },
  {
    "city": "TORTILLA FLAT",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85190"
  },
  {
    "city": "VALLEY FARMS",
    "city_rate": 0,
    "combined_district_rate": 0.011,
    "combined_rate": 0.067,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85191"
  },
  {
    "city": "WINKELMAN",
    "city_rate": 0,
    "combined_district_rate": 0.011,
    "combined_rate": 0.067,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85192"
  },
  {
    "city": "CASA GRANDE",
    "city_rate": 0,
    "combined_district_rate": 0.011,
    "combined_rate": 0.067,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85193"
  },
  {
    "city": "CASA GRANDE",
    "city_rate": 0.02,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85194"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85201"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85202"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85203"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85204"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85205"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85206"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85207"
  },
  {
    "city": "MESA",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85208"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85209"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85210"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85211"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85212"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85213"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85214"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85215"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85216"
  },
  {
    "city": "CHANDLER",
    "city_rate": 0.015,
    "combined_district_rate": 0.022,
    "combined_rate": 0.078,
    "combined_use_rate": 0.071,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85224"
  },
  {
    "city": "CHANDLER",
    "city_rate": 0.015,
    "combined_district_rate": 0.022,
    "combined_rate": 0.078,
    "combined_use_rate": 0.071,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85225"
  },
  {
    "city": "CHANDLER",
    "city_rate": 0.015,
    "combined_district_rate": 0.022,
    "combined_rate": 0.078,
    "combined_use_rate": 0.071,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85226"
  },
  {
    "city": "GILBERT",
    "city_rate": 0.015,
    "combined_district_rate": 0.022,
    "combined_rate": 0.078,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85233"
  },
  {
    "city": "GILBERT",
    "city_rate": 0.015,
    "combined_district_rate": 0.022,
    "combined_rate": 0.078,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85234"
  },
  {
    "city": "GILBERT",
    "city_rate": 0.015,
    "combined_district_rate": 0.022,
    "combined_rate": 0.078,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85236"
  },
  {
    "city": "CHANDLER",
    "city_rate": 0.015,
    "combined_district_rate": 0.022,
    "combined_rate": 0.078,
    "combined_use_rate": 0.071,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85244"
  },
  {
    "city": "CHANDLER",
    "city_rate": 0.015,
    "combined_district_rate": 0.022,
    "combined_rate": 0.078,
    "combined_use_rate": 0.071,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85246"
  },
  {
    "city": "CHANDLER",
    "city_rate": 0.015,
    "combined_district_rate": 0.022,
    "combined_rate": 0.078,
    "combined_use_rate": 0.071,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85248"
  },
  {
    "city": "CHANDLER",
    "city_rate": 0.015,
    "combined_district_rate": 0.022,
    "combined_rate": 0.078,
    "combined_use_rate": 0.071,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85249"
  },
  {
    "city": "SCOTTSDALE",
    "city_rate": 0.0175,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0715,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85250"
  },
  {
    "city": "SCOTTSDALE",
    "city_rate": 0.0175,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0715,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85251"
  },
  {
    "city": "SCOTTSDALE",
    "city_rate": 0.0175,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0715,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85252"
  },
  {
    "city": "PARADISE VALLEY",
    "city_rate": 0.025,
    "combined_district_rate": 0.032,
    "combined_rate": 0.088,
    "combined_use_rate": 0.081,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85253"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85254"
  },
  {
    "city": "SCOTTSDALE",
    "city_rate": 0.0175,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0715,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85255"
  },
  {
    "city": "SCOTTSDALE",
    "city_rate": 0,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.0245,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85256"
  },
  {
    "city": "SCOTTSDALE",
    "city_rate": 0.0175,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0715,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85257"
  },
  {
    "city": "SCOTTSDALE",
    "city_rate": 0.0175,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0715,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85258"
  },
  {
    "city": "SCOTTSDALE",
    "city_rate": 0.0175,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0715,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85259"
  },
  {
    "city": "SCOTTSDALE",
    "city_rate": 0.0175,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0715,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85260"
  },
  {
    "city": "SCOTTSDALE",
    "city_rate": 0.0175,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0715,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85261"
  },
  {
    "city": "SCOTTSDALE",
    "city_rate": 0.0175,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0715,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85262"
  },
  {
    "city": "RIO VERDE",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85263"
  },
  {
    "city": "FORT MCDOWELL",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85264"
  },
  {
    "city": "SCOTTSDALE",
    "city_rate": 0.0175,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0715,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85266"
  },
  {
    "city": "SCOTTSDALE",
    "city_rate": 0.0175,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0715,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85267"
  },
  {
    "city": "FOUNTAIN HILLS",
    "city_rate": 0.029,
    "combined_district_rate": 0.036000000000000004,
    "combined_rate": 0.092,
    "combined_use_rate": 0.085,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85268"
  },
  {
    "city": "FOUNTAIN HILLS",
    "city_rate": 0.029,
    "combined_district_rate": 0.036000000000000004,
    "combined_rate": 0.092,
    "combined_use_rate": 0.085,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85269"
  },
  {
    "city": "SCOTTSDALE",
    "city_rate": 0.0175,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0715,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85271"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85274"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85275"
  },
  {
    "city": "MESA",
    "city_rate": 0.02,
    "combined_district_rate": 0.027,
    "combined_rate": 0.083,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85277"
  },
  {
    "city": "TEMPE",
    "city_rate": 0.018,
    "combined_district_rate": 0.024999999999999998,
    "combined_rate": 0.081,
    "combined_use_rate": 0.074,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85280"
  },
  {
    "city": "TEMPE",
    "city_rate": 0.018,
    "combined_district_rate": 0.024999999999999998,
    "combined_rate": 0.081,
    "combined_use_rate": 0.074,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85281"
  },
  {
    "city": "TEMPE",
    "city_rate": 0.018,
    "combined_district_rate": 0.024999999999999998,
    "combined_rate": 0.081,
    "combined_use_rate": 0.074,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85282"
  },
  {
    "city": "TEMPE",
    "city_rate": 0.018,
    "combined_district_rate": 0.024999999999999998,
    "combined_rate": 0.081,
    "combined_use_rate": 0.074,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85283"
  },
  {
    "city": "TEMPE",
    "city_rate": 0.018,
    "combined_district_rate": 0.024999999999999998,
    "combined_rate": 0.081,
    "combined_use_rate": 0.074,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85284"
  },
  {
    "city": "TEMPE",
    "city_rate": 0.018,
    "combined_district_rate": 0.024999999999999998,
    "combined_rate": 0.081,
    "combined_use_rate": 0.074,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85285"
  },
  {
    "city": "CHANDLER",
    "city_rate": 0.015,
    "combined_district_rate": 0.022,
    "combined_rate": 0.078,
    "combined_use_rate": 0.071,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85286"
  },
  {
    "city": "TEMPE",
    "city_rate": 0.018,
    "combined_district_rate": 0.024999999999999998,
    "combined_rate": 0.081,
    "combined_use_rate": 0.074,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85287"
  },
  {
    "city": "TEMPE",
    "city_rate": 0.018,
    "combined_district_rate": 0.024999999999999998,
    "combined_rate": 0.081,
    "combined_use_rate": 0.074,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85288"
  },
  {
    "city": "GILBERT",
    "city_rate": 0.015,
    "combined_district_rate": 0.022,
    "combined_rate": 0.078,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85295"
  },
  {
    "city": "GILBERT",
    "city_rate": 0.015,
    "combined_district_rate": 0.022,
    "combined_rate": 0.078,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85296"
  },
  {
    "city": "GILBERT",
    "city_rate": 0.015,
    "combined_district_rate": 0.022,
    "combined_rate": 0.078,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85297"
  },
  {
    "city": "GILBERT",
    "city_rate": 0.015,
    "combined_district_rate": 0.022,
    "combined_rate": 0.078,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85298"
  },
  {
    "city": "GILBERT",
    "city_rate": 0.015,
    "combined_district_rate": 0.022,
    "combined_rate": 0.078,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85299"
  },
  {
    "city": "GLENDALE",
    "city_rate": 0.029,
    "combined_district_rate": 0.036000000000000004,
    "combined_rate": 0.092,
    "combined_use_rate": 0.085,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85301"
  },
  {
    "city": "GLENDALE",
    "city_rate": 0.029,
    "combined_district_rate": 0.036000000000000004,
    "combined_rate": 0.092,
    "combined_use_rate": 0.085,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85302"
  },
  {
    "city": "GLENDALE",
    "city_rate": 0.029,
    "combined_district_rate": 0.036000000000000004,
    "combined_rate": 0.092,
    "combined_use_rate": 0.085,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85303"
  },
  {
    "city": "GLENDALE",
    "city_rate": 0.029,
    "combined_district_rate": 0.036000000000000004,
    "combined_rate": 0.092,
    "combined_use_rate": 0.085,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85304"
  },
  {
    "city": "GLENDALE",
    "city_rate": 0.029,
    "combined_district_rate": 0.036000000000000004,
    "combined_rate": 0.092,
    "combined_use_rate": 0.085,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85305"
  },
  {
    "city": "GLENDALE",
    "city_rate": 0.029,
    "combined_district_rate": 0.036000000000000004,
    "combined_rate": 0.092,
    "combined_use_rate": 0.085,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85306"
  },
  {
    "city": "GLENDALE",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85307"
  },
  {
    "city": "GLENDALE",
    "city_rate": 0.029,
    "combined_district_rate": 0.036000000000000004,
    "combined_rate": 0.092,
    "combined_use_rate": 0.085,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85308"
  },
  {
    "city": "GLENDALE",
    "city_rate": 0.029,
    "combined_district_rate": 0.036000000000000004,
    "combined_rate": 0.092,
    "combined_use_rate": 0.085,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85309"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85310"
  },
  {
    "city": "GLENDALE",
    "city_rate": 0.029,
    "combined_district_rate": 0.036000000000000004,
    "combined_rate": 0.092,
    "combined_use_rate": 0.085,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85311"
  },
  {
    "city": "GLENDALE",
    "city_rate": 0.029,
    "combined_district_rate": 0.036000000000000004,
    "combined_rate": 0.092,
    "combined_use_rate": 0.085,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85312"
  },
  {
    "city": "GLENDALE",
    "city_rate": 0.029,
    "combined_district_rate": 0.036000000000000004,
    "combined_rate": 0.092,
    "combined_use_rate": 0.085,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85318"
  },
  {
    "city": "AGUILA",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85320"
  },
  {
    "city": "AJO",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85321"
  },
  {
    "city": "ARLINGTON",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85322"
  },
  {
    "city": "AVONDALE",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85323"
  },
  {
    "city": "BLACK CANYON CITY",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85324"
  },
  {
    "city": "BOUSE",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "LA PAZ",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85325"
  },
  {
    "city": "BUCKEYE",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85326"
  },
  {
    "city": "CAVE CREEK",
    "city_rate": 0.03,
    "combined_district_rate": 0.037,
    "combined_rate": 0.093,
    "combined_use_rate": 0.086,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85327"
  },
  {
    "city": "CIBOLA",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "LA PAZ",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85328"
  },
  {
    "city": "AVONDALE",
    "city_rate": 0.025,
    "combined_district_rate": 0.032,
    "combined_rate": 0.088,
    "combined_use_rate": 0.071,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85329"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85331"
  },
  {
    "city": "CONGRESS",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85332"
  },
  {
    "city": "DATELAND",
    "city_rate": 0,
    "combined_district_rate": 0.01112,
    "combined_rate": 0.06712,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YUMA",
    "county_rate": 0.01112,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85333"
  },
  {
    "city": "EHRENBERG",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "LA PAZ",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85334"
  },
  {
    "city": "EL MIRAGE",
    "city_rate": 0.03,
    "combined_district_rate": 0.037,
    "combined_rate": 0.093,
    "combined_use_rate": 0.086,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85335"
  },
  {
    "city": "SAN LUIS",
    "city_rate": 0.04,
    "combined_district_rate": 0.05112,
    "combined_rate": 0.10712,
    "combined_use_rate": 0.096,
    "country": "US",
    "county": "YUMA",
    "county_rate": 0.01112,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85336"
  },
  {
    "city": "GILA BEND",
    "city_rate": 0.035,
    "combined_district_rate": 0.042,
    "combined_rate": 0.098,
    "combined_use_rate": 0.071,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85337"
  },
  {
    "city": "GOODYEAR",
    "city_rate": 0.025,
    "combined_district_rate": 0.032,
    "combined_rate": 0.088,
    "combined_use_rate": 0.081,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85338"
  },
  {
    "city": "LAVEEN",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85339"
  },
  {
    "city": "GOODYEAR",
    "city_rate": 0.025,
    "combined_district_rate": 0.032,
    "combined_rate": 0.088,
    "combined_use_rate": 0.081,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85340"
  },
  {
    "city": "LUKEVILLE",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85341"
  },
  {
    "city": "MORRISTOWN",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85342"
  },
  {
    "city": "PALO VERDE",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85343"
  },
  {
    "city": "PARKER",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "LA PAZ",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85344"
  },
  {
    "city": "PEORIA",
    "city_rate": 0.018,
    "combined_district_rate": 0.024999999999999998,
    "combined_rate": 0.081,
    "combined_use_rate": 0.074,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85345"
  },
  {
    "city": "QUARTZSITE",
    "city_rate": 0.025,
    "combined_district_rate": 0.035,
    "combined_rate": 0.091,
    "combined_use_rate": 0.081,
    "country": "US",
    "county": "LA PAZ",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85346"
  },
  {
    "city": "ROLL",
    "city_rate": 0,
    "combined_district_rate": 0.01112,
    "combined_rate": 0.06712,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YUMA",
    "county_rate": 0.01112,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85347"
  },
  {
    "city": "SALOME",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "LA PAZ",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85348"
  },
  {
    "city": "SAN LUIS",
    "city_rate": 0.04,
    "combined_district_rate": 0.05112,
    "combined_rate": 0.10712,
    "combined_use_rate": 0.096,
    "country": "US",
    "county": "YUMA",
    "county_rate": 0.01112,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85349"
  },
  {
    "city": "SOMERTON",
    "city_rate": 0.033,
    "combined_district_rate": 0.04412,
    "combined_rate": 0.10012,
    "combined_use_rate": 0.081,
    "country": "US",
    "county": "YUMA",
    "county_rate": 0.01112,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85350"
  },
  {
    "city": "SUN CITY",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85351"
  },
  {
    "city": "TACNA",
    "city_rate": 0,
    "combined_district_rate": 0.01112,
    "combined_rate": 0.06712,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YUMA",
    "county_rate": 0.01112,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85352"
  },
  {
    "city": "PHOENIX",
    "city_rate": 0.023,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.079,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85353"
  },
  {
    "city": "TONOPAH",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85354"
  },
  {
    "city": "WADDELL",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85355"
  },
  {
    "city": "WELLTON",
    "city_rate": 0.035,
    "combined_district_rate": 0.04612,
    "combined_rate": 0.10212,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YUMA",
    "county_rate": 0.01112,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85356"
  },
  {
    "city": "WENDEN",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "LA PAZ",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85357"
  },
  {
    "city": "WICKENBURG",
    "city_rate": 0.022,
    "combined_district_rate": 0.028999999999999998,
    "combined_rate": 0.085,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85358"
  },
  {
    "city": "QUARTZSITE",
    "city_rate": 0.025,
    "combined_district_rate": 0.035,
    "combined_rate": 0.091,
    "combined_use_rate": 0.081,
    "country": "US",
    "county": "LA PAZ",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85359"
  },
  {
    "city": "WIKIEUP",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85360"
  },
  {
    "city": "WITTMANN",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85361"
  },
  {
    "city": "YARNELL",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85362"
  },
  {
    "city": "YOUNGTOWN",
    "city_rate": 0.03,
    "combined_district_rate": 0.037,
    "combined_rate": 0.093,
    "combined_use_rate": 0.086,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85363"
  },
  {
    "city": "YUMA",
    "city_rate": 0,
    "combined_district_rate": 0.01112,
    "combined_rate": 0.06712,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YUMA",
    "county_rate": 0.01112,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85364"
  },
  {
    "city": "YUMA",
    "city_rate": 0.017,
    "combined_district_rate": 0.02812,
    "combined_rate": 0.08412,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YUMA",
    "county_rate": 0.01112,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85365"
  },
  {
    "city": "YUMA",
    "city_rate": 0.017,
    "combined_district_rate": 0.02812,
    "combined_rate": 0.08412,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YUMA",
    "county_rate": 0.01112,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85366"
  },
  {
    "city": "YUMA",
    "city_rate": 0,
    "combined_district_rate": 0.01112,
    "combined_rate": 0.06712,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YUMA",
    "county_rate": 0.01112,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85367"
  },
  {
    "city": "YUMA",
    "city_rate": 0.017,
    "combined_district_rate": 0.02812,
    "combined_rate": 0.08412,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YUMA",
    "county_rate": 0.01112,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85369"
  },
  {
    "city": "POSTON",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "LA PAZ",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85371"
  },
  {
    "city": "SUN CITY",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85372"
  },
  {
    "city": "SUN CITY",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85373"
  },
  {
    "city": "SURPRISE",
    "city_rate": 0.022,
    "combined_district_rate": 0.028999999999999998,
    "combined_rate": 0.085,
    "combined_use_rate": 0.078,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85374"
  },
  {
    "city": "SUN CITY WEST",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85375"
  },
  {
    "city": "SUN CITY WEST",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85376"
  },
  {
    "city": "CAREFREE",
    "city_rate": 0.03,
    "combined_district_rate": 0.037,
    "combined_rate": 0.093,
    "combined_use_rate": 0.086,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85377"
  },
  {
    "city": "SURPRISE",
    "city_rate": 0,
    "combined_district_rate": 0.007,
    "combined_rate": 0.063,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85378"
  },
  {
    "city": "SURPRISE",
    "city_rate": 0.022,
    "combined_district_rate": 0.028999999999999998,
    "combined_rate": 0.085,
    "combined_use_rate": 0.078,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85379"
  },
  {
    "city": "PEORIA",
    "city_rate": 0.018,
    "combined_district_rate": 0.024999999999999998,
    "combined_rate": 0.081,
    "combined_use_rate": 0.074,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85380"
  },
  {
    "city": "PEORIA",
    "city_rate": 0.018,
    "combined_district_rate": 0.024999999999999998,
    "combined_rate": 0.081,
    "combined_use_rate": 0.074,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85381"
  },
  {
    "city": "PEORIA",
    "city_rate": 0.018,
    "combined_district_rate": 0.024999999999999998,
    "combined_rate": 0.081,
    "combined_use_rate": 0.074,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85382"
  },
  {
    "city": "PEORIA",
    "city_rate": 0.018,
    "combined_district_rate": 0.024999999999999998,
    "combined_rate": 0.081,
    "combined_use_rate": 0.074,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85383"
  },
  {
    "city": "PEORIA",
    "city_rate": 0.018,
    "combined_district_rate": 0.024999999999999998,
    "combined_rate": 0.081,
    "combined_use_rate": 0.074,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85385"
  },
  {
    "city": "SURPRISE",
    "city_rate": 0.022,
    "combined_district_rate": 0.028999999999999998,
    "combined_rate": 0.085,
    "combined_use_rate": 0.078,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85387"
  },
  {
    "city": "SURPRISE",
    "city_rate": 0.022,
    "combined_district_rate": 0.028999999999999998,
    "combined_rate": 0.085,
    "combined_use_rate": 0.078,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85388"
  },
  {
    "city": "WICKENBURG",
    "city_rate": 0.022,
    "combined_district_rate": 0.028999999999999998,
    "combined_rate": 0.085,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85390"
  },
  {
    "city": "AVONDALE",
    "city_rate": 0.025,
    "combined_district_rate": 0.032,
    "combined_rate": 0.088,
    "combined_use_rate": 0.071,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85392"
  },
  {
    "city": "GOODYEAR",
    "city_rate": 0.025,
    "combined_district_rate": 0.032,
    "combined_rate": 0.088,
    "combined_use_rate": 0.081,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85395"
  },
  {
    "city": "BUCKEYE",
    "city_rate": 0.03,
    "combined_district_rate": 0.037,
    "combined_rate": 0.093,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MARICOPA",
    "county_rate": 0.007,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85396"
  },
  {
    "city": "GLOBE",
    "city_rate": 0.033,
    "combined_district_rate": 0.043000000000000003,
    "combined_rate": 0.099,
    "combined_use_rate": 0.089,
    "country": "US",
    "county": "GILA",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85501"
  },
  {
    "city": "GLOBE",
    "city_rate": 0.033,
    "combined_district_rate": 0.043000000000000003,
    "combined_rate": 0.099,
    "combined_use_rate": 0.089,
    "country": "US",
    "county": "GILA",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85502"
  },
  {
    "city": "BYLAS",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GRAHAM",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85530"
  },
  {
    "city": "CENTRAL",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GRAHAM",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85531"
  },
  {
    "city": "CLAYPOOL",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GILA",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85532"
  },
  {
    "city": "CLIFTON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GREENLEE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85533"
  },
  {
    "city": "DUNCAN",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GREENLEE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85534"
  },
  {
    "city": "EDEN",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GRAHAM",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85535"
  },
  {
    "city": "FORT THOMAS",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GRAHAM",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85536"
  },
  {
    "city": "MIAMI",
    "city_rate": 0.025,
    "combined_district_rate": 0.035,
    "combined_rate": 0.091,
    "combined_use_rate": 0.081,
    "country": "US",
    "county": "GILA",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85539"
  },
  {
    "city": "CLIFTON",
    "city_rate": 0.03,
    "combined_district_rate": 0.034999999999999996,
    "combined_rate": 0.091,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GREENLEE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85540"
  },
  {
    "city": "PAYSON",
    "city_rate": 0.0288,
    "combined_district_rate": 0.0388,
    "combined_rate": 0.0948,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GILA",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85541"
  },
  {
    "city": "PERIDOT",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GRAHAM",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85542"
  },
  {
    "city": "PIMA",
    "city_rate": 0.02,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GRAHAM",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85543"
  },
  {
    "city": "PINE",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GILA",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85544"
  },
  {
    "city": "ROOSEVELT",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GILA",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85545"
  },
  {
    "city": "SAFFORD",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GRAHAM",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85546"
  },
  {
    "city": "PAYSON",
    "city_rate": 0.0288,
    "combined_district_rate": 0.0388,
    "combined_rate": 0.0948,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GILA",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85547"
  },
  {
    "city": "SAFFORD",
    "city_rate": 0.025,
    "combined_district_rate": 0.035,
    "combined_rate": 0.091,
    "combined_use_rate": 0.081,
    "country": "US",
    "county": "GRAHAM",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85548"
  },
  {
    "city": "SAN CARLOS",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GILA",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85550"
  },
  {
    "city": "SOLOMON",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GRAHAM",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85551"
  },
  {
    "city": "THATCHER",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GRAHAM",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85552"
  },
  {
    "city": "TONTO BASIN",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GILA",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85553"
  },
  {
    "city": "YOUNG",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GILA",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85554"
  },
  {
    "city": "ARIVACA",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85601"
  },
  {
    "city": "BENSON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85602"
  },
  {
    "city": "BISBEE",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85603"
  },
  {
    "city": "BOWIE",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85605"
  },
  {
    "city": "COCHISE",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85606"
  },
  {
    "city": "DOUGLAS",
    "city_rate": 0.038,
    "combined_district_rate": 0.043,
    "combined_rate": 0.099,
    "combined_use_rate": 0.094,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85607"
  },
  {
    "city": "DOUGLAS",
    "city_rate": 0.038,
    "combined_district_rate": 0.043,
    "combined_rate": 0.099,
    "combined_use_rate": 0.094,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85608"
  },
  {
    "city": "DRAGOON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85609"
  },
  {
    "city": "ELFRIDA",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85610"
  },
  {
    "city": "ELGIN",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "SANTA CRUZ",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85611"
  },
  {
    "city": "SIERRA VISTA",
    "city_rate": 0.0195,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0755,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85613"
  },
  {
    "city": "GREEN VALLEY",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85614"
  },
  {
    "city": "HEREFORD",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85615"
  },
  {
    "city": "HUACHUCA CITY",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85616"
  },
  {
    "city": "MC NEAL",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85617"
  },
  {
    "city": "MAMMOTH",
    "city_rate": 0.04,
    "combined_district_rate": 0.051000000000000004,
    "combined_rate": 0.107,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85618"
  },
  {
    "city": "MOUNT LEMMON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85619"
  },
  {
    "city": "NACO",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85620"
  },
  {
    "city": "NOGALES",
    "city_rate": 0.02,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "SANTA CRUZ",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85621"
  },
  {
    "city": "GREEN VALLEY",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85622"
  },
  {
    "city": "ORACLE",
    "city_rate": 0,
    "combined_district_rate": 0.011,
    "combined_rate": 0.067,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85623"
  },
  {
    "city": "PATAGONIA",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "SANTA CRUZ",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85624"
  },
  {
    "city": "PEARCE",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85625"
  },
  {
    "city": "PIRTLEVILLE",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85626"
  },
  {
    "city": "POMERENE",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85627"
  },
  {
    "city": "NOGALES",
    "city_rate": 0.02,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "SANTA CRUZ",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85628"
  },
  {
    "city": "SAHUARITA",
    "city_rate": 0.02,
    "combined_district_rate": 0.025,
    "combined_rate": 0.081,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85629"
  },
  {
    "city": "SAINT DAVID",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85630"
  },
  {
    "city": "SAN MANUEL",
    "city_rate": 0,
    "combined_district_rate": 0.011,
    "combined_rate": 0.067,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85631"
  },
  {
    "city": "SAN SIMON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85632"
  },
  {
    "city": "SASABE",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85633"
  },
  {
    "city": "SELLS",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85634"
  },
  {
    "city": "SIERRA VISTA",
    "city_rate": 0.0195,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0755,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85635"
  },
  {
    "city": "SIERRA VISTA",
    "city_rate": 0.0195,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0755,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85636"
  },
  {
    "city": "SONOITA",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85637"
  },
  {
    "city": "TOMBSTONE",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85638"
  },
  {
    "city": "TOPAWA",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85639"
  },
  {
    "city": "TUMACACORI",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "SANTA CRUZ",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85640"
  },
  {
    "city": "VAIL",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85641"
  },
  {
    "city": "WILLCOX",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85643"
  },
  {
    "city": "WILLCOX",
    "city_rate": 0.03,
    "combined_district_rate": 0.034999999999999996,
    "combined_rate": 0.091,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85644"
  },
  {
    "city": "AMADO",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85645"
  },
  {
    "city": "TUBAC",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "SANTA CRUZ",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85646"
  },
  {
    "city": "RIO RICO",
    "city_rate": 0,
    "combined_district_rate": 0.01,
    "combined_rate": 0.066,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "SANTA CRUZ",
    "county_rate": 0.01,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85648"
  },
  {
    "city": "SIERRA VISTA",
    "city_rate": 0.0195,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0755,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85650"
  },
  {
    "city": "MARANA",
    "city_rate": 0.025,
    "combined_district_rate": 0.030000000000000002,
    "combined_rate": 0.086,
    "combined_use_rate": 0.081,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85652"
  },
  {
    "city": "MARANA",
    "city_rate": 0.025,
    "combined_district_rate": 0.030000000000000002,
    "combined_rate": 0.086,
    "combined_use_rate": 0.081,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85653"
  },
  {
    "city": "MARANA",
    "city_rate": 0.025,
    "combined_district_rate": 0.030000000000000002,
    "combined_rate": 0.086,
    "combined_use_rate": 0.081,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85654"
  },
  {
    "city": "DOUGLAS",
    "city_rate": 0.038,
    "combined_district_rate": 0.043,
    "combined_rate": 0.099,
    "combined_use_rate": 0.094,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85655"
  },
  {
    "city": "MARANA",
    "city_rate": 0.025,
    "combined_district_rate": 0.030000000000000002,
    "combined_rate": 0.086,
    "combined_use_rate": 0.081,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85658"
  },
  {
    "city": "SIERRA VISTA",
    "city_rate": 0.0195,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0755,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85670"
  },
  {
    "city": "SIERRA VISTA",
    "city_rate": 0.0195,
    "combined_district_rate": 0.0245,
    "combined_rate": 0.0805,
    "combined_use_rate": 0.0755,
    "country": "US",
    "county": "COCHISE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85671"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85701"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "TUCSON RIO NUEVO DISTRICT SP",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85702"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85703"
  },
  {
    "city": "TUCSON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85704"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85705"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85706"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85707"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85708"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85709"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85710"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85711"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85712"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85713"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85714"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85715"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85716"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85717"
  },
  {
    "city": "TUCSON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85718"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85719"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "TUCSON RIO NUEVO DISTRICT SP",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85720"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85721"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "TUCSON RIO NUEVO DISTRICT SP",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85722"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85723"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85724"
  },
  {
    "city": "SOUTH TUCSON",
    "city_rate": 0.05,
    "combined_district_rate": 0.055,
    "combined_rate": 0.111,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85725"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85726"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85728"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85730"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85731"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85732"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85733"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85734"
  },
  {
    "city": "TUCSON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85735"
  },
  {
    "city": "TUCSON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85736"
  },
  {
    "city": "ORO VALLEY",
    "city_rate": 0.025,
    "combined_district_rate": 0.030000000000000002,
    "combined_rate": 0.086,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85737"
  },
  {
    "city": "CATALINA",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85738"
  },
  {
    "city": "TUCSON",
    "city_rate": 0,
    "combined_district_rate": 0.011,
    "combined_rate": 0.067,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PINAL",
    "county_rate": 0.011,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85739"
  },
  {
    "city": "TUCSON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85740"
  },
  {
    "city": "TUCSON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85741"
  },
  {
    "city": "TUCSON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85742"
  },
  {
    "city": "TUCSON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85743"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85744"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85745"
  },
  {
    "city": "TUCSON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85746"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85747"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85748"
  },
  {
    "city": "TUCSON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85749"
  },
  {
    "city": "TUCSON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85750"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85751"
  },
  {
    "city": "TUCSON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85752"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85754"
  },
  {
    "city": "ORO VALLEY",
    "city_rate": 0.025,
    "combined_district_rate": 0.030000000000000002,
    "combined_rate": 0.086,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85755"
  },
  {
    "city": "TUCSON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85756"
  },
  {
    "city": "TUCSON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "PIMA",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85757"
  },
  {
    "city": "TUCSON",
    "city_rate": 0.026,
    "combined_district_rate": 0.031,
    "combined_rate": 0.087,
    "combined_use_rate": 0.082,
    "country": "US",
    "county": "TUCSON RIO NUEVO DISTRICT SP",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85775"
  },
  {
    "city": "SHOW LOW",
    "city_rate": 0.02,
    "combined_district_rate": 0.0283,
    "combined_rate": 0.0843,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85901"
  },
  {
    "city": "SHOW LOW",
    "city_rate": 0.02,
    "combined_district_rate": 0.0283,
    "combined_rate": 0.0843,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85902"
  },
  {
    "city": "CIBECUE",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85911"
  },
  {
    "city": "WHITE MOUNTAIN LAKE",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85912"
  },
  {
    "city": "ALPINE",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85920"
  },
  {
    "city": "BLUE",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "GREENLEE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85922"
  },
  {
    "city": "CLAY SPRINGS",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85923"
  },
  {
    "city": "CONCHO",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85924"
  },
  {
    "city": "EAGAR",
    "city_rate": 0.03,
    "combined_district_rate": 0.034999999999999996,
    "combined_rate": 0.091,
    "combined_use_rate": 0.086,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85925"
  },
  {
    "city": "FORT APACHE",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85926"
  },
  {
    "city": "GREER",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85927"
  },
  {
    "city": "HEBER",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85928"
  },
  {
    "city": "LAKESIDE",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85929"
  },
  {
    "city": "MCNARY",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85930"
  },
  {
    "city": "FOREST LAKES",
    "city_rate": 0,
    "combined_district_rate": 0.013,
    "combined_rate": 0.069,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85931"
  },
  {
    "city": "NUTRIOSO",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85932"
  },
  {
    "city": "OVERGAARD",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85933"
  },
  {
    "city": "PINEDALE",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85934"
  },
  {
    "city": "PINETOP",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85935"
  },
  {
    "city": "ST. JOHNS",
    "city_rate": 0.03,
    "combined_district_rate": 0.034999999999999996,
    "combined_rate": 0.091,
    "combined_use_rate": 0.086,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85936"
  },
  {
    "city": "SNOWFLAKE",
    "city_rate": 0.03,
    "combined_district_rate": 0.0383,
    "combined_rate": 0.0943,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85937"
  },
  {
    "city": "SPRINGERVILLE",
    "city_rate": 0.03,
    "combined_district_rate": 0.034999999999999996,
    "combined_rate": 0.091,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85938"
  },
  {
    "city": "TAYLOR",
    "city_rate": 0.03,
    "combined_district_rate": 0.0383,
    "combined_rate": 0.0943,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85939"
  },
  {
    "city": "VERNON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85940"
  },
  {
    "city": "WHITERIVER",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85941"
  },
  {
    "city": "WOODRUFF",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "85942"
  },
  {
    "city": "FLAGSTAFF",
    "city_rate": 0.02281,
    "combined_district_rate": 0.03581,
    "combined_rate": 0.09181,
    "combined_use_rate": 0.07881,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86001"
  },
  {
    "city": "FLAGSTAFF",
    "city_rate": 0.02281,
    "combined_district_rate": 0.03581,
    "combined_rate": 0.09181,
    "combined_use_rate": 0.07881,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86002"
  },
  {
    "city": "FLAGSTAFF",
    "city_rate": 0.02281,
    "combined_district_rate": 0.03581,
    "combined_rate": 0.09181,
    "combined_use_rate": 0.07881,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86003"
  },
  {
    "city": "FLAGSTAFF",
    "city_rate": 0.02281,
    "combined_district_rate": 0.03581,
    "combined_rate": 0.09181,
    "combined_use_rate": 0.07881,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86004"
  },
  {
    "city": "FLAGSTAFF",
    "city_rate": 0.02281,
    "combined_district_rate": 0.03581,
    "combined_rate": 0.09181,
    "combined_use_rate": 0.07881,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86005"
  },
  {
    "city": "FLAGSTAFF",
    "city_rate": 0.02281,
    "combined_district_rate": 0.03581,
    "combined_rate": 0.09181,
    "combined_use_rate": 0.07881,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86011"
  },
  {
    "city": "BELLEMONT",
    "city_rate": 0,
    "combined_district_rate": 0.013,
    "combined_rate": 0.069,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86015"
  },
  {
    "city": "GRAY MOUNTAIN",
    "city_rate": 0,
    "combined_district_rate": 0.013,
    "combined_rate": 0.069,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86016"
  },
  {
    "city": "MUNDS PARK",
    "city_rate": 0,
    "combined_district_rate": 0.013,
    "combined_rate": 0.069,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86017"
  },
  {
    "city": "PARKS",
    "city_rate": 0,
    "combined_district_rate": 0.013,
    "combined_rate": 0.069,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86018"
  },
  {
    "city": "CAMERON",
    "city_rate": 0,
    "combined_district_rate": 0.013,
    "combined_rate": 0.069,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86020"
  },
  {
    "city": "COLORADO CITY",
    "city_rate": 0.03,
    "combined_district_rate": 0.03,
    "combined_rate": 0.086,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86021"
  },
  {
    "city": "FREDONIA",
    "city_rate": 0.04,
    "combined_district_rate": 0.053,
    "combined_rate": 0.109,
    "combined_use_rate": 0.096,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86022"
  },
  {
    "city": "GRAND CANYON",
    "city_rate": 0,
    "combined_district_rate": 0.013,
    "combined_rate": 0.069,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86023"
  },
  {
    "city": "HAPPY JACK",
    "city_rate": 0,
    "combined_district_rate": 0.013,
    "combined_rate": 0.069,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86024"
  },
  {
    "city": "HOLBROOK",
    "city_rate": 0.03,
    "combined_district_rate": 0.0383,
    "combined_rate": 0.0943,
    "combined_use_rate": 0.086,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86025"
  },
  {
    "city": "PETRIFIED FOREST NATL PK",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86028"
  },
  {
    "city": "SUN VALLEY",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86029"
  },
  {
    "city": "HOTEVILLA",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86030"
  },
  {
    "city": "INDIAN WELLS",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86031"
  },
  {
    "city": "JOSEPH CITY",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86032"
  },
  {
    "city": "KAYENTA TOWNSHIP NAV NAT",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86033"
  },
  {
    "city": "KEAMS CANYON",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86034"
  },
  {
    "city": "LEUPP",
    "city_rate": 0,
    "combined_district_rate": 0.013,
    "combined_rate": 0.069,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86035"
  },
  {
    "city": "MARBLE CANYON",
    "city_rate": 0,
    "combined_district_rate": 0.013,
    "combined_rate": 0.069,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86036"
  },
  {
    "city": "MORMON LAKE",
    "city_rate": 0,
    "combined_district_rate": 0.013,
    "combined_rate": 0.069,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86038"
  },
  {
    "city": "KYKOTSMOVI VILLAGE",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86039"
  },
  {
    "city": "PAGE",
    "city_rate": 0.03,
    "combined_district_rate": 0.043,
    "combined_rate": 0.099,
    "combined_use_rate": 0.086,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86040"
  },
  {
    "city": "POLACCA",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86042"
  },
  {
    "city": "SECOND MESA",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86043"
  },
  {
    "city": "TONALEA",
    "city_rate": 0,
    "combined_district_rate": 0.013,
    "combined_rate": 0.069,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86044"
  },
  {
    "city": "TUBA CITY",
    "city_rate": 0,
    "combined_district_rate": 0.013,
    "combined_rate": 0.069,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86045"
  },
  {
    "city": "WILLIAMS",
    "city_rate": 0,
    "combined_district_rate": 0.013,
    "combined_rate": 0.069,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86046"
  },
  {
    "city": "WINSLOW",
    "city_rate": 0.03,
    "combined_district_rate": 0.0383,
    "combined_rate": 0.0943,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86047"
  },
  {
    "city": "NORTH RIM",
    "city_rate": 0,
    "combined_district_rate": 0.013,
    "combined_rate": 0.069,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86052"
  },
  {
    "city": "KAIBETO",
    "city_rate": 0,
    "combined_district_rate": 0.013,
    "combined_rate": 0.069,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86053"
  },
  {
    "city": "SHONTO",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86054"
  },
  {
    "city": "PRESCOTT",
    "city_rate": 0.02,
    "combined_district_rate": 0.0275,
    "combined_rate": 0.0835,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86301"
  },
  {
    "city": "PRESCOTT",
    "city_rate": 0.02,
    "combined_district_rate": 0.0275,
    "combined_rate": 0.0835,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86302"
  },
  {
    "city": "PRESCOTT",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86303"
  },
  {
    "city": "PRESCOTT",
    "city_rate": 0.02,
    "combined_district_rate": 0.0275,
    "combined_rate": 0.0835,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86304"
  },
  {
    "city": "PRESCOTT",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86305"
  },
  {
    "city": "PRESCOTT VALLEY",
    "city_rate": 0.0283,
    "combined_district_rate": 0.0358,
    "combined_rate": 0.0918,
    "combined_use_rate": 0.0843,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86312"
  },
  {
    "city": "PRESCOTT",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86313"
  },
  {
    "city": "PRESCOTT VALLEY",
    "city_rate": 0.0283,
    "combined_district_rate": 0.0358,
    "combined_rate": 0.0918,
    "combined_use_rate": 0.0843,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86314"
  },
  {
    "city": "PRESCOTT VALLEY",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86315"
  },
  {
    "city": "ASH FORK",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86320"
  },
  {
    "city": "BAGDAD",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86321"
  },
  {
    "city": "CAMP VERDE",
    "city_rate": 0.0365,
    "combined_district_rate": 0.044,
    "combined_rate": 0.1,
    "combined_use_rate": 0.0925,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86322"
  },
  {
    "city": "CHINO VALLEY",
    "city_rate": 0.04,
    "combined_district_rate": 0.0475,
    "combined_rate": 0.1035,
    "combined_use_rate": 0.086,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86323"
  },
  {
    "city": "CLARKDALE",
    "city_rate": 0.035,
    "combined_district_rate": 0.0425,
    "combined_rate": 0.0985,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86324"
  },
  {
    "city": "CORNVILLE",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86325"
  },
  {
    "city": "COTTONWOOD",
    "city_rate": 0.035,
    "combined_district_rate": 0.0425,
    "combined_rate": 0.0985,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86326"
  },
  {
    "city": "PRESCOTT VALLEY",
    "city_rate": 0.0283,
    "combined_district_rate": 0.0358,
    "combined_rate": 0.0918,
    "combined_use_rate": 0.0843,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86327"
  },
  {
    "city": "DEWEY-HUMBOLDT",
    "city_rate": 0.02,
    "combined_district_rate": 0.0275,
    "combined_rate": 0.0835,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86329"
  },
  {
    "city": "JEROME",
    "city_rate": 0.035,
    "combined_district_rate": 0.0425,
    "combined_rate": 0.0985,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86331"
  },
  {
    "city": "KIRKLAND",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86332"
  },
  {
    "city": "MAYER",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86333"
  },
  {
    "city": "PAULDEN",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86334"
  },
  {
    "city": "RIMROCK",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86335"
  },
  {
    "city": "SEDONA",
    "city_rate": 0.035,
    "combined_district_rate": 0.0425,
    "combined_rate": 0.0985,
    "combined_use_rate": 0.086,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86336"
  },
  {
    "city": "SELIGMAN",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86337"
  },
  {
    "city": "SKULL VALLEY",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86338"
  },
  {
    "city": "SEDONA",
    "city_rate": 0.035,
    "combined_district_rate": 0.048,
    "combined_rate": 0.104,
    "combined_use_rate": 0.086,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86339"
  },
  {
    "city": "SEDONA",
    "city_rate": 0.035,
    "combined_district_rate": 0.0425,
    "combined_rate": 0.0985,
    "combined_use_rate": 0.086,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86340"
  },
  {
    "city": "SEDONA",
    "city_rate": 0.035,
    "combined_district_rate": 0.0425,
    "combined_rate": 0.0985,
    "combined_use_rate": 0.086,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86341"
  },
  {
    "city": "LAKE MONTEZUMA",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86342"
  },
  {
    "city": "CROWN KING",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86343"
  },
  {
    "city": "SEDONA",
    "city_rate": 0,
    "combined_district_rate": 0.0075,
    "combined_rate": 0.0635,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "YAVAPAI",
    "county_rate": 0.0075,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86351"
  },
  {
    "city": "KINGMAN",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86401"
  },
  {
    "city": "KINGMAN",
    "city_rate": 0.025,
    "combined_district_rate": 0.025,
    "combined_rate": 0.081,
    "combined_use_rate": 0.081,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86402"
  },
  {
    "city": "LAKE HAVASU CITY",
    "city_rate": 0.02,
    "combined_district_rate": 0.02,
    "combined_rate": 0.076,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86403"
  },
  {
    "city": "LAKE HAVASU CITY",
    "city_rate": 0.02,
    "combined_district_rate": 0.02,
    "combined_rate": 0.076,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86404"
  },
  {
    "city": "LAKE HAVASU CITY",
    "city_rate": 0.02,
    "combined_district_rate": 0.02,
    "combined_rate": 0.076,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86405"
  },
  {
    "city": "LAKE HAVASU CITY",
    "city_rate": 0.02,
    "combined_district_rate": 0.02,
    "combined_rate": 0.076,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86406"
  },
  {
    "city": "KINGMAN",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86409"
  },
  {
    "city": "HACKBERRY",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86411"
  },
  {
    "city": "HUALAPAI",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86412"
  },
  {
    "city": "GOLDEN VALLEY",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86413"
  },
  {
    "city": "FORT MOHAVE",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86426"
  },
  {
    "city": "FORT MOHAVE",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86427"
  },
  {
    "city": "BULLHEAD CITY",
    "city_rate": 0.02,
    "combined_district_rate": 0.02,
    "combined_rate": 0.076,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86429"
  },
  {
    "city": "BULLHEAD CITY",
    "city_rate": 0.02,
    "combined_district_rate": 0.02,
    "combined_rate": 0.076,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86430"
  },
  {
    "city": "CHLORIDE",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86431"
  },
  {
    "city": "LITTLEFIELD",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86432"
  },
  {
    "city": "OATMAN",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86433"
  },
  {
    "city": "PEACH SPRINGS",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86434"
  },
  {
    "city": "SUPAI",
    "city_rate": 0,
    "combined_district_rate": 0.013,
    "combined_rate": 0.069,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "COCONINO",
    "county_rate": 0.013,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86435"
  },
  {
    "city": "TOPOCK",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86436"
  },
  {
    "city": "VALENTINE",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86437"
  },
  {
    "city": "YUCCA",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86438"
  },
  {
    "city": "BULLHEAD CITY",
    "city_rate": 0.02,
    "combined_district_rate": 0.02,
    "combined_rate": 0.076,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86439"
  },
  {
    "city": "MOHAVE VALLEY",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86440"
  },
  {
    "city": "DOLAN SPRINGS",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86441"
  },
  {
    "city": "BULLHEAD CITY",
    "city_rate": 0.02,
    "combined_district_rate": 0.02,
    "combined_rate": 0.076,
    "combined_use_rate": 0.076,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86442"
  },
  {
    "city": "TEMPLE BAR MARINA",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86443"
  },
  {
    "city": "MEADVIEW",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86444"
  },
  {
    "city": "WILLOW BEACH",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86445"
  },
  {
    "city": "MOHAVE VALLEY",
    "city_rate": 0,
    "combined_district_rate": 0,
    "combined_rate": 0.056,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "MOHAVE",
    "county_rate": 0,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86446"
  },
  {
    "city": "CHAMBERS",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86502"
  },
  {
    "city": "CHINLE",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86503"
  },
  {
    "city": "FORT DEFIANCE",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86504"
  },
  {
    "city": "GANADO",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86505"
  },
  {
    "city": "HOUCK",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86506"
  },
  {
    "city": "LUKACHUKAI",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86507"
  },
  {
    "city": "LUPTON",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86508"
  },
  {
    "city": "PINON",
    "city_rate": 0,
    "combined_district_rate": 0.0083,
    "combined_rate": 0.0643,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86510"
  },
  {
    "city": "SAINT MICHAELS",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86511"
  },
  {
    "city": "SANDERS",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86512"
  },
  {
    "city": "TEEC NOS POS",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86514"
  },
  {
    "city": "WINDOW ROCK",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86515"
  },
  {
    "city": "PINETOP-LAKESIDE",
    "city_rate": 0.03,
    "combined_district_rate": 0.0383,
    "combined_rate": 0.0943,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "NAVAJO",
    "county_rate": 0.0083,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86520"
  },
  {
    "city": "DENNEHOTSO",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86535"
  },
  {
    "city": "MANY FARMS",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86538"
  },
  {
    "city": "NAZLINI",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86540"
  },
  {
    "city": "RED VALLEY",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86544"
  },
  {
    "city": "ROCK POINT",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86545"
  },
  {
    "city": "ROUND ROCK",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86547"
  },
  {
    "city": "TSAILE",
    "city_rate": 0,
    "combined_district_rate": 0.005,
    "combined_rate": 0.061,
    "combined_use_rate": 0.056,
    "country": "US",
    "county": "APACHE",
    "county_rate": 0.005,
    "freight_taxable": false,
    "state": "AZ",
    "state_rate": 0.056,
    "zip": "86556"
  }
],};