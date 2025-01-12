import React from 'react';

import FeedNav from './FeedNav';
import PostList from './PostList';

const Feed = () => {
  return (
    <div className="feed">
      <Header />
      <FeedNav />
      <PostList />
    </div>
  );
};

export default Feed;