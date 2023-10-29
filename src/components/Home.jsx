import { signOut } from "firebase/auth"
import { auth } from "../Firebase"
import { useNavigate } from 'react-router-dom'
import Nav from "./Home Components/Nav"
import Header from "./Home Components/Header"
import Stories from "./Home Components/Stories"
import Profiles from "./Home Components/Profiles"


function Home() {
  const navigate = useNavigate()
  const logoutUser = () => {
    signOut(auth).then(() => {
      navigate('/signup')
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <>
      <div className=" bg-gray-200 w-screen h-screen">
        <Header />
        <div className="w-full h-[80%] flex items-center justify-evenly px-10">
          <Nav />
          <Stories />
          <Profiles />
        </div>
      </div>
    </>
  )
}

export default Home
