import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../Firebase'

function SignUp() {
  const navigate = useNavigate()
  const [values, setValues] = useState({ name: "", email: "", password: "" })
  const [errMsg, setErrMsg] = useState("")

  const submitHandle = (e) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.password) {
      setErrMsg("All fields must be Filled")
      return
    }
    setErrMsg("")
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        const user = res.user
        console.log(user)
        updateProfile(user, { displayName: values.name })
        navigate('/login')
      }).catch((err) => {
        if (err.code === 'auth/weak-password') {
          setErrMsg("password must be more than 6 characters")
        }
      })

   setTimeout(() => {
      setErrMsg("")
    }, 4000)
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-center bg-blue-400 w-[100%] h-[100%]">
        <div className="bg-white p-16 rounded shadow-2xl">
          <h2 className="text-3xl font-bold mb-5 text-gray-800">Create Your Account</h2>
          <div>
            <label className="block my-1 font-bold text-red-500 text-sm">{errMsg}</label>
          </div>
          <form className="space-5">
            <div>
              <label className="block mb-1 font-bold text-gray-500">Name</label>
              <input type="text" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" onChange={(e) =>
                setValues((prev) => ({ ...prev, name: e.target.value }))
              } />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">Email</label>
              <input type="email" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" onChange={(e) =>
                setValues((prev) => ({ ...prev, email: e.target.value }))} />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">Password</label>
              <input type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" onChange={(e) => {
                setValues((prev) => ({ ...prev, password: e.target.value }))
                console.log(values)
              }
              } />
            </div>
            <div>
              <label className="block my-1 font-bold text-blue-500 text-xs">Already have an Account <Link to="/login" className=' text-red-500'>Login</Link></label>
            </div>
            <button className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300 mt-3" onClick={submitHandle}>Sign Up</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default SignUp
