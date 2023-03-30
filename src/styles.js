import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    display: 'flex',
    borderRadius: theme.shape.bord,
    marginRight: theme.spacing(2),
    marginLeft: '5px',
    width: '100%',
  },
  searchIcon: {
    padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'flex-srart', justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0), 
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, 
    transition: theme.transitions.create('width'), 
    width: '100%', 
    boxShadow: '2px 2px 2px black',
    borderRadius: '10px',
    [theme.breakpoints.up('md')]: { width: '20ch' },
    
  },
  toolbar: {
    justifyContent: 'center', backgroundColor: 'rgb(204, 0, 0)'
  },
  button: {  
    color: 'white',
    padding: '5px', 
    boxShadow: '2px 2px 2px black',
    borderRadius: '10px',
    fontSize: 'medium',
    width:'100px',
    height:'40px',
    background:'rgb(204 0 0)',
    fontWeight:'bold',
    marginLeft:'10px',
  },
  box:{
    display:'flex',
  },
}));