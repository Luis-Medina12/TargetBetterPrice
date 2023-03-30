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
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: '5px',
    width: '100%',
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
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
  submit: {  
    color: 'white',
    padding: '5px', 
    boxShadow: '2px 2px 2px black',
    borderRadius: '10px',
    fontSize: 'medium',
    marginTop:'10px',
    width:'12%',
    height:'40px',
    background:'grey',
  },
  reset: {  
    color: 'white',
    padding: '5px', 
    boxShadow: '2px 2px 2px black',
    borderRadius: '10px',
    fontSize: 'medium',
    marginTop:'10px',
    width:'12%',
    height:'40px',
    background:'grey',
  },
  box:{
    display:'flex',
  },
}));