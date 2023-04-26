import React, { useState } from "react";

export default function Button(props){
    const [isActive, setIsActive] = useState(false);

    return(
        <div>
            <div className=''>
                <button className={isActive ? 'active' : ''} onClick={props.onClick}>
                    {props.days}
                </button>
            </div>
        </div>

    )
}