import React, { useState, useEffect } from 'react';
import '../BrokerDashboard/BrokerInfo.css';

const BrokerInfo = () => {
    const [brokerInfo, setBrokerInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editedBrokerInfo, setEditedBrokerInfo] = useState(null);

    // Simulate fetching broker information from backend
    useEffect(() => {
        const fetchBrokerInfo = async () => {
            try {
                // Fetch broker information
                // const response = await fetchBrokerInfoFromBackend();
                // const data = await response.json();
                const data = { name: 'John Doe', email: 'john@example.com', company: 'ABC Realty' }; // Dummy data for demo
                setBrokerInfo(data);
                setEditedBrokerInfo({ ...data });
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching broker information:', error);
                setIsLoading(false);
            }
        };

        fetchBrokerInfo();
    }, []);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        // Save edited broker information
        setBrokerInfo({ ...editedBrokerInfo });
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedBrokerInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <h2>Broker Information</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {isEditing ? (
                        <form>
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" name="name" value={editedBrokerInfo.name} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="email" name="email" value={editedBrokerInfo.email} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Company:</label>
                                <input type="text" name="company" value={editedBrokerInfo.company} onChange={handleInputChange} />
                            </div>
                            <button type="button" onClick={handleSave}>Save</button>
                        </form>
                    ) : (
                        <>
                            <p><strong>Name:</strong> {brokerInfo.name}</p>
                            <p><strong>Email:</strong> {brokerInfo.email}</p>
                            <p><strong>Company:</strong> {brokerInfo.company}</p>
                            <button type="button" onClick={handleEdit}>Edit</button>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default BrokerInfo;
