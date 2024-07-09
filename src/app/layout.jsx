import "./globals.css";

import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";

export const metadata = {
  title: "Correos",
  description: "Correos...",
  keywords:
    "Correos, españa, spain, correo, paquete, carta, envio, envios, postal, postales, oficina, oficinas, buzon, buzones, sellos, sello, franqueo, franquear, carta certificada, carta urgente, carta ordinaria, carta internacional, carta nacional, paquete certificado, paquete urgente, paquete ordinario, paquete internacional, paquete nacional, paquete azul, paquete verde, paquete rojo, paquete naranja, paquete marron, paquete blanco, pa",
};

function rootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />

        <main className="font-light static px-8 md:container m-auto w-full">{children}</main>

        <Footer/>
      </body>
    </html>
  );
}

export default rootLayout;
