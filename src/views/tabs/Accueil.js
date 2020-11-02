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
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import MyNavbar from "components/Navbars/Navbar.js";
import StudioHeader from "components/Headers/StudioHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function Accueil() {
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
                <div className="section text-center">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="title">Informations</h2>
                                <h5 className="description">
                                    Studio très spacieux de 33 m2, lumineux et calme, avec une belle vue, pour passer un séjour agréable dans une villa de style sur les hauteurs du Hohwald.
                                </h5>
                                <h5 className="description">
                                    Dans la grande pièce à vivre, décoration moderne, vous avez un canapé-lit 2 places, une table pour déjeuner, télévision et meuble de rangement.
                                </h5>
                                <h5 className="description">
                                    La cuisine est équipé avec tout le nécessaire comme à la maison.
                                </h5>
                                <h5 className="description">
                                    La salle de bain comporte une douche à l'italienne, avec jets massants et chromo-thérapie.
                                </h5>
                                <h5 className="description">
                                    Parking gratuit et espace pour vélos ou skis.
                                </h5>
                            </Col>
                        </Row>
                        <br />
                        <Button className="btn-round" color="info" href="#pablo" onClick={(e) => e.preventDefault()}>
                            Voir les photos
                        </Button>
                        <br />
                        <br />
                        <Row>
                            <Col md="3">
                                <div className="info">
                                    <div className="icon icon-info">
                                        <i className="nc-icon nc-album-2" />
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Beautiful Gallery</h4>
                                        <p className="description">
                                            Spend your time generating new ideas. You don't have to
                                            think of implementing.
                                        </p>
                                        <Button className="btn-link" color="info" href="#pablo">
                                            See more
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="info">
                                    <div className="icon icon-info">
                                        <i className="nc-icon nc-bulb-63" />
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">New Ideas</h4>
                                        <p>
                                            Larger, yet dramatically thinner. More powerful, but
                                            remarkably power efficient.
                                        </p>
                                        <Button className="btn-link" color="info" href="#pablo">
                                            See more
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="info">
                                    <div className="icon icon-info">
                                        <i className="nc-icon nc-chart-bar-32" />
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Statistics</h4>
                                        <p>
                                            Choose from a veriety of many colors resembling sugar
                                            paper pastels.
                                        </p>
                                        <Button className="btn-link" color="info" href="#pablo">
                                            See more
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="info">
                                    <div className="icon icon-info">
                                        <i className="nc-icon nc-sun-fog-29" />
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Delightful design</h4>
                                        <p>
                                            Find unique and handmade delightful designs related items
                                            directly from our sellers.
                                        </p>
                                        <Button className="btn-link" color="info" href="/studio">
                                            See more
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section landing-section">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="text-center">Contact</h2>
                                <p className="mt-2">
                                    N'hésitez pas à envoyer un message si vous souhaitez poser une question sur l'appartement
                                    ou si vous voulez réserver pour une certaine date. Vous serez recontactés rapidement,
                                    par téléphone ou mail, comme vous le souhaitez.
                                </p>
                                <Form className="contact-form">
                                    <Row>
                                        <Col md="6">
                                            <label>Nom</label>
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="nc-icon nc-single-02" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="Nom" type="text" />
                                            </InputGroup>
                                        </Col>
                                        <Col md="6">
                                            <label>Numéro de téléphone</label>
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="nc-icon nc-mobile" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="Téléphone" type="text"/>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <label>Email</label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="nc-icon nc-email-85" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Email" type="text" />
                                    </InputGroup>
                                    <label>Message</label>
                                    <Input
                                        placeholder="N'hésitez pas à poser vos questions, demander des informations supplémentaires..."
                                        type="textarea"
                                        rows="4"
                                    />
                                    <Row>
                                        <Col className="ml-auto mr-auto" md="4">
                                            <Button className="btn-fill" color="danger" size="lg">
                                                Envoyer
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <DemoFooter />
        </>
    );
}

export default Accueil;
