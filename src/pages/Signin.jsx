import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLogin } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { doc, serverTimestamp, setDoc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Signin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function Authentication() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const userCredentials = await signInWithPopup(auth, provider);
      const user = userCredentials.user;
      console.log(user);
      navigate("/");

      const docSnap = await getDoc(doc(db, "users", user.uid));

      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          name: user.displayName,
          timestamp: serverTimestamp(),
        });
      }

      toast.success("Logged in successfully");
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      toast.success("Login Successful");
      navigate("/");
    } catch (error) {
      toast.error("Invalid Credentials");
    }
  }

  return (
    <div className="w-[40%] m-auto my-32">
      <div className="flex items-center justify-between bg-black text-white font-bold p-3 text-2xl">
        <div className="flex items-center space-x-2">
          <AiOutlineLogin />
          <h1>Sign In</h1>
        </div>
        <RxCross2 />
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <div className="flex justify-between">
            <p className="my-4 border-b border-gray-300 pb-3 text-lg">
              Registered Customers
            </p>
            <p className="my-4 border-b border-gray-300 pb-3 text-lg">
              Or Sign In With
            </p>
          </div>

          <div className="flex justify-between">
            <p className="text-lg">
              Email<span className="text-red-700">*</span>
            </p>
            <button
              onClick={Authentication}
              className=" p-2 rounded flex items-center"
            >
              <FcGoogle className="cursor-pointer h-6 w-6 mr-3 text-lg" />
              SIGN IN WITH GOOGLE
            </button>
          </div>

          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-100 border-2 w-full my-2 py-3"
          />

          <div>
            <p className="text-lg">
              Password<span className="text-red-700">*</span>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              className="border-gray-100 border-2 w-full my-2 py-3"
            />
            {showPassword ? (
              <AiFillEye
                className=" cursor-pointer absolute right-4 top-[18px] text-[18px]"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <AiFillEyeInvisible
                className="cursor-pointer absolute right-4 top-[18px] text-[18px]"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          <p className="text-lg">
            Please type the letters and numbers below{" "}
            <span className="text-red-700">*</span>
          </p>
          <input
            type="text"
            className="border-gray-100 w-full border-2 my-2 py-3"
          />

          <div className=" flex w-full h-10 my-2 ">
            <div className="w-[50%]">IMAGE</div>
            <button className=" bg-blue-200 w-[50%] font-semibold rounded">
              RELOAD CAPTCHA
            </button>
          </div>
          <p className="text-gray-500 my-2">
            {" "}
            * Attention:Captcha is case sensitive.
          </p>
        </form>

        <div className="space-x-6">
          <button
            className="text-white bg-black w-36 py-2 font-semibold rounded text-lg"
            onClick={onSubmit}
          >
            Login
          </button>
          <Link to={"/Forgotpassword"}>
            <button className=" bg-blue-200 w-[50%] font-semibold rounded py-2 text-lg">
              Forgot Your Password?
            </button>
          </Link>
        </div>

        <div className="my-5">
          <Link
            to={"/signup"}
            className="border bg-blue-200 rounded font-semibold p-2 text-lg"
          >
            Create New Account?
          </Link>
        </div>
      </div>

      <div></div>
    </div>
  );
}
