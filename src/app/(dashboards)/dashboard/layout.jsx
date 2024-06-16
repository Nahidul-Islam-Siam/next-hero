import React from 'react';

const DashboaredLayout = ({children}) => {
    return (
        <div>
            <div className='bg-green-400 p-6'>
                Dashboard Layout
                </div>
                {children}
                <footer>Dashboard Footer</footer>
            
        </div>
    );
};

export default DashboaredLayout;