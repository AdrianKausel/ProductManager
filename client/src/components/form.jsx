import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const initialState = {
    productTitle : '',
    price: '',
    description: '',

}

const ProductForm = ({createData, editFn}) => {

    const [form, setForm] = useState(initialState);
    const navigate = useNavigate();
    const { id } = useParams();

    const updateForm = ({target: {name, value}}) => {
        setForm({
            ...form,
            [name]: value
        })
    }

    const add = async e => {
        e.preventDefault()
        let response = false;
        if(!id) {
            response = await createData(form)
        } else {
            response = await editFn(form)
        }
        if(response){
            navigate('/list')
        }    
    }

    useEffect(() => {
        if(id){
            axios.get(`http://localhost:8000/api/product/${id}`)
                .then(resp => {
                    if(!resp.data.error) {
                        setForm(resp.data.product)
                    }
                })
        }
    },[])
    return (
        <Container>
        <Form onSubmit={add}>
            <Form.Group style={{textAlign: "center"}} className="mb-3">
                <Form.Label >Product Title</Form.Label>
                <Form.Control className="mb-3" name='productTitle' value={form.productTitle} type="text" onChange={updateForm} />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Price</Form.Label>
                <Form.Control className="mb-2" name='price' type="number"  value={form.price} onChange={updateForm} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control className="mb-2" name='description' type="text"  value={form.description} onChange={updateForm} />
            </Form.Group>
            <Button className="mb-1" variant="primary" type="submit">Create!</Button>
        </Form>
        </Container>
);
}

export default ProductForm;