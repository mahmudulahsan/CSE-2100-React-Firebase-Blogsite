import React from 'react'
import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Login({setIsAuth }) {

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem( "isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className='container text-center m-5'>
        <h3>Sign in</h3>
        <button onClick={signInWithGoogle} className='btn btn-primary'>Sign in with google</button>
    </div>
  )
}

export default Login