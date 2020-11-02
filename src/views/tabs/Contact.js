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

function Contact() {
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
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="text-center">Contact et réservation</h2>
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

export default Contact;
