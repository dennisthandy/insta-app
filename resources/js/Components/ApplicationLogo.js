import React from 'react';
import Logo from '../../images/logo.svg'

export default function ApplicationLogo({ className }) {
    return (
        <img src={Logo} alt="Logo" className={`w-24 h-24` + className} />
    );
}
