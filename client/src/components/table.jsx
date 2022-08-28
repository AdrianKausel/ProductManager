import React, { useEffect } from "react";
import Table from 'react-bootstrap/Table'
import axios from "axios";
import { useState } from "react";
import { TbEdit } from 'react-icons/tb';
import {AiFillDelete} from 'react-icons/ai'
import { Link } from "react-router-dom";

const ProductTable = ({sendData, deleteFn}) => {


    
    return (
        <React.Fragment>
            <Table>
                <thead>
                    <tr>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th> Edit Product</th>   
                        <th> Delete Product</th>  
                    </tr>
                </thead>
                <tbody>
                    {sendData.map((dato,i) => (
                        <tr key={i}>
                        <td>{dato.productTitle}</td>
                        <td>{dato.price}</td>
                        <td>{dato.description}</td>
                        <td><Link to={`/edit/${dato._id}`} ><TbEdit color='green '/></Link></td>
                        <td><AiFillDelete color='red 'onClick={e => deleteFn(dato)}/></td>
                    </tr>

                    ))}
                    
                    
                </tbody>
            </Table>
        </React.Fragment>
    )
}
export default ProductTable;