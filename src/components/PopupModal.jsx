import React, { useState } from "react";
import CreateAccountModal from "./CreateAccountModal";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="btn" onClick={toggleModal}>
       Create Account it's free
      </button>

      {isOpen && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header" style={{background:'lightgreen'}}>
                <h4 className="modal-title"style={{color:'green',fontSize:'10px',justifyContent:"center"}}>Let's learn, share &amp; inspire each other with our passion for computer engineering. Sign up now 🤘</h4>
                <button type="button" className="btn-close" onClick={toggleModal}></button>
              </div>
              <div className="modal-body d-flex">
                <div className="w-50 pe-4">
                  <h2 style={{textAlign:'left',fontWeight:'bolder'}}>Sign In</h2>

                  <form>
                    <div className="mb-3">
                      <input className="form-control" placeholder="Email" type="email" />
                    </div>
                    <div className="input-group mb-3">
                      <input className="form-control" placeholder="Password" type="password" />
                      <span className="input-group-text">
                        <i className="fas fa-eye"></i>
                      </span>
                    </div>
                    <button className="btn btn-primary w-100" type="submit">
                      Sign In
                    </button>
                    <button className="btn btn-outline-primary w-100 mt-2" type="button">
                      <i className="fab fa-facebook-f"></i> Sign in with Facebook
                    </button>
                    <button className="btn btn-outline-primary w-100 mt-2" type="button">
                      <i className="fab fa-google"></i> Sign in with Google
                    </button>
                  </form>
                  <div className="forgot-password text-center mt-3">
                    <a href="#"style={{textDecoration:"none",color:'black'}}>Forgot Password?</a>
                  </div>
                </div>
                <div className="w-50">
                  <div className="text-end mb-3">
                   <a href="#"><CreateAccountModal/></a>
                  </div>
                  <img
                    src="../Group 3.png"
                    alt="Illustration of people using mobile devices"
                    className="img-fluid"
                  />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupModal;
