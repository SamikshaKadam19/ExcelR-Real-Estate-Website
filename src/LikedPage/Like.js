// Like.js
import React from 'react';
import '../LikedPage/Like.css';

const Like = ({ likedItems }) => {
  return (
    <div>
      <h2>Liked Items</h2>
      <div className="liked-list">
        {likedItems && likedItems.length > 0 ? (
          likedItems.map((item) => (
            <div key={item.id} className="liked-item">
              <img src={item.image} alt={`Liked ${item.type}`} />
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Type: {item.type}</p>
            </div>
          ))
        ) : (
          <p>No liked items yet.</p>
        )}
      </div>
    </div>
  );
};

export default Like;
