import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Dashboard() {
    const [purchases, setPurchases] = useState([]);
    console.log("purchase:",purchases)
    
    useEffect(() => {
        getPurchase();
    }, [])

    const getPurchase = () => {
        const url = "https://raw.githubusercontent.com/Bit-Code-Technologies/mockapi/main/purchase.json";
        fetch(url).then(response=>{
            console.log("res:",response)
            return response.json();
        }).then(responseData=>{
            console.log("res:",responseData)
            const previousPurchase = purchases;
            responseData.map((data,index)=>{
                previousPurchase[index] = data
                setPurchases(previousPurchase)
        })
        }).catch(error=>{ 
            return error.response;
        });
        // console.log("puchase res:",res);
        // return res;
    }

    const savePurchase = async() =>{
        const data = purchases;
        const res = await axios.post('/api/purchase', data).then(response=>{
                return response;
            }).catch(error=>{
                return error.response;
            });
            console.log("res:",res);
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
