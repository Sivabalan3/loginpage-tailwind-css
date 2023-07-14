//HERO-ICONS
import { ChevronDoubleDownIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useState } from "react";
//BACKGROUND IMAGE
import loginimage from '../myimgs/back login.jpg';
function Loginform() {
    //HIDE AND SHOW [PASSWORD]
    const [Hide, setHide] = useState(false);
    const handleShow = () => {
        setHide(!Hide);
    }

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900 w-full h-full">
                <img src={loginimage} alt="backlogin" className=" w-full h-full absolute object-cover" />
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
               
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 relative top-5 md:top-0 md:bottom-14">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                Admin Login Page
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <div className="inline-block justify-end relative top-8 float-right right-3">

                                        {
                                            Hide ? <EyeIcon className="w-5 h-5 text-green-500 hover:pulse-ping" onClick={handleShow} /> : <EyeSlashIcon className="w-5 h-5 text-red-500" onClick={handleShow} />
                                        }
                                    </div>
                                    <input type={Hide ? "text" : 'password'} name="password" id="password" placeholder="Password" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />

                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="/h" className="text-sm font-medium text-primary-600 hover:underline dark:text-white">Forgot password?</a>
                                </div>

                                <a href="#_" className="w-full relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                        <ChevronDoubleDownIcon className="w-8 h-8" />
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
                                    <span className="relative invisible">Button Text</span>
                                </a>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="/h" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}
export default Loginform;