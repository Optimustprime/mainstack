import React, { useState } from "react";
import './dashboard.css';
import Items from "../Items/items";

export default function Dashboard() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const items1 = [
        {
            index: 0,
            initialBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682386778/dashboard_1_vlspp3.svg',
            initialOutlineColor: 'white',
            initialTextColor: '#56616B',
            text: 'Dashboard',
            alternateBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg',
            alternateTextColor: '#FF5403'
        },
        {
            index: 1,
            initialBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/edit_fot7jt.svg',
            initialOutlineColor: 'white',
            initialTextColor: '#56616B',
            text: 'Item 1',
            alternateBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg',
            alternateTextColor: '#FF5403'
        },
        {
            index: 2,
            initialBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/group_uxrcrt.svg',
            initialOutlineColor: 'white',
            initialTextColor: '#56616B',
            text: 'Item 2',
            alternateBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg',
            alternateTextColor: '#FF5403'
        },
        {
            index: 3,
            initialBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/hourglass_empty_mstdqc.svg',
            initialOutlineColor: 'white',
            initialTextColor: '#56616B',
            text: 'Item 3',
            alternateBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg',
            alternateTextColor: '#FF5403'
        },

    ];

    const items2 = [
        {
            index: 4,
            initialBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382190/add_a_photo_tujlw8.svg',
            initialOutlineColor: 'white',
            initialTextColor: '#56616B',
            text: 'Item 4',
            alternateBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg',
            alternateTextColor: '#FF5403'
        },
        {
            index: 5,
            initialBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382191/delete_yt4okr.svg',
            initialOutlineColor: 'white',
            initialTextColor: '#56616B',
            text: 'Item 5',
            alternateBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg',
            alternateTextColor: '#FF5403'
        },

    ];

    const items3 = [
        {
            index: 6,
            initialBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382190/subscriptions_ddm6jo.svg',
            initialOutlineColor: 'white',
            initialTextColor: '#56616B',
            text: 'Item 6',
            alternateBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg',
            alternateTextColor: '#FF5403'
        },
        {
            index: 7,
            initialBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382190/file_present_ibpw60.svg',
            initialOutlineColor: 'white',
            initialTextColor: '#56616B',
            text: 'Item 7',
            alternateBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg',
            alternateTextColor: '#FF5403'
        },
        {
            index: 8,
            initialBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382190/alarm_ktxdbg.svg',
            initialOutlineColor: 'white',
            initialTextColor: '#56616B',
            text: 'Item 8',
            alternateBackgroundImageUrl: 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/dashboard_ulazng.svg',
            alternateTextColor: '#FF5403'
        },

    ];


    const handleItemClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <div className='dashboard'>
            <img className='logo' src='https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382192/mainstack-logo_f0aw3q.svg'/>
            <div>
                {items1.map((item) => (
                    <Items
                        key={item.index}
                        index={item.index}
                        initialBackgroundImageUrl={item.initialBackgroundImageUrl}
                        initialOutlineColor={item.initialOutlineColor}
                        initialTextColor={item.initialTextColor}
                        text={item.text}
                        alternateBackgroundImageUrl={item.alternateBackgroundImageUrl}
                        alternateTextColor={item.alternateTextColor}
                        setSelectedIndex={handleItemClick}
                        isSelected={selectedIndex === item.index}
                    />
                ))}
            </div>
            <div className='dash-heading'>
                OTHERS 1
            </div>
            {items2.map((item) => (
                <Items
                    key={item.index}
                    index={item.index}
                    initialBackgroundImageUrl={item.initialBackgroundImageUrl}
                    initialOutlineColor={item.initialOutlineColor}
                    initialTextColor={item.initialTextColor}
                    text={item.text}
                    alternateBackgroundImageUrl={item.alternateBackgroundImageUrl}
                    alternateTextColor={item.alternateTextColor}
                    setSelectedIndex={handleItemClick}
                    isSelected={selectedIndex === item.index}
                />
            ))}
            <div className='dash-heading'>
                OTHERS 2
            </div>
            {items3.map((item) => (
                <Items
                    key={item.index}
                    index={item.index}
                    initialBackgroundImageUrl={item.initialBackgroundImageUrl}
                    initialOutlineColor={item.initialOutlineColor}
                    initialTextColor={item.initialTextColor}
                    text={item.text}
                    alternateBackgroundImageUrl={item.alternateBackgroundImageUrl}
                    alternateTextColor={item.alternateTextColor}
                    setSelectedIndex={handleItemClick}
                    isSelected={selectedIndex === item.index}
                />
            ))}
            <div className='dash-profile'>
                <img src='https://res.cloudinary.com/dk80ynx1w/image/upload/v1682382190/unsplash_F16KPYxfm6s_q1ztal.svg'/>
                <div>Blessing Daniels</div>
            </div>
        </div>
    );
}
