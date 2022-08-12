import { Button } from 'react-bootstrap';
import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Report from '../components/Report';

function Dashboard() {
    const [purchases, setPurchases] = useState({data: ''});
    const [showReport, setShowReport] = useState(false);
    
    useEffect(() => {
        getPurchase();
    }, [])

    const getPurchase = () => {
        const url = "https://raw.githubusercontent.com/Bit-Code-Technologies/mockapi/main/purchase.json";
        fetch(url).then(response=>{
            return response.json();
        }).then(responseData=>{
            setPurchases({data: responseData})
        }).catch(error=>{ 
            return error.response;
        });
    }

    const savePurchase = async() =>{
        const data = purchases;
        const res = await axios.post('/api/purchase', data).then(response=>{
            setShowReport(true);
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

                        {showReport ? 
                        <div>
                        <Report />
                        </div> :
                        <div className="card-body d-flex justify-content-center">
                            <Button variant="primary" onClick={savePurchase}>Generate Report</Button>
                        </div>
                        }
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
