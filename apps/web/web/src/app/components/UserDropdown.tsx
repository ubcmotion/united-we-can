'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function UserDropdown() {
    const dropdownState = useState(false);
    const isDropdownOpen = dropdownState[0];
    const setDropdownOpen = dropdownState[1];

    const dropdownRef = useRef<HTMLDivElement>(null);
    
    const router = useRouter();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const clickedElement = event.target as Node;
            const dropdownElement = dropdownRef.current;
            
            if (dropdownElement !== null) {
                const clickWasOutside = !dropdownElement.contains(clickedElement);
                if (clickWasOutside) {
                    setDropdownOpen(false);
                }
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function handleProfileClick() {
        router.push('/profile');
        setDropdownOpen(false);
    }

    function handleLogoutClick() {
        console.log('logout clicked');
        setDropdownOpen(false);
    }
    
    function toggleDropdown() {
        const newState = !isDropdownOpen;
        setDropdownOpen(newState);
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
                <span className="text-white font-medium">Mike Wazowski</span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6B7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>
            </button>

            {isDropdownOpen ? (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
                    <button
                        onClick={handleProfileClick}
                        className="w-full px-6 py-3 flex items-center justify-between hover:bg-gray-50 text-left"
                    >
                        <div className="flex items-center gap-3">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span className="text-black text-base">My profile</span>
                        </div>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>

                    <button
                        onClick={handleLogoutClick}
                        className="w-full px-6 py-3 flex items-center gap-3 hover:bg-gray-50 text-left"
                    >
                        <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                d="M12 15L15 12M15 12L12 9M15 12H4M9 7.24859V7.2002C9 6.08009 9 5.51962 9.21799 5.0918C9.40973 4.71547 9.71547 4.40973 10.0918 4.21799C10.5196 4 11.0801 4 12.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H12.1969C11.079 20 10.5192 20 10.0918 19.7822C9.71547 19.5905 9.40973 19.2839 9.21799 18.9076C9 18.4798 9 17.9201 9 16.8V16.75" 
                                stroke="#E44146" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="text-red-500 text-base">Log out</span>
                    </button>
                </div>
            ) : null}
        </div>
    );
}
