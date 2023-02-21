import React from 'react';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import FocusLock from 'react-focus-lock';
import { ThemeProvider } from 'styled-components';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import { useState, useRef } from "react";


const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";

    useOnClickOutside(node, () => setOpen(false));

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <div ref={node}>
                    <FocusLock disabled={!open}>
                        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                        <Menu open={open} setOpen={setOpen} id={menuId} />
                    </FocusLock>
                </div>
            </>
        </ThemeProvider>
    );
}

export default Sidebar;