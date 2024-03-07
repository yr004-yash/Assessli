import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lineSpinner } from 'ldrs'

function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [s1, sets1] = useState(0);
    const [s2, sets2] = useState(0);
    const [s3, sets3] = useState(0);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const senddata = {
        name: name,
        email: email,
        phone: phone,
        message: message
    }
    const navigate = useNavigate();
    const isvalid = async (e) => {
        e.preventDefault();
        if (name.length < 2 || !emailRegex.test(email) || !phoneRegex.test(phone)) {
            if (name.length < 2) sets1(1);
            else sets1(0);
            if (!emailRegex.test(email)) sets2(1);
            else sets2(0);
            if(!phoneRegex.test(phone)) sets3(1);
            else sets3(0);

        } else {
            sets1(0);
            sets2(0);
            sets3(0);
            try {
                axios.post(`${import.meta.env.VITE_BACKEND_Sheet}`, senddata)
                    .then(response => {
                        console.log(response);
                    })
                toast(`The form is submitted successfully.`);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }
    return (
        <div className='h-screen w-screen bg-slate-900 flex justify-center'>
            <div className=" max-w-screen-md max-h-[700px]  sm:my-auto p-5 bg-slate-700 bg-opacity-10 rounded-[25px] backdrop-blur-2xl backdrop-saturate-100">
                <form className="w-full">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Username
                            </label>
                            <input
                                id="name"
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                required
                                value={name}
                                placeholder="Enter Username"
                                className="appearance-none block w-full bg-transparent text-white border-b border-gray-500  py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-100"
                            />
                            {s1 === 1 && <p className="text-red-500">Username's length must be greater than 1</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Email ID
                            </label>
                            <input
                                id="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                value={email}
                                placeholder="Enter Email"
                                className="appearance-none block w-full bg-transparent text-white border-b border-gray-500  py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-100"
                            />
                            {s2 === 1 && <p className="text-red-500">Email must be in a proper format.</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                value={phone}
                                placeholder="Enter Phone Number"
                                className="appearance-none block w-full bg-transparent text-white border-b border-gray-500  py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-100"
                            />
                            {s3 === 1 && <p className="text-red-500">Phone Number must be in a proper format.</p>}
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Message
                            </label>
                            <input
                                name="mesaage"
                                placeholder="Enter Message"
                                rows="3"
                                required
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="max-h-64 min-h-[50px] appearance-none block w-full bg-transparent text-white border-b border-gray-500  py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-100"
                            ></input>
                            <div className="flex justify-center mt-5 w-full px-3">
                            <div className="md:flex md:items-center" />
                            <button
                                className="shadow bg-indigo-600 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded-[15px] w-full px-3"
                                onClick={isvalid}
                            >
                                Submit
                            </button>
                        </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;


