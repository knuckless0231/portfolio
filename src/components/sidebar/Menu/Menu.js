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

            <a href="#services" onClick={onClose}>
                {/*<span aria-hidden="true">💁🏻‍♂️</span>*/}
                My Services
            </a>
            <a href="#projects" onClick={onClose} >
                My Projects
            </a>
            <a href="#hire" onClick={onClose} tabIndex={tabIndex}>
                Hire Me
            </a>

        </StyledMenu >
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;
