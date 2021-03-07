// Para extender el document creamos un archivo pages/_document.js
// es importante mantener este nombre
// es mejor buscar esto es custom documetn en la documentación de nextJS
// https://nextjs.org/docs/advanced-features/custom-document
/**
 * Orden de compilacion de nextJS
 * -Document
 *  -App
 *    - Nuestra App / pages
 */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  /*static async getInitialProps(ctx) {
    // para todas las páginas
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }*/

  // en la etiqueta <Main /> está la aplicación
  // extender el document es util para añadir elementos externos a la aplicación
  // como fuentes, css, js etc
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

/**
 * 
 * Advertencias sobre extender el Document:

    Ya que el Document se renderiza en servidor, los eventos como onClick no funcionarán.
    Los componentes de React fuera de <Main /> no serán inicializados por el navegador. No añadir lógica de la aplicación aquí o CSS personalizado (como styled-jsx). Si necesita componentes compartidos en todas sus páginas (como un menú o una barra de herramientas).
    getInitialPropsfunción de Document no se llama durante las transiciones del lado del cliente, ni cuando una página está optimizada estáticamente.
 * 
 */
