import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../features/api/authApi";

const Register = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState({});

  const [register] = useRegisterMutation();

  const navigate = useNavigate();

  const registerHandler = async(e) => {
    e.preventDefault();
    const user = {name,email,password,password_confirmation};
    const {data} = await register(user);
    if(data?.success) navigate('/login');
    setError(data?.error?.data?.errors);
    console.log(data);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={registerHandler}
        className="w-96 flex flex-col items-center bg-gray-100 p-10 gap-10 rounded shadow"
      >
        <h1 className="text-blue-500 text-xl font-bold">Register </h1>
        <input
          type="text"
          placeholder="Enter your name "
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
          value={name}
          onChange={e=>setName(e.target.value)}
        />
        <div className="py-3">
        <input
          type="email"
          placeholder="Enter your emial address "
          className="w-72 outline-none border-b-2 bg-transparent"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />
        <small className="text-red-500 text-xs font-bold">{error?.email}</small>
        </div>
       
        <input
          type="password"
          placeholder="Enter your password"
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />
        <div className="py-3">
        <input
          type="password"
          placeholder="Password confirmation"
          className="w-72 outline-none border-b-2  bg-transparent"
          value={password_confirmation}
          onChange={e=>setPasswordConfirmation(e.target.value)}
        />
                <small className="text-red-500 text-xs font-semibold">{error?.password}</small>
        </div>
       

        <div className="flex flex-col">
          <small className="text-xs mb-10">
           Already have an account?
            <Link to='/login'>
            <span className="text-green-500 cursor-pointer">
              Login
            </span>
            </Link>
          </small>
          <button
            type="submit"
            className="bg-blue-400 px-10 py-2 text-white rounded cursor-pointer"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register