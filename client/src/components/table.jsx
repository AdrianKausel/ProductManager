import React, { useEffect } from "react";
import Table from 'react-bootstrap/Table'
import axios from "axios";
import { useState } from "react";


const ProductTable = ({sendData}) => {

    const [newData, setNewData] = useState([])

    useEffect(() => {axios.get("http://localhost:8000/api/product/")
    .then (resp => {
        setNewData([...resp.data.product])
        console.log({...resp.data.product})
    })
},[])
    

    return (
        <React.Fragment>
            <Table>
                <thead>
                    <tr>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Description</th>   
                    </tr>
                </thead>
                <tbody>
                    {newData.map((dato,i) => (
                        <tr key={i}>
                        <td>{dato.productTitle}</td>
                        <td>${dato.price}</td>
                        <td>{dato.description}</td>
                    </tr>

                    ))}
                    
                    
                </tbody>
            </Table>
        </React.Fragment>
    )
}
export default ProductTable;