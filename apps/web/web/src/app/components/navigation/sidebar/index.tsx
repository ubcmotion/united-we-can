'use client';

import React from 'react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  route: string;
}

const NavigationBar = () => {
  const menuItems: NavItemProps[] = [
    { 
      icon: (
        <svg width="64" height="51" viewBox="0 0 64 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="51" rx="20" fill="white"/>
        <path d="M40 30.5002V24.9522C40 24.4179 39.9995 24.1506 39.9346 23.9019C39.877 23.6816 39.7825 23.4731 39.6546 23.2846C39.5102 23.072 39.3096 22.8957 38.9074 22.5438L34.1074 18.3438C33.3608 17.6905 32.9875 17.3641 32.5674 17.2398C32.1972 17.1303 31.8026 17.1303 31.4324 17.2398C31.0126 17.364 30.6398 17.6901 29.8944 18.3424L25.0928 22.5438C24.6906 22.8957 24.49 23.072 24.3457 23.2846C24.2178 23.4731 24.1225 23.6816 24.065 23.9019C24 24.1506 24 24.4179 24 24.9522V30.5002C24 31.432 24 31.8978 24.1522 32.2654C24.3552 32.7554 24.7443 33.1452 25.2344 33.3482C25.6019 33.5005 26.0679 33.5005 26.9997 33.5005C27.9316 33.5005 28.3981 33.5005 28.7656 33.3482C29.2557 33.1452 29.6447 32.7555 29.8477 32.2654C29.9999 31.8979 30 31.432 30 30.5001V29.5001C30 28.3955 30.8954 27.5001 32 27.5001C33.1046 27.5001 34 28.3955 34 29.5001V30.5001C34 31.432 34 31.8979 34.1522 32.2654C34.3552 32.7555 34.7443 33.1452 35.2344 33.3482C35.6019 33.5005 36.0679 33.5005 36.9997 33.5005C37.9316 33.5005 38.3981 33.5005 38.7656 33.3482C39.2557 33.1452 39.6447 32.7554 39.8477 32.2654C39.9999 31.8978 40 31.432 40 30.5002Z" stroke="black" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>        
      ),
      label: 'Dashboard',
      route: '/dashboard'
    },
    { 
      icon: (
        <svg width="64" height="51" viewBox="0 0 64 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="51" rx="20" fill="white"/>
        <path d="M23 28.5002V30.3C23 31.4201 23 31.9798 23.218 32.4076C23.4097 32.7839 23.7155 33.0905 24.0918 33.2822C24.5192 33.5 25.079 33.5 26.1969 33.5H41.0002M23 28.5002V18.5M23 28.5002L26.8534 25.2891L26.8566 25.2865C27.5537 24.7056 27.9029 24.4146 28.2815 24.2964C28.7289 24.1567 29.2107 24.1788 29.6436 24.3584C30.0105 24.5106 30.3323 24.8324 30.9758 25.4759L30.9822 25.4823C31.6357 26.1358 31.9633 26.4635 32.3362 26.6153C32.7774 26.7951 33.2685 26.8106 33.7207 26.6606C34.1041 26.5334 34.4542 26.2275 35.1543 25.615L41 20.5" stroke="black" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      ), 
      label: 'Reports', 
      route: '/analytics' 
    },
    { icon: (
    <svg width="64" height="51" viewBox="0 0 64 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="51" rx="20" fill="white"/>
      <path d="M28 17.5H27.2002C26.0801 17.5 25.5196 17.5 25.0918 17.718C24.7155 17.9097 24.4097 18.2155 24.218 18.5918C24 19.0196 24 19.5801 24 20.7002V30.3002C24 31.4203 24 31.9801 24.218 32.4079C24.4097 32.7842 24.7155 33.0905 25.0918 33.2822C25.5192 33.5 26.079 33.5 27.1969 33.5H28M28 17.5H36.8002C37.9203 17.5 38.4796 17.5 38.9074 17.718C39.2837 17.9097 39.5905 18.2155 39.7822 18.5918C40 19.0192 40 19.579 40 20.6969V30.3036C40 31.4215 40 31.9805 39.7822 32.4079C39.5905 32.7842 39.2837 33.0905 38.9074 33.2822C38.48 33.5 37.921 33.5 36.8031 33.5H28M28 17.5V33.5M32 24.5H36M32 21.5H36" stroke="black" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    ), label: 'Pickups', route: '/requests' },
    { icon: (
    <svg width="64" height="51" viewBox="0 0 64 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="51" rx="20" fill="white"/>
      <path d="M26 31.5C26.0637 31.5 26.1293 31.5 26.1969 31.5H32M26 31.5C25.0117 31.4992 24.4933 31.4868 24.0918 31.2822C23.7155 31.0905 23.4097 30.7837 23.218 30.4074C23 29.9796 23 29.4203 23 28.3002V22.7002C23 21.5801 23 21.0196 23.218 20.5918C23.4097 20.2155 23.7155 19.9097 24.0918 19.718C24.5196 19.5 25.0801 19.5 26.2002 19.5H37.8002C38.9203 19.5 39.4796 19.5 39.9074 19.718C40.2837 19.9097 40.5905 20.2155 40.7822 20.5918C41 21.0192 41 21.579 41 22.6969V28.3031C41 29.421 41 29.98 40.7822 30.4074C40.5905 30.7837 40.2837 31.0905 39.9074 31.2822C39.48 31.5 38.921 31.5 37.8031 31.5H32M26 31.5C26 30.3954 27.3432 29.5 29 29.5C30.6569 29.5 32 30.3954 32 31.5M26 31.5C26 31.5 26 31.4999 26 31.5ZM38 27.5H34M38 24.5H35M29 26.5C27.8954 26.5 27 25.6046 27 24.5C27 23.3954 27.8954 22.5 29 22.5C30.1046 22.5 31 23.3954 31 24.5C31 25.6046 30.1046 26.5 29 26.5Z" stroke="black" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ), label: 'Drivers', route: '/drivers' },
    { icon: (<svg width="64" height="51" viewBox="0 0 64 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="51" rx="20" fill="white"/>
      <path d="M37 33.5C37 31.8431 34.7614 30.5 32 30.5C29.2386 30.5 27 31.8431 27 33.5M41 30.5004C41 29.2702 39.7659 28.2129 38 27.75M23 30.5004C23 29.2702 24.2341 28.2129 26 27.75M38 23.7361C38.6137 23.1868 39 22.3885 39 21.5C39 19.8431 37.6569 18.5 36 18.5C35.2316 18.5 34.5308 18.7889 34 19.2639M26 23.7361C25.3863 23.1868 25 22.3885 25 21.5C25 19.8431 26.3431 18.5 28 18.5C28.7684 18.5 29.4692 18.7889 30 19.2639M32 27.5C30.3431 27.5 29 26.1569 29 24.5C29 22.8431 30.3431 21.5 32 21.5C33.6569 21.5 35 22.8431 35 24.5C35 26.1569 33.6569 27.5 32 27.5Z" stroke="black" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ), label: 'Customers', route: '/customers' },
  ];

  return (
    <aside className="h-screen transition-all duration-300 w-[92px] top-[45px] left-[346px]">
      {/* Logo Section */}
      <div className="p-4 mb-4 flex items-center justify-center">
        <img 
          src="/navbar-lines.svg" 
          alt="Navbar icon" 
          className="w-[48px] h-[52px] absolute top-[23px] left-[22px]" 
        />
      </div>
      <div className="p-4 mb-4 flex items-center justify-center">
        <img 
          src="/uwc-logo.png"
          className="w-[68px] h-[32px] absolute top-[102px] left-[12px]" 
        />
      </div>

      {/* Navigation Items */}
      <nav className="w-[64px] h-[438px] absolute top-[176px] left-[14px] flex flex-col gap-[22px]">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.route}
            className="w-[64px] h-[51px] flex items-center justify-center text-foreground hover:bg-white transition-colors"
          >
            <div className="text-zinc-500 group-hover:text-white transition-colors">
              {item.icon}
            </div>
          </a>
        ))}
        
        {/* Divider */}
        
        <div className="my-6 border-t-2 border-zinc-800" />

        {/* Add Pickup Button */}
        <a
          href="/new-request"
          className="w-[64px] h-[51px] flex items-center py-4 text-foreground hover:bg-zinc-800 transition-colors justify-center"
        >
          <img 
            src="/add-pickup.svg" 
            alt="Add pickup" 
            className="w-[64px] h-[51px]" 
          />
        </a>
      </nav>
    </aside>
  );
};

export default NavigationBar;