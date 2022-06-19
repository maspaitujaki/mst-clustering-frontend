import React, { ReactNode } from 'react';
import './Layout.css'
import Header from '../Header'
type Props = {
    children: ReactNode;
    title?: string;
  };
  
function Layout({children}: Props){
    return (
        <>
            <Header />
            <div className="container">
                {children}
            </div>
        </>
    )
}

export default Layout;