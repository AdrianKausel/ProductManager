import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import ProductForm from './components/form';
import {Routes, Route, Link} from 'react-router-dom'
import ProductTable from './components/table';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';  

function App() {

  const [datas, setDatas] = useState([]);
  const [reload, setReload] = useState(false)
  const navigate = useNavigate()

  const addData =(obj) => {
    return axios.post("http://localhost:8000/api/product/", obj)
      .then(respn => {
          if(!respn.data.error){
            setDatas([...datas, respn.data.product])
            alert('created!')
            return true
          }
          else { return false}
      })
  }
  const editData =(obj) => {
    return axios.put(`http://localhost:8000/api/product/update/${obj._id}`, obj)
      .then(response=> {
          if(!response.data.error){
            setReload(!reload)
            return true
          }
      })
  }
  useEffect(() => {
    axios.get("http://localhost:8000/api/product/")
    .then (resp => {
      if(!resp.data.error)
        setDatas(resp.data.product);
    })
},[reload])

  const deleteProduct = (obj) => {
    axios.delete(`http://localhost:8000/api/product/delete/${obj._id}`)
            .then(response => {
              if(!response.data.error){
                alert('Deleted!')
                setReload(!reload);
                navigate('/new')
              }
              
            })
  }

  return (
    <div className="App">
      <React.Fragment>
      <Container>
        <h1> Welcome to Product Manager </h1>
        <Link to='/new' > Get Started </Link>
        <Link to='/list' > Full detail </Link>
        <Routes>  
          <Route path='/new' element={<ProductForm createData={addData}/>}/>
          <Route path='/edit/:id' element={<ProductForm editFn={editData}/>}/>
          <Route path='/list' element={<ProductTable sendData={datas} deleteFn={deleteProduct}/>}/>
        </Routes>
      </Container>
      </React.Fragment>
      
    </div>
  );
}

export default App;
