import React from "react";
import { MunaCard } from "./MunaCard";
export const About = (props) => {
  const { backgroundImage = "img/u-pattern.png" } = props;

  return (
    <div style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", padding: "40px", width: "100%"}}>
      <div id="about">
        <div className="container">
          <div className="about-text">
            <h2>Nuestra Historia</h2>
            <div className="col-md-8 col-md-offset-2 section-title">
              <p>
                Müna nació de una charla entre amigos. Jesús y Anthony soñaban con crear algo propio, algo que uniera la tradición con el amor por la panadería artesanal.
                Con esfuerzo (y muchas medialunas de por medio), ese sueño tomó forma en una esquina de Lanús.
                Desde entonces, Müna es más que una panadería: es un espacio de encuentro, confianza y sabor real. Atendemos a cada persona con cercanía, dedicación y productos hechos como deben ser: a mano.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Por que Müna?</h2>
          <div className="row">
          <div className="col-xs-12 col-md-6">
             <MunaCard backgroundImage="img/about_1.png"  description="Porque amamos la panadería, de verdad."/>
          </div>
          <div className="col-xs-12 col-md-6">
            <MunaCard backgroundImage="img/about_2.png"  description="Porque cuidamos cada detalle, desde el horno hasta el mostrador"/>
          </div>
          <div className="col-xs-12 col-md-6">
            <MunaCard backgroundImage="img/about_3.png"  description="Porque queremos que te sientas como en casa cada vez que venís"/>
          </div>
          <div className="col-xs-12 col-md-6">
            <MunaCard backgroundImage="img/about_4.png"  description="Porque cada producto está hecho con técnica y atención"/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
