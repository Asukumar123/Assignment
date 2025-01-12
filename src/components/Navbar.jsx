import React, { useState } from 'react';
import PopupModal from './PopupModal';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleJoinGroupClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container-fluid px-2 py-2 px-md-5">
        <a className="navbar-brand" href="/">
          <img
            alt="ATG World logo with a globe and network nodes"
            className="logo"
            height="30"
            src="../whole.png"
            width="140"
          />
        </a>
        <div className="d-none d-lg-flex position-relative flex-grow-1 mx-2 search">
          <input
            className="form-control rounded-pill bg-light custom-input"
            placeholder=" 🔎   for your favorite groups in ATG"
            type="search"
            style={{ width: '100%' }}
          />
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-link text-dark text-decoration-none d-none d-lg-block">
            <PopupModal />
          </button>
          <button className="btn btn-primary d-lg-none" onClick={handleJoinGroupClick}>
            Join Group
          </button>
        </div>
      </div>
      {showLoginModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', bottom: 0, left: 0, right: 0, padding: 20 }}>
          <div className="modal-dialog modal-lg" role="document" style={{ margin: 'auto' }}>
            <div className="modal-content">
              <LoginModal />
              <button className="btn btn-link text-dark text-decoration-none" onClick={handleCloseModal} style={{ position: 'absolute', top: 10, right: 10 }}>
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;