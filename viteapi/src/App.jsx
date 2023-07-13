import React,{useEffect, useState} from 'react'

const App = () => {
  const [items,setItems] = useState({
     id:"",
     title:"",
     price:""
  })
  
  const Products = async ()=>{
    const url = import.meta.env.VITE_URL;
    try{
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setItems({
        id:data[11].id,
        title:data[1].title,
        price:data[10].price
      })

  }
  catch(error){
    console.log(error)
  }
};
 
  useEffect(() => {
    Products();
  }, []);

  return (
    <div>
      <h1>{items.id}</h1>
      <h1>{items.title}</h1>
      <h1>{items.price}</h1>
    </div>

  )
}

export default App
