/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Button,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import MyNavbar from "components/Navbars/Navbar.js";
import StudioHeader from "components/Headers/StudioHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function Localisation() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    });
    return (
        <>
            <MyNavbar />
            <StudioHeader />
            <div className="main">
                <div id="contact" className="section landing-section">
                    <Container>
                        <Row className="text-center">
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="title">Localisation</h2>
                                <h5 className="description">
                                    Situé en centre ville d'un village de montagne, sur les hauteurs du Hohwald.
                                </h5>
                                <br/>
                                <h5 className="description">
                                    34 rue principale

                                </h5>
                                <h5 className="description">
                                    67140 Le Hohwald
                                </h5>
                                <br/>
                                <Button className="btn-round" color="info" target="_blank" href="https://goo.gl/maps/xntrDZ9DR8S59e1bA" onClick={(e) => e.preventDefault()}>
                                    Ouvrir sur Google Maps
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <DemoFooter />
        </>
    );
}

export default Localisation;
