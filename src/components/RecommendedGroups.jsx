import React from 'react';

const RecommendedGroups = () => {
  const groups = [
    { id: 1, name: 'React Developers' },
    { id: 2, name: 'JavaScript Enthusiasts' },
    // Add more groups as needed
  ];

  return (
    <div className="recommended-groups">
      <h4>Recommended Groups</h4>
      <ul>
        {groups.map(group => (
          <li key={group.id}>{group.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedGroups;