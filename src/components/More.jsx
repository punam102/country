import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const More = () => {
  const [counrtydata, setCountryData] = useState([]);

  const { id } = useParams();
  const api = `https://restcountries.com/v3.1/name/${id}`;
  const fetchCountryData = async () => {
    try {
      let res = await fetch(api),
        counrtydata = await res.json();

      console.log(counrtydata);
      setCountryData(counrtydata);
    } catch (err) {
      console.log("error:", err);
    }
  };
  useEffect(() => {
    fetchCountryData();
  }, []);
  return (
    <div className="container1">
      {/* {counrtydata.map((country) => ( */}
      {counrtydata.map((country) => {
        return (
          <div key={country.name.common} className="data">
            <img src={country.flags.png} alt={country.name.common} />
            <br />
            <h2>{country.name.common}</h2>
            {/* <h4>Population: {country.population}</h4> */}
            {/* <h4>Language Names: {country.subregion}</h4> */}
            <h4>Sub Region: {country.subregion}</h4>
            <h4>Currency Name: {country.capital}</h4>
             <h4>Language Names: {country.languages.bul}</h4>
            <a href={`/`}>
              <button>Back to home</button>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default More;
