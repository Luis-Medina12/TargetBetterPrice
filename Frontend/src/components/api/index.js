import axios from 'axios';



export const getPlacesData = async (input) => {
    const URL = 'https://39f2e981-9f91-4933-8cd2-8f03aeb31831.mock.pstmn.io/fakeResults4';
    try{
        const data  = await axios.get(URL, {
            params: {
              zip: input.zip,
              tcin:input.tcin,
              distance:input.distance,
              
            }
        });

        return data;

    } catch(error){
        console.log(error);

    }
}

export const getStoreData = async () => {

    const URL = 'https://8031d83b-398e-47cb-a622-9a364682a8e3.mock.pstmn.io/stores';
    try{
        const data  = await axios.get(URL);

        return data;

    } catch(error){
        console.log(error);

    }
}

export const getProductData = async () => {

    const URL = 'https://8031d83b-398e-47cb-a622-9a364682a8e3.mock.pstmn.io/product';
    try{
        const data  = await axios.get(URL);

        return data;

    } catch(error){
        console.log(error);

    }
}


export const getTaxData = async (zipCode) => {

    const URL = 'https://api.apilayer.com/tax_data/tax_rates';
    try{
        const {data: {data}}  = await axios.get(URL, {
            params: {
                zip: zipCode,
                country: 'us',
            },
            headers:{
                'apikey': 'XiMp01C5PA5s6amWAZH98ewXyDIJ9eUm',
            }
        });
        

        return data;

    } catch(error){
        console.log(error);

    }
}




