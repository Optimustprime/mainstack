import React, { useState } from "react";
import Dashboard from "../Dashboard/dashboard";
import DashboardContent from "../Dashboard/dashboardContent";

export default function Home(){

    return(
        <div>
            <div className='home'>
                <Dashboard/>
                <DashboardContent/>
            </div>
        </div>

    )
}