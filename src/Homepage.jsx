import React , {useEffect , useState}from "react" ; 
import logo from "./headphone.png"

import axios from "axios";
import {useSnackbar}  from "notistack";


const CountryList = () => {

    const [countries , setCountries] = useState([]);
    
    console.log(countries);
    const fetchCountries = async() => {
        try {
          const response = await axios.get("https://xcountries-backend.azurewebsites.net/all");
          setCountries(response.data);
   console.log(response.data);
      
        }catch(error){
          console.error("Error fetching data:", error.message);
        }
    }


    useEffect(()=>{
      fetchCountries();
    } , []);

    return (
      <div style={{display :'flex ' , flexWrap : "wrap"}}>
        {countries.map((country)=> (
          <CountryCard Key = {country.abbr}  country={country} />
        ))};
      </div>
    );


    

}




const CountryCard = (country) => {

  console.log(country);
  return (
    <div style ={{display : "flex"  , 
    flexDirection :'column' , 
    alignItems:"center" ,  
    justifyContent : 'center' , 
    height: '200px' , 
    width : '200px' , 
    border :'1px solid black' , 
    borderRadius:"10px" ,
    padding : '10px' ,
    margin : "10px"}}>
      <img style ={{height:"110px" , width:'130px'}} src={country.country.flag} alt="country_flag_img" />
      <h2>{country.country.name}</h2>

      {/* <h1>name here</h1>
      <img style ={{height:"110px" , width:'110px'}} src="https://images.pexels.com/photos/10536285/pexels-photo-10536285.jpeg" alt="" />
    </div> */}
    </div>
  )
}

export default CountryList ;
