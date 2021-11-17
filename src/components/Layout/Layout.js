import React from 'react'
import FooterPage from '../global-components/footer';
import Navigationbar from '../global-components/navbar';

const Layout = ({children}) => {
    return (<div>
            <Navigationbar />
                {children}
            <FooterPage />
        </div>
    )
}

export default Layout;