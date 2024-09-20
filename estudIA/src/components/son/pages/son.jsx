import React, { useState } from 'react';
import Drawern from "../Drawer";
import { useNavigate } from 'react-router-dom';
import "../css/son.css";

export default function Son() {
    const navigate = useNavigate();
    const [buttonColor, setButtonColor] = useState('#f0f0f0');
    const [backgroundColor, setBackgroundColor] = useState('#e0e0e0');

    const handleNavigation = (path) => () => {
        navigate(path);
    };

    const handleColorChange = (newButtonColor, newBackgroundColor) => {
        setButtonColor(newButtonColor);
        setBackgroundColor(newBackgroundColor);
    };

    return (
        <>
            <Drawern />
            <div className="container" style={{ backgroundColor }}>
                <div className="subject" style={{ backgroundColor: buttonColor }}>
                    <a href="#" onClick={handleNavigation('/espanol')}>Español</a>
                </div>
                <div className="subject" style={{ backgroundColor: buttonColor }}>
                    <a href="#" onClick={handleNavigation('/ingles')}>Inglés</a>
                </div>
                <div className="subject" style={{ backgroundColor: buttonColor }}>
                    <a href="#" onClick={handleNavigation('/matematicas')}>Matemáticas</a>
                </div>
                <div className="subject" style={{ backgroundColor: buttonColor }}>
                    <a href="#" onClick={handleNavigation('/formacion-civica-y-etica')}>Formación Cívica y Ética</a>
                </div>
                <div className="subject" style={{ backgroundColor: buttonColor }}>
                    <a href="#"></a>
                </div>
            </div>
        </>
    );
}