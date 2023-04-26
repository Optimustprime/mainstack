import React, { useState } from "react";

export default function Button(props){

    return(
        <div>
            <div className=''>
                <button onClick={props.onClick}>
                    {props.days}
                </button>
            </div>
        </div>

    )
}