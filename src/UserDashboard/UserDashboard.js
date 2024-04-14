import { useState, useEffect } from 'react';
import '../UserDashboard/UserDashboard.css'; // Import CSS file for styling

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching user data and wishlist from backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data
        // const userDataResponse = await fetchUserDataFromBackend();
        // const userData = await userDataResponse.json();
        const userData = { name: 'John Doe', email: 'john@example.com' }; // Dummy data for demo

        // Fetch wishlist
        // const wishlistResponse = await fetchWishlistFromBackend();
        // const wishlistData = await wishlistResponse.json();
        const wishlistData = [{ id: 1, property: 'Property 1' }, { id: 2, property: 'Property 2' }]; // Dummy data for demo

        setUserData(userData);
        setWishlist(wishlistData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="user-dashboard-container">
      <h1>User Dashboard</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="user-info">
            <h2>User Information</h2>
            <p><span className="info-label">Name:</span> {userData.name}</p>
            <p><span className="info-label">Email:</span> {userData.email}</p>
          </div>
          <div className="wishlist">
            <h2>Wishlist Properties</h2>
            <ul>
              {wishlist.map(property => (
                <li key={property.id}>{property.property}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDashboard;
