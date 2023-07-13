import React, { useEffect, useState } from 'react'

const App = () => {
    const [data,setData]=  useState({
        Name:"",
        Id:"",
        Main:"",
        Temp:""
    })
    // importing .env file in vite
    const apiKey = import.meta.env.VITE_URL_API_KEY;
    const fetchData = async()=>{
        try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=${apiKey}`)
        const data = await res.json();
        console.log(data)
        setData({
            Name:data.name,
            Id:data.id,
            Main:data.weather[0].main,
            Temp: data.main.temp
            // here the 3 object is inside an array and the 4 object is an object named main

        })
        }
        catch(error){
            console.log(error)
        }

    };
   useEffect(() => {
     fetchData();
   }, [])
   
  return (
    <div>
    <h1>Name:{data.Name}</h1>
    <h1>ID:{data.Id}</h1>
    <h1>Mainn:{data.Main}</h1>
    <p>Temp:{data.Temp}</p>

    </div>
  )
}

export default App