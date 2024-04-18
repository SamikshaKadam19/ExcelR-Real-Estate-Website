import React, { useState } from 'react';
const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => setIsOpen(!isOpen);

    return (
        <>
        <div className="showPopUp">
            <ul className='DisplayPropertyItems'>
            <li> Include Parks</li>
            <li>Schools</li>
            <li>Shopping Center</li>
            <li>Public Transportation</li>
            <li>Swimming Pool</li>
            <li>Fitness Center</li>
            <li></li>
            </ul>
        </div>
        </>
    );
};

export default Popup;