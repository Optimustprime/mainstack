import React from 'react';

const Country = ({ image, text, percentage, color }) => {
    const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);

    return (
        <div className="countries">
            <div className="list">
                <img src={image} alt="country image" />
                <div>
                    {capitalizedText} <span> {percentage}%</span>
                </div>
                <div className="circle" style={{ backgroundColor: color }}></div>
            </div>
        </div>
    );
};

export default Country;
