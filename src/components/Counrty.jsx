
import React, { useEffect, useState } from "react";
import Modals from "./Modals";

const Counrty = () => {
  const [counrtydata, setCountryData] = useState([]);
  const fetchCountryData = async () => {
    try {
      let res = await fetch("https://restcountries.com/v3.1/all"),
        counrtydata = await res.json();

      console.log(counrtydata);
      setCountryData(counrtydata);
    } catch (err) {
      console.log("error:", err);
    }
  };
  const handlesort = (e) => {
    const {value} = e.target
      
   if(value === "asc")
   {
    const newdata=counrtydata.sort((a,b)=>{
      return a.population - b.population
    })
    setCountryData([...newdata])
    console.log(newdata)
   }
   if(value==="desc")
   {
    const newdata = counrtydata.sort((a,b)=>{
      return b.population - a.population
    })
    setCountryData([...newdata])
    console.log(newdata)
   }
  };
  const filterhandle=(e)=>{
    const{value} = e.target
    if(value !=="empty")
    {
      fetch(`https://restcountries.com/v3.1/region/${value}`)
      .then((res)=>res.json())
      .then((res)=>{
        setCountryData([...res])
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
  useEffect(() => {
    fetchCountryData();
  }, []);
  // useEffect(() =>{
  //   handlesort()
  // },[population]);
  return (
    <>
    
     <div className="functions">
     <div className="filter">
     <h4>sort by population :<span> <select className="select" onChange={handlesort}>
         <h4>sort by population</h4><option value="">sort by population</option>
        <option value="desc">High to Low</option>
        <option value="asc">Low to High</option>
      </select>
      </span></h4>
      </div>
      <div>
      <h4>filter by region :<span><select className="select" onChange={filterhandle}>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select> 
      </span></h4>
      </div>
     </div>
          <div className="container">
           {counrtydata.map((country) => {
          return (
            <div key={country.name.common} className="data">
              <img className="img" src={country.flags.png} alt={country.name.common} />
              <br />
              <h2>{country.name.common}</h2>
              <h4>Population: {country.population}</h4>
              <h4>Region: {country.region}</h4>
              <h4>Capital: {country.capital}</h4>
              <Modals country={country.name.official}/>
              {/* <Modal country={country.name.official}/> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Counrty;
