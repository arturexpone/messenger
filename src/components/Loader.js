import React from "react";
import spinner from '../assets/spinner.svg'

export const Loader = () => {
    return (
        <div className='loader'>
            <img src={spinner} alt=""/>
        </div>
    )
}