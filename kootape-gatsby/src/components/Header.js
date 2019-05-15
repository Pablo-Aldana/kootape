import React from 'react'
import logo from '../assets/images/kootapelogowhite.png'
class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major"><img src={logo} alt="Kootape" /></span>
                    <h1>Expertos Kinesiología deportiva<br /></h1>
                    <p>Cintas de Kinesiología de alta calidad<br />
                    </p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Descubre m&aacute;s</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
