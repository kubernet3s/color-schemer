import React from 'react';

const Footer = () =>{

    return(
        <footer className="bg-red padding-20 flex default-margin bold justify-center">
            <nav className="w-80percent flex space-around">
                <a href="https://www.thearmypainter.com/" className="white f-20">The Army Painter</a>
                <a href="https://github.com/eric-pinero" className="white f-20">Github</a>
                <a href="https://www.ericpcodes.com/" className="white f-20 margin-l-7percent">Portfolio</a>
            </nav>
        </footer>
    )
};

export default Footer;