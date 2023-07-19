import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { useCreateContactMutation } from '../features/api/contactApi';

const Modal = () => {
    const [show,setShow] = useState(true);  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const token = Cookies.get("token");
    const [createContact] = useCreateContactMutation();

    const createContactHandler = async(e) => {
      e.preventDefault();
      const contact = {name,email,phone,address}
      const data =await createContact({contact , token});
      if(data?.data?.success) setShow(true);

      console.log(data);
    }
  return (
    <>
  {/* Modal toggle */}
  <button
    data-modal-target="authentication-modal"
    data-modal-toggle="authentication-modal"
    className="block  bg-yellow-500 text-white hover:bg-yellow-500/75 focus:ring-2 focus:outline-none focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 my-5 text-center"
    type="button"
    onClick={() => setShow(false)}
  >
    Create Contact
  </button>
  {/* Main modal */}
  <div
    id="authentication-modal"
    tabIndex={-1}
    aria-hidden="true"
    className= {`fixed top-0 left-0 right-0 z-50 ${show && "hidden"} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full`}
  >
    <div className="relative w-full h-full max-w-md md:h-auto">
      {/* Modal content */}
      <div className="relative  rounded-lg shadow bg-gray-800 text-gray-400">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="authentication-modal"
          onClick={() => setShow(true)}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Create New Contact
          </h3>
          <form onSubmit={createContactHandler} className="space-y-6" action="#">
        {/* your name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-mediumtext-gray-500"
              >
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-600 border border-gray-500 placeholder-gray-400 text-white text-sm rounded-lg focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                placeholder="John Doe"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required=""
              />
            </div>
        {/* your email */}
            <div>
            <label
                htmlFor="email"
                className="block mb-2 text-sm font-mediumtext-gray-500"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-600 border border-gray-500 placeholder-gray-400 text-white text-sm rounded-lg focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required=""
              />
            </div>
        {/* your phone */}
            <div>
            <label
                htmlFor="phone"
                className="block mb-2 text-sm font-mediumtext-gray-500"
              >
                Your phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="bg-gray-600 border border-gray-500 placeholder-gray-400 text-white text-sm rounded-lg focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                placeholder="09xxxxxxxxx"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                required=""
              />
            </div>
        {/* your address */}
            <div>
            <label
                htmlFor="address"
                className="block mb-2 text-sm font-mediumtext-gray-500"
              >
                Your address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="bg-gray-600 border border-gray-500 placeholder-gray-400 text-white text-sm rounded-lg focus:ring-gray-500 focus:outline-none focus:border-gray-500  block w-full p-2.5 "
                placeholder="Yangon"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                required=""
              />
            </div>
        
            <button
              type="submit"
              className="w-full text-white bg-yellow-500 hover:bg-yellow-500/60  focus:ring-2 focus:outline-none focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
             Create
            </button>
          
          </form>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Modal