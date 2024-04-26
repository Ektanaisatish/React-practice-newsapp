// import { useState } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// //import { authActions } from "../store";
// //import { API_BASE_URL } from "../config/Constants";
// import toast from "react-hot-toast";
// import { useForm } from "react-hook-form";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';

// export const Auth = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors: formErrors },
//   } = useForm();
//   const [inputs, setInputs] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [isSignup, setIsSignup] = useState(false);
//   const [signupSuccess, setSignupSuccess] = useState(false);

//   const handleChange = (e) => {
//     e.preventDefault();
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const sendRequest = async (data, type = "login") => {
//     try {
//       const res = await axios.post(`${API_BASE_URL}/${type}`, {
//         name: data.name,
//         email: data.email,
//         password: data.password,
//       });
//       return res.data;
//     } catch (error) {
//       if (error.response) {
//         const errorMessage = error.response.data.message;
//         if (errorMessage === "Invalid email") {
//           toast.error("Invalid email");
//         } else if (errorMessage === "Invalid password") {
//           toast.error("Password is incorrect");
//         } else if (errorMessage === "Username or Password not present") {
//           toast.error("Username or Password not present");
//         }
//       }
//     }
//   };

//   const onSubmit = async (data1) => {
//     if (isSignup) {
//       const data = await sendRequest(data1, "signup");
//       if (data) {
//         setSignupSuccess(true);
//         toast.success("Successfully signed up.");
//       }
//     } else {
//       const data = await sendRequest(data1);
//       if (data) {
//         localStorage.setItem("userId", data.user._id);
//         dispatch(authActions.login());
//         navigate("/blogs");
//         toast.success("Login Successfully");
//       }
//     }
//   };

//   return (
//     <div>
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <div className='container'>
//           <Form.Group controlId="formBasicName">
//             {isSignup && (
//               <>
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control 
//                   type="text" 
//                   placeholder="Enter your name" 
//                   onChange={handleChange}
//                   {...register("name", { required: "Name is required" })}
//                 />
//                 <Alert variant="danger">{formErrors.name?.message}</Alert>
//               </>
//             )}
//           </Form.Group>

//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control 
//               type="email" 
//               placeholder="Enter email" 
//               onChange={handleChange}
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                   message: "This email is not valid",
//                 },
//               })}
//             />
//             <Alert variant="danger">{formErrors.email?.message}</Alert>
//           </Form.Group>

//           <Form.Group controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control 
//               type="password" 
//               placeholder="Password" 
//               onChange={handleChange}
//               {...register("password", {
//                 required: "Password is required",
//                 minLength: {
//                   value: 4,
//                   message: "Minimum length of password is 4",
//                 },
//                 maxLength: {
//                   value: 8,
//                   message: "Maximum length of password is 8",
//                 },
//               })}
//             />
//             <Alert variant="danger">{formErrors.password?.message}</Alert>
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Submit
//           </Button>

//           <Button onClick={() => setIsSignup(!isSignup)} variant="secondary">
//             Change to {isSignup ? "Login" : "Signup"}
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default Auth;




import React, { useState } from 'react'

function Login() {
    const[text,setText]=useState()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit=(e)=>{
    e.prevent.Default(); 
    
  setText("enter")}  
    const handleChange=(e)=>{
      console.log("on change")
   setText(e.target.value);


  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label for="exampleInputEmail1"  className="form-label">Email address</label>
      <input type="email" value={email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" value={password} onChange={handleChange}  className="form-control" id="exampleInputPassword1"/>
    </div>
    <button type="submit" className="btn btn-primary" >Submit</button>
  </form></div>
  )
}}
export default Login

// import React, { useState } from 'react';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email);
//     console.log(password)
//     // Handle form submission logic here
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
    
//   };
//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };
//   return (
//     <div className='container'>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//           <input type="email" value={email} onChange={handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//           <input type="password" value={password} onChange={handlePasswordChange} className="form-control" id="exampleInputPassword1"/>
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// }
// export default Login;
