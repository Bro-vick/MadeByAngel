import React from 'react'

const LoginInput = ({placeHolder, icon, inputState, inputStateFunc, type, isSignUp }) => {
  return (
    <div className={`flex items-center justify-center gap-4 bg-white backdrop-blur-md rounded-md w-full px-4 py-2`}>
        {icon}
        <input 
        type={type} 
        placeholder={placeHolder} 
        className="w-full h-full bg-transparent text-headingColor text-lg font-semibold border-none outline-none" 
        />
    </div>
  )
}

export default LoginInput