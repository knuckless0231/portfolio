import React from 'react';
import {bool} from 'prop-types';
import {CloseIcon, StyledMenu} from './Menu.styled';


const Menu = ({open, setOpen,...props}) => {

    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;
    const onClose = () => {
        setOpen(false)
    }

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>

            <CloseIcon onClick={onClose}/>

            <a href="/Incubator/portfolio/public" tabIndex={tabIndex}>
                <span aria-hidden="true">💁🏻‍♂️</span>
                About us
            </a>
            <a href="/Incubator/portfolio/public" tabIndex={tabIndex}>
                <span aria-hidden="true">💸</span>
                Pricing
            </a>
            <a href="/Incubator/portfolio/public" tabIndex={tabIndex}>
                <span aria-hidden="true">📩</span>
                Contact
            </a>


        </StyledMenu >

    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;
