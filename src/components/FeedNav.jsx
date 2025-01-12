import React from 'react';

const FeedNav = () => {
  return (
    <div className="feed-nav mb-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <ul className="nav">
            <li className="nav -item">
              <a className="nav-link active" href="#">All Posts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">My Groups</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Trending</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeedNav;