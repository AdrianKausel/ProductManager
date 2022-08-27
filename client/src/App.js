import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import ProductForm from './components/form';
import {Routes, Route, Link} from 'react-router-dom'
import ProductTable from './components/table';
import ProductTable2 from './components/table2';
import ProductTable3 from './components/table3';
import {useNavigate} from 'react-router-dom'

function App() {

  const [data, setData] = useState([]);
  const [idNumber, setIdNumber] = useState ([]);
  const navigate = useNavigate();

  const addData =(obj) => {
    setData([...data,obj]);
    navigate('/producttable') 
  }
  const addID = (obj) => {
    setIdNumber([...data,obj])
  }
  return (
    <div className="App">
      <React.Fragment>
      <Container>
        <h1> Welcome to Product Manager </h1>
        <Link to='/productform' > Get Started </Link>
        <Link to='/producttable' > Full detail </Link>
        <Routes>  
          <Route path='/productform' element={<ProductForm getData={addData}/>}/>
          <Route path='/producttable' element={<ProductTable/>}/>
        </Routes>
      </Container>
      </React.Fragment>
      
    </div>
  );
}

export default App;
