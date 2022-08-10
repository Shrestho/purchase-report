import { Button } from 'react-bootstrap';
import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Dashboard() {
    // const [purchases, setPurchases] = useState({data: ''});
    // console.log("purchase:",purchases)
    const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
        created_at: [],
        name: [],
        order_no: [],
        product_code: [],
        product_name: [],
        product_price: [],
        purchase_quantity: [],
        user_phone: []
    })
    console.log("state:",state);
    
    useEffect(() => {
        getPurchase();
    }, [])

    const getPurchase = () => {
        const url = "https://raw.githubusercontent.com/Bit-Code-Technologies/mockapi/main/purchase.json";
        fetch(url).then(response=>{
            return response.json();
        }).then(responseData=>{
            // const previousPurchase = purchases;
            // setPurchases({data: responseData})
            responseData.map((data,index)=>{
                setState({
                    ...state,
                    created_at: data.created_at,
                    name: data.name,
                    order_no: data.order_no,
                    product_code: data.product_code,
                    product_name: data.product_name,
                    product_price: data.product_price,
                    purchase_quantity: data.purchase_quantity,
                    user_phone: data.user_phone
                })
                // console.log("data",data)
                // previousPurchase[index] = data
                // setPurchases(previousPurchase)
        })
        }).catch(error=>{ 
            return error.response;
        });
        // return res;
    }

    const savePurchase = async() =>{
        const data = purchases;
        const res = await axios.post('/api/purchase', data).then(response=>{
                return response;
            }).catch(error=>{
                return error.response;
            });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Purchase report</div>

                        <div className="card-body d-flex justify-content-center">
                            <Button variant="primary" onClick={savePurchase}>Generate Report</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

if (document.getElementById('dashboard')) {
    ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}
