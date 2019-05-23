import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Kootape - Expertos en Kinesiología deportiva";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Kootape<br />
                                Expertos Kinesiología deportiva</h2>
                            </header>
                            <p> Hecho de materias primas de alta calidad cuidadosamente escogidas, certificadas por profesionales internacionales, las cintas Kinesiología Kootape proporcionan una eficacia y soporte excepcionales, así como una gran durabilidad. El adhesivo acrílico hipoalergénico y la tela de algodón de alta calidad lo hacen resistente al agua, transpirable y cómodo de llevar.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Las cintas de Kinesiología Kootape<br />
                                </h2>
                            </header>
                            <p>Estan diseñadas para todo tipo de personas, jóvenes y mayores, profesionales y amateu, embarazadas, deportistas, literalmente, ¡toda persona con vida activa!</p>
                            <p>Kootape es idónea para el alivio del dolor y el soporte de los músculos, ligamentos y tendones. Diseñada </p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Adipiscing amet consequat</h2>
                            </header>
                            <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Iniciado</h3>
                            <p>Descubre nuestro pack individual.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">Comprar</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Aprendiz</h3>
                            <p>Pack de seis rollos</p>
                            <ul className="actions">
                                <li><a href="#" className="button">Comprar</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Profesional</h3>
                            <p>Pack de doce rollos donde podrás desarrollar todo tu potencial</p>
                            <ul className="actions">
                                <li><a href="#" className="button">Comprar</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>¿Quieres saber más?</h2>
                        </header>
                        <p>Contactanos.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Login</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;