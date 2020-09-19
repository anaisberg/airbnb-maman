import React from "react";

function Studio() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("demo-icons");
        return function cleanup() {
            document.body.classList.remove("demo-icons");
        };
    });
    return (
        <>
            <header class="demo-icons">
                <h1>Gallery Photo</h1>
                <p>
                    <a href="/home">Retour au site</a>
                </p>
            </header>
            <div id="icons-wrapper" class="demo-icons">
                <section>
                    <ul>
                        <li>
                            <img
                                alt="Villa"
                                className="creative-tim-logo"
                                src={require("assets/img/villa.jpg")}
                            />
                            <p>Villa</p>
                            <input type="text" maxLength="1" readOnly="true"/>
                        </li>
                        <li>
                            <img
                                alt="Douche"
                                className="creative-tim-logo"
                                src={require("assets/img/douche.jpg")}
                            />
                            <p>Douche</p>
                            <input type="text" maxLength="1" readOnly="true"/>
                        </li>
                        <li>
                            <img
                                alt="Porte d'entrée"
                                className="creative-tim-logo"
                                src={require("assets/img/porte-entree.jpg")}
                            />
                            <p>Porte d'entrée</p>
                            <input type="text" maxLength="1" readOnly="true"/>
                        </li>
                        <li>
                            <img
                                alt="escalier"
                                className="creative-tim-logo"
                                src={require("assets/img/escalier.jpg")}
                            />
                            <p>Escalier</p>
                            <input type="text" maxLength="1" readOnly="true"/>
                        </li>
                        <li>
                            <img
                                alt="Ruisseau"
                                className="creative-tim-logo"
                                src={require("assets/img/ruisseau-2.jpg")}
                            />
                            <p>Ruisseau</p>
                            <input type="text" maxLength="1" readOnly="true"/>
                        </li>
                        <li>
                            <img
                                alt="entree"
                                className="creative-tim-logo"
                                src={require("assets/img/entree-3.jpg")}
                            />
                            <p>Entrée</p>
                            <input type="text" maxLength="1" readOnly="true"/>
                        </li>
                        <li>
                            <img
                                alt="Salon"
                                className="creative-tim-logo"
                                src={require("assets/img/salon.jpg")}
                            />
                            <p>Salon</p>
                            <input type="text" maxLength="1" readOnly="true"/>
                        </li>
                        <li>
                            <img
                                alt="TV"
                                className="creative-tim-logo"
                                src={require("assets/img/TV.jpg")}
                            />
                            <p>TV</p>
                            <input type="text" maxLength="1" readOnly="true"/>
                        </li>
                        <li>
                            <img
                                alt="Vue chambre"
                                className="creative-tim-logo"
                                src={require("assets/img/vue-chambre-2.jpg")}
                            />
                            <p>Vue de la chambre</p>
                            <input type="text" maxlength="1" readonly="true" />
                        </li>
                        <li>
                            <img
                                alt="Vue hiver"
                                className="creative-tim-logo"
                                src={require("assets/img/vue-hiver.jpg")}
                            />
                            <p>Vue en hiver</p>
                            <input type="text" maxlength="1" readonly="true" />
                        </li>
                        <li>
                            <img
                                alt="fontaine"
                                className="creative-tim-logo"
                                src={require("assets/img/fontaine.jpg")}
                            />
                            <p>Fontaine</p>
                            <input type="text" maxLength="1" readOnly="true"/>
                        </li>
                        <li>
                            <img
                                alt="Hall"
                                className="creative-tim-logo"
                                src={require("assets/img/hall.jpg")}
                            />
                            <p>Hall</p>
                            <input type="text" maxLength="1" readOnly="true"/>
                        </li>
                        <li>
                            <img
                                alt="Vue chambre"
                                className="creative-tim-logo"
                                src={require("assets/img/vue-chambre.jpg")}
                            />
                            <p>Vue de la chambre</p>
                            <input type="text" maxLength="1" readOnly="true"/>
                        </li>
                        <li>
                            <img
                                alt="Vue sortie"
                                className="creative-tim-logo"
                                src={require("assets/img/vue-sortie.jpg")}
                            />
                            <p>Sortie de l'appartement</p>
                            <input type="text" maxlength="1" readonly="true" />
                        </li>
                        <li>
                            <img
                                alt="Cadre"
                                className="creative-tim-logo"
                                src={require("assets/img/cadre.jpg")}
                            />
                            <p>Cadre</p>
                            <input type="text" maxlength="1" readonly="true" />
                        </li>
                        <li>
                            <img
                                alt="Cadre"
                                className="creative-tim-logo"
                                src={require("assets/img/cadre-2.jpg")}
                            />
                            <p>Cadre</p>
                            <input type="text" maxlength="1" readonly="true" />
                        </li>
                        <li>
                            <img
                                alt="Salon"
                                className="creative-tim-logo"
                                src={require("assets/img/canape-tableau.jpg")}
                            />
                            <p>Salon</p>
                            <input type="text" maxlength="1" readonly="true" />
                        </li>
                        <li>
                            <img
                                alt="Cuisine"
                                className="creative-tim-logo"
                                src={require("assets/img/cuisine.jpg")}
                            />
                            <p>Cuisine</p>
                            <input type="text" maxlength="1" readonly="true" />
                        </li>
                        <li>
                            <img
                                alt="entree"
                                className="creative-tim-logo"
                                src={require("assets/img/entree-1.jpg")}
                            />
                            <p>Entrée</p>
                            <input type="text" maxlength="1" readonly="true" />
                        </li>
                        <li>
                            <img
                                alt="entree"
                                className="creative-tim-logo"
                                src={require("assets/img/entree-2.jpg")}
                            />
                            <p>Entrée</p>
                            <input type="text" maxlength="1" readonly="true" />
                        </li>
                    </ul>
                </section>
            </div>
        </>
    );
}

export default Studio;
