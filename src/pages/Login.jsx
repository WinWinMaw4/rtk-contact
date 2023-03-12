import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/api/authApi";
import { addUser } from "../features/services/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const loginHandler = async(e) => {
    e.preventDefault();
    const user = {email,password};
  const {data} = await login(user);
  dispatch(addUser({ user: data?.user, token: data?.token }));

    if(data?.success) navigate('/');

    // setError(data?.error?.data?.errors);
    // console.log(data);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form action="" onSubmit={loginHandler} className="w-96 flex flex-col items-center bg-gray-100 p-10 gap-10 rounded shadow">
        <h1 className='text-blue-500 text-xl font-bold'>Login Account</h1>
       <div className="py-3">
       <input
          type="email"
          placeholder="Enter your emial address "
          className="w-72 outline-none border-b-2 bg-transparent"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />
                <small className="text-xs text-red-500 font-bold">{error?.email}</small>
       </div>
         <div className="py-3">
         <input
          type="password"
          placeholder="Enter your password"
          className="w-72 outline-none border-b-2 bg-transparent"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />
                <small className="text-xs text-red-500 font-bold">{error?.password}</small>

         </div>
     <div>
     <small className="text-xs"> 
            Don't have an account? 
            <Link to='/register'>
            <span className='text-green-500 cursor-pointer'>register account</span>
            </Link>
        </small>
        <button type='submit' className='bg-blue-400 px-10 py-2 text-white rounded cursor-pointer'>Login</button>
     </div>
      </form>
    </div>
  );
}

export default Login