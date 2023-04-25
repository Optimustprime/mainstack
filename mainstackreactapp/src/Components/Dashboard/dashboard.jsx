import React, { useState } from "react";
import './dashboard.css';
import Items from "../Items/items";

export default function Dashboard(){


    return(
        <div className='dashboard'>
            <img className='logo' src='https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/mainstack-logo_f0aw3q.svg'/>
            <div>
                <Items
                    initialBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682386778/dashboard_1_vlspp3.svg"
                    alternateBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg"
                    text="Dashboard"
                    initialTextColor='#56616B'
                    alternateTextColor='#FF5403'
                    initialOutlineColor='white'
                />

            </div>
            <div>
                <Items
                    initialBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/edit_fot7jt.svg"
                    alternateBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg"
                    text="Item&#x00A0;1"
                    initialTextColor='#56616B'
                    alternateTextColor='#FF5403'
                    initialOutlineColor='white'
                />
            </div>

            <div>
                <Items
                    initialBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/group_uxrcrt.svg"
                    alternateBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg"
                    text="Item&#x00A0;2"
                    initialTextColor='#56616B'
                    alternateTextColor='#FF5403'
                    initialOutlineColor='white'
                />
            </div>
            <div>
                <Items
                    initialBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682386778/dashboard_1_vlspp3.svg"
                    alternateBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg"
                    text="Item&#x00A0;3"
                    initialTextColor='#56616B'
                    alternateTextColor='#FF5403'
                    initialOutlineColor='white'
                />
            </div>
            <div className='dash-heading'>
                OTHERS 1
            </div>
            <div>
                <Items
                    initialBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382190/add_a_photo_tujlw8.svg"
                    alternateBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg"
                    text="Item&#x00A0;4"
                    initialTextColor='#56616B'
                    alternateTextColor='#FF5403'
                    initialOutlineColor='white'
                />
            </div>
            <div>
                <Items
                    initialBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382191/delete_yt4okr.svg"
                    alternateBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg"
                    text="Item&#x00A0;5"
                    initialTextColor='#56616B'
                    alternateTextColor='#FF5403'
                    initialOutlineColor='white'
                />
            </div>
            <div className='dash-heading'>
                OTHERS 2
            </div>
            <div>
                <Items
                    initialBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382190/subscriptions_ddm6jo.svg"
                    alternateBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg"
                    text="Item&#x00A0;6"
                    initialTextColor='#56616B'
                    alternateTextColor='#FF5403'
                    initialOutlineColor='white'
                />
            </div>
            <div>
                <Items
                    initialBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382190/file_present_ibpw60.svg"
                    alternateBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg"
                    text="Item&#x00A0;7"
                    initialTextColor='#56616B'
                    alternateTextColor='#FF5403'
                    initialOutlineColor='white'
                />
            </div>
            <div>
                <Items
                    initialBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382190/alarm_ktxdbg.svg"
                    alternateBackgroundImageUrl="https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg"
                    text="Item&#x00A0;8"
                    initialTextColor='#56616B'
                    alternateTextColor='#FF5403'
                    initialOutlineColor='white'
                />
            </div>
            <div className='dash-profile'>
                <img src='https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382190/unsplash_F16KPYxfm6s_q1ztal.svg'/>
                <div>Blessing Daniels</div>
            </div>

        </div>

    )
}