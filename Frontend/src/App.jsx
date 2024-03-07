import React from 'react'
import Login from './Components/Login';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
			 	<Routes>
			 		<Route path="/" element={<Login />}/>
			 	</Routes>
			</BrowserRouter> 
    </>
  )
}

export default App
