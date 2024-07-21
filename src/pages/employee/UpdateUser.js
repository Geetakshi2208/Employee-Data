import './UpdateUser.css';
import { useEffect, useState } from "react";
import Form  from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const UpdateUser =()=>{
    const {id} = useParams();
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        phone: "",
        department:""
    })

    const handleInputChange=(event)=>{
        const {name,value}= event.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    };
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{

            const response = await fetch(`http://localhost:8081/api/employee/${id}`,{
                method:'PATCH',
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(formData),
            });
            const data = await response.json();
            console.log("User updated",data);
            navigate("/");

        }catch(error){
            console.log("Error while Updating user"+error.message());
        }
    }
    useEffect(()=>{
        const  fetchEmployee = async ()=>{
            try{
                const response = await fetch(`http://localhost:8081/api/employee/${id}`);
                const data = await response.json();
                setFormData(data);

            }catch(error){
                console.log("Error Fteching user "+error.message);
            }
            
        }
        fetchEmployee();
    },[id])
    return (
        <>
        <div className="center-form">
            <h1>
                Edit Employee
            </h1>
            <Form onSubmit ={handleSubmit0}>
                <Form.Group controlId="formBasicName">
                    <Form.Control 
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleInputChange}
                    />

                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Control 
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleInputChange}
                    />

                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Control 
                    type="text"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    />

                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Control 
                    type="text"
                    name="department"
                    placeholder="Enter department"
                    value={formData.department}
                    onChange={handleInputChange}
                    />

                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Edit Employee
                </Button>
            </Form>

        </div>
        </>
    )
}
export default UpdateUser;