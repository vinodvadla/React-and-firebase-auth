import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../Firebase'

function Login() {
    const navigate=useNavigate()
    const [details, setDetails] = useState({
        email: "",
        password: ""
    })

    const [errMsg, setErrMsg] = useState("")

    const submitHandle = (e) => {
        e.preventDefault();
        if (!details.email || !details.password) {
            setErrMsg("All fields must be Filled")
        }

        signInWithEmailAndPassword(auth,details.email,details.password)
        .then(async()=>{
            navigate('/')
        }).catch((err)=>{
           setErrMsg("Invalid Email or Password")
        })

     setTimeout(() => {
            setErrMsg("")
        }, 6000)
    }
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="flex items-center justify-center bg-blue-400 w-[100%] h-[100%]">
                <div className="bg-white p-16 rounded shadow-2xl">
                    <h2 className="text-3xl font-bold mb-5 text-gray-800">Login</h2>
                    <div>
                        <label className="block my-1 font-bold text-red-500 text-sm">{errMsg}</label>
                    </div>
                    <form className="space-5">
                        <div>
                            <label className="block mb-1 font-bold text-gray-500">Email</label>
                            <input type="email" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" onChange={(e) =>
                                setDetails((prev) => ({ ...prev, email: e.target.value }))
                            } />
                        </div>
                        <div>
                            <label className="block mb-1 font-bold text-gray-500">Password</label>
                            <input type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" onChange={(e) =>
                                setDetails((prev) => ({ ...prev, password: e.target.value }))} />
                        </div>
                        <div>
                            <label className="block my-1 font-bold text-gray-500 text-sm">Don't have an Account <Link to="/signup" className=' text-blue-500'>Sign up</Link></label>
                        </div>
                        <button className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300 mt-3" onClick={submitHandle}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
