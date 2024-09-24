import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [hardwareList, setHardwareList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/hardware')
            .then(response => {
                setHardwareList(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the hardware data!", error);
            });
    }, []);

    return (
        <div>
            <h1>Police Hardware Inventory</h1>
            <ul>
                {hardwareList.map((hardware) => (
                    <li key={hardware._id}>
                        {hardware.assetId} - {hardware.type} - {hardware.location} - {new Date(hardware.purchaseDate).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
