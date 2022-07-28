import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useFetchProducts } from '../hook/fetchProducts';

export const Home = () => {
    // const [products, setProducts]=useState({
    //     loading: false,
    //     error: false,
    //     data: []
    // });
    const {loading, error , data}=useFetchProducts("https://jsonplaceholder.typicode.com/photos");
    useEffect(() => {
        // setProducts(prev=>({
        //     ...prev,
        //     loading: true
        // }))
        // axios({
        //     method: "get",
        //     url: "http://localhost:8000/products"
        // }).then(res => setProducts(prev =>({
        //     ...prev,
        //     loading: false,
        //     error: false,
        //     data: res.data
        // })))
        // .catch(err=> setProducts(prev =>({
        //     ...prev,
        //     loading: false,
        //     error: true
        // })))
    }, [])
  return (
    loading ? <h2>.....loading data</h2>
    : error ? <h2>something wents wrong.</h2>
    :data.map(el => <div key={el.id}>{el.title}</div>)
    // <div>Home</div>
  )
}
