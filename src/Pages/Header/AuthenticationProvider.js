import React from 'react';
import Google from "../../Asset/Logo/google-logo-9808.png"
import Facebook from "../../Asset/Logo/Facebook-f_Logo-Blue-Logo.wine.svg"
import "../../Styles/PostsStyles/AuthenticationProvider.css"
const AuthenticationProvider = () => {
  return (
    <div>
        <button className="Google-Provider">
          <div className='d-flex align-items-center justify-content-center'>
            <img src={Google} alt="" width={25} height={25} />
            <span className="ms-4">Sign up with Google</span>
          </div>
        </button>
        <button className="Google-Provider mt-3">
          <div className='d-flex align-items-center justify-content-center'>
            <img src={Facebook} alt="" width={25} height={25} />
            <span className="ms-4">Sign up with Facebook</span>
          </div>
        </button>
    </div>
  );
};

export default AuthenticationProvider;