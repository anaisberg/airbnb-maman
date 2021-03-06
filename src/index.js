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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Accueil from 'views/tabs/Accueil.js';
import Studio from "./views/tabs/Studio.js";
import Contact from "./views/tabs/Contact.js";
import Localisation from "./views/tabs/Localisation";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={(props) => <Accueil {...props} />} />
      <Route path="/studio" render={(props) => <Studio {...props} />} />
      <Route path="/localisation" render={(props) => <Localisation {...props} />} />
      <Route path="/contact" render={(props) => <Contact {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
