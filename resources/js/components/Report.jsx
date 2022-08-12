import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Report = () =>{
    const [purchases, setPurchases] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [total, setTotal] = useState();
    const [totalQuantity, setTotalQuantity] = useState();
    console.log("purchase",purchases);

    useEffect(() => {
        getPurchase();
    }, [])

    const getPurchase = async() => {
        const url = "api/purchase";
        const res = await axios.get(url);
        setPurchases(res.data);
        let total_quantity = 0;
        let total_price = 0;
        let total = 0;
        if(res.data){
          res.data.map((purchase,index)=>{
            total_quantity = total_quantity + parseInt(purchase.quantity);
            total_price = total_price + parseInt(purchase.product_price);
            console.log(total_quantity)
        })
        }
        setTotalQuantity(total_quantity);
        setTotalPrice(total_price)
        setTotal(total_quantity*total_price);
    }

    return (
        <>
    <div className='d-flex justify-content-center min-h-100 w-100 align-items-center border-top'>
        <h1>Report</h1>
    </div>
    <div className='pt-2'>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Customer Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>

        {purchases?.map((purchase,index)=>( 
        <tr key={index}>
            <td>{purchase.product_name}</td>
            <td>{purchase.name}</td>
            <td>{purchase.quantity}</td>
            <td>{purchase.product_price}</td>
            <td>{purchase.total_price}</td>
        </tr>
        ))}

        <tr>
          <td colSpan="2">Gross Total:</td>
          <td>{totalQuantity}</td>
          <td>{totalPrice}</td>
          <td>{total}</td>
        </tr>

      </tbody>
    </Table>
    </div>
    </>
    )
}

export default Report;