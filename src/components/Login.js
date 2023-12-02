import { useState } from "react";
import Header from "./Header";

const Login = () => {

	const [isSignInForm, setIsSignInForm] = useState(true);

	const toggleSignInform = () => {
		setIsSignInForm(!isSignInForm)
	}

  return (
    <div>
			<div className="login-top-section">
				<Header/>
				<form className="bg-black w-1/4 mx-auto absolute text-white p-12 bg-opacity-80">
					<h1 className="font-bold font-3xl">{isSignInForm?"Sign In" : "Sign Up"}</h1>
					{!isSignInForm && <input
					 type="text" placeholder="Name" className="p-2 my-4 width-100 bg-gray-700" 
					/>}
					<br/>
					<input type="text" placeholder="Email Address" className="p-2 my-4 width-100 bg-gray-700" /> <br/>
					<input type="password" placeholder="Password" className="p-2 my-4 width-100 bg-gray-700" /> <br/>
					<button className="p-2 my-4 bg-red-700 width-100 rounded-lg">{isSignInForm?"Sign In" : "Sign Up"}</button>
					<p>{isSignInForm ? "Sign Up NowNew to Netflix?" : "Already registered?"} <span className="cursor-pointer" onClick={toggleSignInform}>{isSignInForm ? "Sign Up Now" : "Sign In Now"} </span></p>
				</form>
			</div>
    </div>
  )
};

export default Login;