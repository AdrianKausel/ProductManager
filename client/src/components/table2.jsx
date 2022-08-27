import React, { useEffect } from "react";
import Table from 'react-bootstrap/Table'
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


const ProductTable2 = ({getID}) => {

    const [newData, setNewData] = useState([])

    useEffect(() => {axios.get("http://localhost:8000/api/product/")
    .then (resp => {
        setNewData([...resp.data.product])
        console.log({...resp.data})
        getID({...resp.data})
    })
},[])


    return (
        <React.Fragment>
            <Table>
                <thead>
                    <tr>
                        <th>Product Title</th>
                    </tr>
                </thead>
                <tbody>
                    {newData.map((dato,i) => (
                        <tr key={i}>
                        <td><Link to={`/${dato._id}`} >{dato.productTitle}</Link></td>
                    </tr>

                    ))}
                    
                    
                </tbody>
            </Table>
        </React.Fragment>
    )
}
export default ProductTable2;