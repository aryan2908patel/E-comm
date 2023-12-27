import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Link from "next/link";

interface Props {}

const Login = (props: Props) => {
  return (

    <div>

      <div className="bg-green-300 w-full h-40 mb-8 py-10">
        <div className="font-san ml-80">
          <a href="#">Home</a>
          <p></p>
        </div>
        <div className="ml-80 mt-4 text-3xl">Account</div>
      </div>

      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mb-8">
        
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">Glossy</span>Labs
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">
                Sign in to Account
              </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-gray-200 border-2 rounded-full p-3 mx-1"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="border-gray-200 border-2 rounded-full p-3 mx-1"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="border-gray-200 border-2 rounded-full p-3 mx-1"
                >
                  <FaGoogle />
                </a>
              </div>
              {/* social log*/}
              <p className="text-gray-400 my-3">Or Use Your Email Account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1" />
                    Remember me
                  </label>
                  <a href="#" className="text-xs">
                    Forgot Password
                  </a>
                </div>
                <div className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white">
                  <Link href="/login"> Sign In </Link>
                </div>
              </div>
            </div>
          </div>
          {/*sign in section */}

          <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello Beauty</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us.
            </p>
            <div className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">
              <Link href="/register"> Sign Up </Link>
            </div>
          </div>
          {/*sign up section */}
        </div>
      </div>
    </div>
  );
};

export default Login;
