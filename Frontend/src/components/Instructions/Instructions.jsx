import useStyles from './styles';
import showMore from './DisplayInfo.jpg';
import tcinLocation from './TCIN-Location.png';


const Instructions = () =>{
    const classes = useStyles();

    return (
        <>
        <div className = {classes.container}>
            <div className = {classes.explain}>
                <h1 className = {classes.welcome}> Welcome to the Target Better Price Tool!</h1>
                <p> This tool allows you to determine if a product youre looking for is in stock around you. Additionally, it will figure 
                    out what to the total price of the product will be based on the store's local tax rate. 
                    This Tool will currently only work in the Phoenix area.
                </p>
                <p> Enter your product's TCIN number, your home zip, and the distance you are willing to drive above. See below for instructions on how to obtain a TCIN.</p>
            </div>

            <div className = {classes.imageWindow}>
                <img className = {classes.images} src={showMore} alt="Where to see TCIN" width="550" height="350"></img>
                
                <img className = {classes.images} src={tcinLocation} alt="Where to see TCIN" width="550" height="350"></img>
            </div>
            
        </div>
        </>
    )
}

export default Instructions;