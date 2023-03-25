import React, {useEffect, useState} from "react";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import useStyles from './components/Headers/styles'
import { Autocomplete, Data } from "@react-google-maps/api";
import { Toolbar, AppBar, Typography, InputBase, Box, Button, CssBaseline, Grid } from "@material-ui/core";
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import styles from './styles.css'
import {getStores} from "./components/dataManagement/Data";
import Instructions from "./components/Instructions/Instructions";
import { productResp } from './components/dataManagement/ProductData';
import {getTaxRate} from './components/dataManagement/Data'


function OutputData(address, storeName, price, distance, taxrate, lon, lat){
    this.address = address;
    this.storeName = storeName;
    this.price = price;
    this.distance = distance;
    this.taxrate = taxrate;
    this.lon = lon;
    this.lat = lat;
}
const App = () => {

  const classes = useStyles();
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [responseData, setResponseData] = useState([]);
  const [testData, setTest] = useState();

  const [home, setHome] = useState(null);

  const [input, setInput] = useState({
    zip:null,
    distance:null,
    tcin:null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput(prevState => ({
      ...prevState,
      [name] : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(Object.values(input).includes(null) ||Object.values(input).includes('')){
      alert("Enter all fields");
    }
    else{
      
      // Use user input to fetch stores with product in stock
      const apiData = getStores(input.tcin,input.zip, input.distance);
      const stores = [];
      apiData.then(data => {
        for(const store of data.locations)
        {
          const info = new OutputData(store.address.address_line1, 
            store.location_names[0].name, productResp.product.price.current_retail, store.distance, 
            getTaxRate(store.address.postal_code.substring(0,5)), 
            store.geographic_specifications.longitude, 
            store.geographic_specifications.latitude);
            stores.push(info);
        };
    
        stores.sort((a,b) => a.price - b.price);
  
        setResponseData(stores);
      })
    }
  };
    

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude} }) =>{
      setCoordinates({lat: latitude, lng: longitude});
    })

  }, []);


  return (
    <>
    <CssBaseline/>
    <AppBar position="static">
      <Toolbar className = {classes.toolbar}>
        <Typography variant="h3" className = {classes.title}>
          <MoneyOffIcon fontSize="large"/>
          Target Better Price
          <MoneyOffIcon fontSize="large"/>
        </Typography>
        <Box paddingLeft={15}>
          <div clasName = {classes.search} disableGutters>  
            <input
              placeholder = "TCIN"
              type="number"
              name="tcin"
              onChange={handleInputChange}
              className= "inputBox"
            />
          
            <input
              placeholder = "Home Zip"
              type="number"
              name="zip"
              onChange={handleInputChange}
              className= "inputBox"
            />
          
            <input
              placeholder = "Distance"
              type="number"
              name="distance"
              onChange={handleInputChange}
              className= "inputBox"
            />

            <Button 
              variant="outlined" color="default" 
              className={classes.submit} 
              onClick = {handleSubmit}
            > Submit
            </Button>

          </div>
        </Box>
        
      </Toolbar>
    </AppBar>
    {responseData.length === 0 && <Instructions/>}
    <Grid container spacing={2} style = {{width: '100%'}}>
      <Grid item xs={12} md={5}>
        {responseData.length!= 0 &&
          <List store = {responseData}
          currLocation = {coordinates}
          />
        }
      </Grid>
      <Grid item xs={12} md = {7}>
      {responseData.length!= 0 &&
          <Map
          setCoordinates={setCoordinates}
          setBounds = {setBounds}
          coordinates = {coordinates}
          stores = {responseData}
          home = {home}/>
        }
      </Grid>
    </Grid>
    <Footer/>
    </>
  )
}

export default App;