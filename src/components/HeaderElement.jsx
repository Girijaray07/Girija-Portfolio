import BlurText from "../hooks/BlurText";
import GlassSurface from '../hooks/GlassSurface';

import './HeaderElement.css'

function HeaderElement() {
    return (
        <header className='header'>
            <div className="left-section">
                <BlurText
                    text="Girija"
                    delay={150}
                    animateBy="letters"
                    direction="bottom"
                    className="name-logo"
                />
            </div>
            <nav className="header_items">
                <ul>
                    <li>
                        <a href="#home" className="header_item-text home-text cursor-target">Home</a>
                    </li>

                    <li>
                        <a href="#works" className="header_item-text work-text cursor-target">Works</a>
                    </li>

                    <li>
                        <a href="#about" className="header_item-text about-text cursor-target">About</a>
                    </li>

                    <li>
                        <a href="#contactUs" className="header_item-text contact-text cursor-target">Contact Us</a>
                    </li>
                </ul>
                {/* <button className="hire-button js-hire-button cursor-target"><span>Connect</span></button> */}

                <GlassSurface
                    width={100}
                    height={40}
                    displace={20}
                    distortionScale={-150}
                    redOffset={5}
                    greenOffset={15}
                    blueOffset={25}
                    brightness={60}
                    opacity={0.8}
                    mixBlendMode="screen"
                    className="js-hire-button"
                    style={{ marginLeft: '7px' }}
                ><span>Connect</span>
                </GlassSurface>
            </nav>
        </header>
    )
}

export default HeaderElement;