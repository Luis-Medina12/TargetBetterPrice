import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2), minWidth: '50px',
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '10px', background: 'rgb(204, 0, 0)', display: 'flex', alignItems: 'center', minHeight: '85vh', fontSize: '15px',
    margin: '10px', borderRadius: '10px', flexFlow: 'column', color:'white',
  },
  explain: {
    padding: '10px', display: 'flex',  justifyContent: 'center', fontSize: '20px', margin: '10px', 
    borderRadius: '10px', flexFlow: 'column',
  },
  imageWindow:{
    padding: '10px', display: 'flex',  justifyContent: 'center', fontSize: '20px', margin: '10px', 
    borderRadius: '10px',
  },
  images:{
    margin: '10px', border: 'black 2px solid', borderRadius: '10px',
  },
  welcome:{
    padding: '10px', display: 'flex',  justifyContent: 'center', alignItems: 'center',margin: '20px', 
    borderRadius: '10px', flexFlow: 'column',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto', 
  },
  results:{
    background: 'rgb(204 0 0)', padding: '10px', borderRadius: '10px', fontWeight:'bold', color:'white', fontSize: '1.75vw'
  },
}));