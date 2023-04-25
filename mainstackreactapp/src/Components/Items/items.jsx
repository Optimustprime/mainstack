import React, { useState } from "react";
import './items.css';

function Items({ initialBackgroundImageUrl,initialOutlineColor, initialTextColor, text, alternateBackgroundImageUrl, alternateTextColor }) {
    const [backgroundImageUrl, setBackgroundImageUrl] = useState(initialBackgroundImageUrl);
    const [textColor, setTextColor] = useState(initialTextColor);
    const [outlinetextColor, setoutlineTextColor] = useState(initialOutlineColor='white');
    const [currentBackgroundImageUrl, setCurrentBackgroundImageUrl] = useState(initialBackgroundImageUrl);
    const [currentColor, setCurrentColor] = useState(initialTextColor);
    const divStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        width: "20px",
        height: "17px",
        cursor: "pointer",
    };
    const textStyle = {
        color: `${textColor}`,
        cursor: "pointer",
    };
    const outlineStyle = {
        background: `${outlinetextColor}`,
        cursor: "pointer",
    };

    const handleClick = () => {
        if (backgroundImageUrl === initialBackgroundImageUrl) {
            setBackgroundImageUrl(alternateBackgroundImageUrl);
            setCurrentBackgroundImageUrl(alternateBackgroundImageUrl);
            setTextColor(alternateTextColor);
            setCurrentColor(alternateTextColor);
            setoutlineTextColor(alternateTextColor)
        } else {
            setBackgroundImageUrl(initialBackgroundImageUrl);
            setCurrentBackgroundImageUrl(initialBackgroundImageUrl);
            setTextColor(initialTextColor);
            setCurrentColor(initialTextColor);
            setoutlineTextColor(initialOutlineColor)
        }
    };

    return (
        <div className="items" onClick={handleClick}>
            <div style={outlineStyle} className='items-outline'></div>
            <div style={divStyle} />
            <div style={textStyle}>{text}</div>
        </div>
    );
}

export default Items;
