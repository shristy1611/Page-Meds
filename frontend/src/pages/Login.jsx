import React , { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
const Login = () => {

  const [showPassword,setShowPassword] = useState(false)

  const [data,setData] = useState({
    email : "",
    password : ""
  })

  const handleOnChange = (e) =>{
    const { name , value } = e.target

    setData((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()

    const dataResponse = await fetch(SummaryApi.signIn.url,{
      method : SummaryApi.signIn.method,
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(data)
    })

    const dataApi = await dataResponse.json()
    if(dataApi.success){
      console.log("dataApi",dataApi.message)
      toast.success(dataApi.message)
    }
    if(dataApi.error){
      toast.error(dataApi.message)
    }

  }

  console.log('Loin Data' , data)

  return (
    <section id='login'>
      <div className='mx-auto container p-4 py-10'>
        
        <div className='bg-pink-400 rounded-xl p-6 w-full max-w-sm mx-auto '>
            <div className='text-white mx-auto'>
              <FaUserCircle className=' mx-auto w-16 h-16'/>
            </div>

            <form className='flex flex-col gap-2 pt-6' onSubmit={handleSubmit}>

              <div className='grid'>
                <label  className='font-semibold text-white'>Email :</label>
                <div className='bg-white rounded-md w-full h-9 px-2'>
                  <input type='email' 
                  placeholder='enter email' 
                  name='email'
                  value={data.value}
                  onChange={handleOnChange}
                  className='w-full h-9  bg-transparent  outline-none border-none'/>
                </div>
              </div>

              <div >
                <label className='font-semibold text-white'>Password :</label>
                <div className='relative bg-white rounded-md w-full h-9 flex px-2'>
                  <input 
                  type={showPassword ? "text" : "password"}  
                  placeholder='enter password' 
                  value={data.password}
                  name='password' 
                  onChange={handleOnChange}
                  className='w-full h-9  bg-transparent outline-none border-none'/>
                  
                  <div className='cursor-pointer ' onClick={()=>setShowPassword((preve)=>!preve)}>
                    <span >
                      {
                        showPassword ? (
                          <FaEyeSlash className='absolute top-2 right-2'/>
                                      )
                          :
                          (
                            <FaEye className='absolute top-2 right-2'/>
                                      )
                      }
                      
                    </span>
                  </div>

                </div>

                <Link to={'/forgot-password'} className='block text-white w-fit ml-auto hover:underline '>
                  Forgot password ?
                </Link>
              </div>

              <div className='flex justify-center mt-4'>
                <button className='text-pink-400 font-semibold hover:scale-110 transition-all hover:shadow-lg text-lg bg-white rounded-full w-32 h-9'>
                  Login
                </button>
              </div>
            </form>

            <p className='mb-5 text-center text-white '>
              Don't have account ?
              <Link to={"/sign-up"} className='underline'>
                Sign up
              </Link>
          </p>
        </div>
      </div>

    </section>
  )
}

export default Login
