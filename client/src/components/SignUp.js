import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form';


const SignUp = ({onLogin}) => {
    const history = useNavigate()
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        name: "",
        phone_name: ""
    })
    

    function handleChange(e) {
        const {name, value} = e.target
        console.log(name, value)
        setFormData((formData) => ({...formData, 
            [name]: value}))
    }

    function handleLogin(e) {
        e.preventDefault();
        console.log(formData)
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
            }).then((r) => {
                if (r.ok) {
                    r.json().then((user) => onLogin(user));
            history("/waitlists")
                } else {
                    r.json().then((err) => setErrors(err.errors));
            }
        })
        setFormData({
            username: "",
            password: "",
            name: "",
            phone_numer: "",
        });
        }
    return(
        <div className='form'>
            
            <Form onSubmit={handleLogin}>
                <h1 className="login">Signup!</h1>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className='form-text'>Enter New Username</Form.Label>
                <Form.Control 
                    placeholder="Username" 
                    name="username" 
                    value={formData.username}
                    onChange={handleChange}
                />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='form-text'>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    value={formData.password} 
                    onChange={handleChange}
                /> 
                <Form.Text className="form-text">
                    Please use a secure password. Protect yourself!
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className='form-text'>Enter Your Name</Form.Label>
                <Form.Control 
                    placeholder="Name" 
                    name="username" 
                    value={formData.username}
                    onChange={handleChange}
                />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className='form-text'>Enter a Mobile Number</Form.Label>
                <Form.Control 
                    placeholder="Mobile Number" 
                    name="username" 
                    value={formData.username}
                    onChange={handleChange}
                />
                <Form.Text className="form-text">
                    This should be a number you can currently be reached at if you are opting in to receive notifications.
                </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Opt In to receive notifications " />
            </Form.Group>
            <Button className="button" variant="primary" type="submit">
               Submit
            </Button>
            <br/>
            <br/>
            <span className='form-text'>Already have a Line-Right account? <a href="/login">Login</a> here!</span>
        </Form>

        </div>
    )
}
export default SignUp;