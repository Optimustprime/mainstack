import React, { useEffect, useState } from "react";
import "./items.css";

function Items({
                   index,
                   initialBackgroundImageUrl,
                   initialOutlineColor,
                   initialTextColor,
                   text,
                   alternateBackgroundImageUrl,
                   alternateTextColor,
                   setSelectedIndex,
                   isSelected,
               }) {
    const [backgroundImageUrl, setBackgroundImageUrl] = useState(
        initialBackgroundImageUrl
    );
    const [textColor, setTextColor] = useState(initialTextColor);
    const [outlineTextColor, setOutlineTextColor] = useState(initialOutlineColor);

    const divStyle = {
        backgroundImage: `url(${isSelected ? alternateBackgroundImageUrl : backgroundImageUrl})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        width: "20px",
        height: "17px",
        cursor: "pointer",
    };
    const textStyle = {
        color: isSelected ? alternateTextColor : textColor,
        cursor: "pointer",
    };
    const outlineStyle = {
        background: isSelected ? alternateTextColor : outlineTextColor,
        cursor: "pointer",
    };

    const handleClick = () => {
        if (isSelected) {
            // Deselect this item
            setBackgroundImageUrl(initialBackgroundImageUrl);
            setTextColor(initialTextColor);
            setOutlineTextColor(initialOutlineColor);
            setSelectedIndex(null);
        } else {
            // Select this item and deselect all others
            setBackgroundImageUrl(alternateBackgroundImageUrl);
            setTextColor(alternateTextColor);
            setOutlineTextColor(alternateTextColor);
            setSelectedIndex(index);
        }
    };

    useEffect(() => {
        // Deselect this item when another item is selected
        if (setSelectedIndex !== index && isSelected) {
            setBackgroundImageUrl(initialBackgroundImageUrl);
            setTextColor(initialTextColor);
            setOutlineTextColor(initialOutlineColor);
        }
    }, [    setSelectedIndex,    index,    initialBackgroundImageUrl,    initialTextColor,    initialOutlineColor,    isSelected,  ]);

    return (
        <div>
            <div className="items" onClick={handleClick}>
                <div style={outlineStyle} className="items-outline"></div>
                <div style={divStyle} />
                <div style={textStyle}>{text}</div>
            </div>
        </div>

    );
}

export default Items;
