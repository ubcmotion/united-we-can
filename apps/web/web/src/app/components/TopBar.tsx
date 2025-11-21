import React from 'react';
import UserDropdown from './UserDropdown';

export default function TopBar() {
    return (
        <div className='bg-uwc_blue text-white h-16 flex items-center justify-between p-5'>
            <strong style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px',
                    fontWeight: 600,
                }}>
                Admin Portal
            </strong>
            <UserDropdown />
        </div>
    );
}