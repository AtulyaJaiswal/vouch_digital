import React, { useState } from 'react';
import './Home.css';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from './axios.js';

function Forms() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const sendDetails = async(e) => {
        e.preventDefault();

        await axios.post('/api/login', {
            email: email,
            password: password
          })
          .then((response) => {
            console.log(response.data);
          }, (error) => {
            console.log(error.response.data);
          });  
        setEmail('');
        setPassword('');     
    };

  return (
    <div className='home_form'>
        <Form name="normal_login" className="login-form">
                <Form.Item name="username" rules={[{required: true,message: 'Please enter your email!',},]}>
                    <Input 
                        value={email} onChange={e => setEmail(e.target.value)}
                        style={{padding:"10px"}} type="email" placeholder="Email Address*" />
                </Form.Item>
                <Form.Item name="password" rules={[{required: true,message: 'Please enter your Password!',},]}>
                    <Input 
                        value={password} onChange={e => setPassword(e.target.value)}
                        style={{padding:"10px"}} type="password" placeholder="Password*"/>
                </Form.Item>
                <Form.Item>
                    <Button 
                        type="submit" onClick={sendDetails}
                        style={{background:"#023047", color:"white" }} className="login-form-button">Log in</Button>
                </Form.Item>
                <Form.Item>
                    <div className='form_remember'>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox className='login-form-checkbox'>
                            <span style={{color:"#023047", fontSize:"13px", fontWeight:"400"}}>Remember me</span>
                        </Checkbox>
                        </Form.Item>
                        <a className="login-form-forgot" href="">Forgot Password?</a>
                    </div>
                </Form.Item>
            </Form>
    </div>
  )
}

export default Forms;