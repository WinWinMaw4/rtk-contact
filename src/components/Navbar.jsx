import {AiFillContacts} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../features/api/authApi";
import { removeUser } from "../features/services/AuthSlice";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user)
  const token = useSelector((state) => state.auth.token)
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler  = async()=>{
    const data = await logout(token);
    dispatch(removeUser());
    navigate('/login');
  }
  return (
    <>
      <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center justify-center flex-col ">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-10" alt="Flowbite Logo" /> */}
            <AiFillContacts className="text-4xl text-yellow-500 " />

            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              REC
            </span>
          </a>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-multi-level"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <div className="text-white">
                  <p>{user?.name}</p>
                  <small>{user?.email}</small>
                </div>
              </li>
              <li>
                <button
                  onClick={logoutHandler}
                  className="bg-red-500 px-5 py-3 rounded text-white"
                >
                  Logout
                </button>
              </li>
           
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar