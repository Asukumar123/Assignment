import React, { useState, useEffect } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import PopupModal from "./PopupModal";
import './App.css';



const App = () => {
  return (
    
    <div className="app">
      <Navbar />
      <Feed />
   </div>
    
   
  );
};




const CreateAccountModal = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="modal-content shadow">
        <div className="modal-header">
          <h5 className="modal-title">Create Account</h5>
          <button type="button" className="btn-close" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="row">
              <div className="col form-group">
                <input type="text" className="form-control" placeholder="First Name"/>
              </div>
              <div className="col form-group">
                <input type="text" className="form-control" placeholder="Last Name"/>
              </div>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Email"/>
            </div>
            <div className="form-group position-relative">
              <input type="password" className="form-control" placeholder="Password"/>
              <i className="fas fa-eye position-absolute" style={{ right: 10, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}></i>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Confirm Password"/>
            </div>
            <button type="submit" className="btn btn-primary w-100">Create Account</button>
          </form>
          <div className="text-center mt-3">
            <a href="#" className="text-decoration-none">or, Sign In</a>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-outline-secondary">
              <i className="fab fa-facebook-f"></i> Sign up with Facebook
            </button>
            <button className="btn btn-outline-secondary">
              <i className="fab fa-google"></i> Sign up with Google
            </button>
          </div>
          <div className="text-center text-muted mt-3">
            By signing up, you agree to our Terms & conditions, Privacy policy
          </div>
        </div>
      </div>
    </div>
  );
};

const LoginModal = () => {
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);

  const handleCreateAccountClick = () => {
    setShowLoginModal(false);
   
    setShowCreateAccountModal(true);
  };

  const handleCloseModal = () => {
    setShowCreateAccountModal(false);
    ``
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <img alt="Back arrow icon" src="https://placehold.co/24x24"/>
        <span className="close-btn">
          ×
        </span>
      </div>
      <div className="text-center">
        <h2>
          Welcome back!
        </h2>
      </div>
      <form className="login-form">
        <input className="form-control" placeholder="Email" type="email"/>
        <div className="input-group">
          <input className="form-control" placeholder="Password" type="password"/>
          <span className="input-group-text">
            <i className="fas fa-eye">
            </i>
          </span>
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Sign In
        </button>
        <div className="sign-in-create-account">
          <a className="text-decoration-none" href="#" onClick={handleCreateAccountClick}>
            or, Create Account
          </a>
        </div>
        <div className="social-login">
          <button className="btn btn-outline-primary w-100" type="button">
            <i className="fab fa-facebook-f">
            </i>
            Sign in with Facebook
          </button>
          <button className="btn btn-outline-danger w-100" type="button">
            <i className="fab fa-google">
            </i>
            Sign in with Google
          </button>
        </div>
        <div className="forgot-password">
          <a className="text-decoration-none" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
      {showCreateAccountModal && (
        <CreateAccountModal />
      )}
    </div>
  );
};

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

const Feed = () => {
  return (
    <div className="feed">
      <Header />
      <FeedNav />
      <PostList />
    </div>
  );
};

const Header = () => {
  return (
    <header className="hero position-relative mb-4 header">
      <img
  alt="Banner image showing a group of computer engineers working on a project"
  className="w-100 img-fluid hero-image"
  src="../Rectangle 2-1.png"
/>

      <div className="hero-content position-absolute bottom-0 text-white p-5 ms-5">
        <h1>Computer Engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </header>
  );
};

const FeedNav = () => {
  return (
    <div className="feed-nav mb-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                All Posts
              </a>
            </li>
            <li className="nav-item d-none d-md-block">
              <a className="nav-link" href="#">
                Article
              </a>
            </li>
            <li className="nav-item d-none d-md-block">
              <a className="nav-link" href="#">
                Event
              </a>
            </li>
            <li className="nav-item d-none d-md-block">
              <a className="nav-link" href="#">
                Education
              </a>
            </li>
            <li className="nav-item d-none d-md-block">
              <a className="nav-link" href="#">
                Job
              </a>
            </li>
          </ul>
          <div className="d-flex gap-2">
            <div className="dropdown d-md-none">
              <button
                aria-expanded="false"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                id="dropdownMenuButton"
                type="button"
              >
                Filter
              </button>
              <ul aria-labelledby="dropdownMenuButton" className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Article
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Event
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Education
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Job </a>
                </li>
              </ul>
            </div>
            <button className="btn btn-light d-none d-md-block">Write a Post</button>
            <button className="btn btn-primary"> <i class="fa-solid fa-user"></i>Join Group</button>
          </div>
        </div>
        <hr className="feedNav" />
      </div>
    </div>
  );
};

const PostList = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-12 col-lg-8">
        <CustomCard
  badgeText="Meetup"
  imageSrc="../Rectangle 5-2.png"
   height="400"
  title="What if famous brands had regular fonts? Meet RegulaBrands!"
  description ="I've worked in UX for the better part of a decade. From now on, I plan to rel..."

 
  profileImage="../Rectangle 3-3.png"
  profileName="Ronal Jones"
  views="1.4k"
/>
<CustomCard
  badgeText="Meetup"
  imageSrc="../Rectangle 5.png"
   height="800"
  title="Tax Benefits for Investment under National Pension Scheme launched by Government"
  description ="I've worked in UX for the better part of a decade. From now on, I plan to rel...."

 
  profileImage="../Rectangle 3-2.png"
  profileName="Ronal Jones"
  views="1.4k"
/>
          
          <CustomCard
  badgeText="Meetup"
  imageSrc="https://storage.googleapis.com/a1aa/image/Gy6nPf9aAI0CTydx1Pe0dYWfFfKDZEilrv0bxDURus82c5NQB.jpg"
   height="200"
  title="Finance & Investment Elite Social Mixer @Lujiazui"
  date="Fri, 12 Oct, 2018"
  location="Ahmedabad, India"
  websiteLink="#"
  profileImage="../Rectangle 3-1.png"
  profileName="Ronal Jones"
  views="1.4k"
/>
 

<CustomCard
  badgeText="Meetup"
 
   height="400"
  title="Finance & Investment Elite Social Mixer @Lujiazui"
  date="Fri, 12 Oct, 2018"
  location="Ahmedabad, India"
  
  profileImage="../Rectangle 3-4.png"
  profileName="Ronal Jones"
  views="1.4k"
/>

         
        </div>
        <div className="col-12 col-lg-4">
     
      <RecommendedGroups />
    </div>
       
      </div>
    </div>
  );
};



const CustomCard = ({ 
  badgeText = "Default Badge", 
  imageSrc = null, 
  height, 
  title = "Default Title", 
  date = null, 
  location = null, 
  description = null, // New optional prop
  websiteLink = null, 
  profileImage = "https://via.placeholder.com/40", 
  profileName = "Anonymous", 
  views = "0"
}) => {
  return (
    <div className="card mb-3">
      {/* Conditional rendering for the image */}
      {imageSrc && (
    <img
      alt="Event visual"
      className="card-img-top img-fluid"
      src={imageSrc}
    />
  )}
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <span className="badge bg-light text-dark">{badgeText}</span>
          <div className="dropdown">
            <button
              aria-expanded="false"
              className="btn btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
              type="button"
            >
              <i className="fas fa-ellipsis-h"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Edit
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Option 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h5 className="card-title mt-2">{title}</h5>
        <p className="card-text">
          {/* Conditionally render date and location */}
          {date && (
            <>
              <i className="far fa-calendar-alt"></i> {date}{" "}
            </>
          )}
          {location && (
            <>
              <i className="fas fa-map-marker-alt"></i> {location}
            </>
          )}
        </p>
        {/* New optional paragraph for description */}
        {description && (
          <p className="card-text">
            {description}
          </p>
        )}
        {/* Conditional rendering for the website link */}
        {websiteLink && (
          <a className="btn btn-outline-danger btn-md" href={websiteLink}>
            Visit Website
          </a>
        )}
        <div className="d-flex justify-content-between mt-3">
          <div className="d-flex align-items-center">
            <img
              alt={`${profileName}'s profile`}
              className="rounded-circle me-2"
              height="40"
              src={profileImage}
              width="40"
            />
            <span>{profileName}</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-3">
              <i className="far fa-eye"></i> {views} views
            </span>
            <button className="btn btn-light">
              <i className="fas fa-share"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};







const RecommendedGroups = () => {
  return (
    <div className="container mt-4">
      <div className="location-input">
        <i className="fas fa-map-marker-alt"></i>
        <input placeholder="Enter your location" type="text" />
        <i className="fas fa-times"></i>
      </div>
      <div className="info-text">
        <i className="fas fa-info-circle"></i>
        Your location will help us serve better and extend a personalised
        experience.
      </div>
      <div className="recommended-groups">
        <i className="fas fa-thumbs-up"></i>
        RECOMMENDED GROUPS
      </div>
      <div className="group-item">
        <img alt="Image representing Leisure group" src="Rectangle 6.png" />
        <span>Leisure</span>
        <button className="btn btn-outline-secondary btn-sm">Follow</button>
      </div>
      <div className="group-item">
        <img alt="Image representing Activism group" src="Rectangle 6-1.png" />
        <span>Activism</span>
        <button className="btn btn-outline-secondary btn-sm">Follow</button>
      </div>
      <div className="group-item">
        <img alt="Image representing MBA group" src="Rectangle 6-2.png" />
        <span>MBA</span>
        <button className="btn btn-outline-secondary btn-sm">Follow</button>
      </div>
      <div className="group-item">
        <img alt="Image representing Philosophy group" src="Rectangle 6-3.png" />
        <span>Philosophy</span>
        <button className="btn btn-outline-secondary btn-sm">Follow</button>
      </div>
      <a className="see-more" href="#">
        See More...
      </a>
    </div>
  );
};



export default App;