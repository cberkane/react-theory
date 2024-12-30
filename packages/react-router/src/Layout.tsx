/* Documented file */
import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";

const Layout: React.FC = () => {
    const { state } = useNavigation();

    return <>
        <nav>
            <div style={{ display: 'flex', gap: '18px' }}>
                <Link to="/foo">Foo</Link>
                <Link to="/bar">Bar</Link>
            </div>
        </nav>

        {state === 'idle' && <Outlet />}
        {state === 'loading' && <p>Loading...</p>}
    </>
}

export default Layout; 