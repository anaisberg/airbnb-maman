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
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function StudioHeader() {
  let pageHeader = React.createRef();
  let linkStylesProps = {
    color: 'white',
    fontWeight: 'bold',
  }

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/vue-chambre-2.jpg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Studio, Le Hohwald</h1>
            <h3>Appartement en résidence, calme et lumineux.</h3>
            <br />
            <Button className="btn-round mr-2" color="neutral" outline>
              <i className="fa fa-play" />
              <Link style={linkStylesProps} to="/contact">Réserver</Link>
            </Button>
            <Button className="btn-round" color="neutral" type="button" outline>
              <Link style={linkStylesProps} to="/studio">Photos</Link>
            </Button>

          </div>
        </Container>
      </div>
    </>
  );
}

export default StudioHeader;
