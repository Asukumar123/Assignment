import React, { useState } from "react";

const CreateAccountModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="btn" onClick={toggleModal}>
      Don't have account yet ?Create Account
      </button>

      {isOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Account</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                ></button>
              </div>
              <div className="modal-body d-flex">
                <div className="w-50 pe-4">
                  <h2>Create Account</h2>
                  <form>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <input
                          className="form-control"
                          placeholder="First Name"
                          type="text"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          className="form-control"
                          placeholder="Last Name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        placeholder="Email"
                        type="email"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <input
                        className="form-control"
                        placeholder="Password"
                        type="password"
                      />
                      <span className="input-group-text">
                        <i className="fas fa-eye"></i>
                      </span>
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        placeholder="Confirm Password"
                        type="password"
                      />
                    </div>
                    <button
                      className="btn btn-primary w-100"
                      type="submit"
                    >
                      Create Account
                    </button>
                    <button
                      className="btn btn-outline-secondary w-100 mt-2"
                      type="button"
                    >
                      <i className="fab fa-facebook-f"></i> Sign up with Facebook
                    </button>
                    <button
                      className="btn btn-outline-secondary w-100 mt-2"
                      type="button"
                    >
                      <i className="fab fa-google"></i> Sign up with Google
                    </button>
                  </form>
                  <p className="form-text text-center mt-3">
                    By signing up, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
                  </p>
                </div>
                <div className="w-50 text-center">
                  <img
                    src="../Group 3.png"
                    alt="Illustration of people interacting with mobile devices"
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

export default CreateAccountModal;
