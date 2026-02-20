import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home.jsx'

function loadGTM() {
  if (window.gtmLoaded) return;
  window.gtmLoaded = true;

  const script = document.createElement("script");
  script.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-M4ZJW7KC');
  `;
  document.body.appendChild(script);
}

function GTMLoader() {
  useEffect(() => {
    setTimeout(loadGTM, 1500); // carga después de 1.5s
  }, []);

  return null;
}

function App() {
  return (
    <>
      <Home />
      <GTMLoader />
    </>
  );
}

export default App;