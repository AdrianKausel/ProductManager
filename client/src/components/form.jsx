import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


const initialState = {
    productTitle : '',
    price: '',
    description: '',

}

const ProductForm = ({getData}) => {

    const [form, setForm] = useState(initialState);

    const updateForm = ({target: {name, value}}) => {
        setForm({
            ...form,
            [name]: value
        })
    }

    const add = e => {
        e.preventDefault();
        getData(form);
        axios.post("http://localhost:8000/api/product/new", {
            ...form
        })
        setForm(initialState);
    }    

    return (
        <Container>
        <Form onSubmit={add}>
            <Form.Group style={{textAlign: "center"}} className="mb-3">
                <Form.Label >Product Title</Form.Label>
                <Form.Control className="mb-3" name='productTitle' value={form.productTitle} type="text" placeholder="Title" onChange={updateForm} />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Price</Form.Label>
                <Form.Control className="mb-2" name='price' type="number" placeholder="Product Price" value={form.price} onChange={updateForm} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control className="mb-2" name='description' type="text" placeholder="Item Description" value={form.description} onChange={updateForm} />
            </Form.Group>
            <Button className="mb-1" variant="primary" type="submit">Create!</Button>
        </Form>
        </Container>
);
}

export default ProductForm;