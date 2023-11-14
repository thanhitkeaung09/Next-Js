'use client';

import { useEffect } from "react";

export default function Page(){
    useEffect(()=>{
      fetchData();
    },[])

    const fetchData =() =>{
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
    return <div className="">
      <p>Dashboard Pageeeeee</p>
    </div>;
}