import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import imageTobase64 from '../../Helpers/imageTobase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const SignUp = () => {

  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  const [pic , setPic] = useState(false)
  const [data,setData] = useState({
    email : "",
    password : "",
    name :"",
    confirmPassword : "",
    profilePic : ""
  })
  const navigate = useNavigate()

  const handleOnChange = (e) =>{
    const { name , value } = e.target

    setData((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
  }

  const handleProfilePic =async(e)=>{
      const file = e.target.files[0]

      const imagePic =await imageTobase64(file)
      
      setData((preve)=>{
        return{
            ...preve,
            profilePic : imagePic
        }
      })
      
      setPic (true)
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(data.password === data.confirmPassword){
    
      const dataResponse = await fetch(SummaryApi.signUP.url,{
          method : SummaryApi.signUP.method,
          headers : {
              "content-type" : "application/json"
          },
          body : JSON.stringify(data)
        })
        const dataApi = await dataResponse.json()

        if(dataApi.success){
          toast.success(dataApi.message)
          navigate("/login")
        }
        if(dataApi.error){
          toast.error(dataApi.message)
        }

        console.log("data",dataApi)     
    } else{
      console.log("please check password and confirm password")
    }

  }


  return (
    <section id='SignUp'>
      <div className='mx-auto container p-4 mb-4'>
        
        <div className='bg-pink-400 rounded-xl p-6 w-full max-w-sm mx-auto '>
            <div className='flex flex-col text-white mx-auto justify-center items-center'>
              

              <form>
                <label>
                  <div className='cursor-pointer'>
                     <img  src={data.profilePic || 'signin.gif'} className=' mx-auto w-16 h-16 rounded-full'/>  
                  </div>

                  {!pic ?
                  <div className='text-xs cursor-pointer'>
                     Upload Photo
                  </div>
                  :
                  <div className='text-xs'>
                    Profile Pic Uploaded !
                  </div>
                  }
                  <input type='file' className='hidden' onChange={handleProfilePic}/>
                </label>
              </form>
            </div>

            <form className='flex flex-col gap-2 pt-6' onSubmit={handleSubmit}>

              <div className='grid'>
                <label  className='font-semibold text-white'>Name :</label>
                <div className='bg-white rounded-md w-full h-9 px-2'>
                  <input type='name' 
                  placeholder='enter your name' 
                  name='name'
                  value={data.value}
                  onChange={handleOnChange}
                  required
                  className='w-full h-9  bg-transparent  outline-none border-none'/>
                </div>
              </div>

              <div className='grid'>
                <label  className='font-semibold text-white'>Email :</label>
                <div className='bg-white rounded-md w-full h-9 px-2'>
                  <input type='email' 
                  placeholder='enter email' 
                  name='email'
                  value={data.value}
                  onChange={handleOnChange}
                  required
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
                  required
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
              </div>

              <div >
                <label className='font-semibold text-white'>Confirm Password :</label>
                <div className='relative bg-white rounded-md w-full h-9 flex px-2'>
                  <input 
                  type={showConfirmPassword ? "text" : "password"}  
                  placeholder='enter confirm password' 
                  value={data.confirmPassword}
                  name='confirmPassword' 
                  onChange={handleOnChange}
                  className='w-full h-9  bg-transparent outline-none border-none'/>
                  
                  <div className='cursor-pointer ' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
                    <span >
                      {
                        showConfirmPassword ? (
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
              </div>

              <div className='flex justify-center mt-4'>
                <button className='text-pink-400 font-semibold hover:scale-110 transition-all hover:shadow-lg text-lg bg-white rounded-full w-32 h-9'>
                  SignUp
                </button>
              </div>
            </form>

            <p className='mb-5 text-center text-white '>
              Already have account ?
              <Link to={"/Login"} className='underline'>
                Log In 
              </Link>
          </p>
        </div>
      </div>

    </section>
  )
}

export default SignUp
