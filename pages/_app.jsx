import { useEffect } from "react";

import '../styles/css/bootstrap.css'
import '../styles/style.css'
import '../styles/css/uikit.min.css'
// import "uikit/dist/js/uikit"

export default function MyApp({Component,pageProps}){
    useEffect(() => {
        require("../styles/js/bootstrap.min.js");
        // require("../styles/js/uikit.min.js");
        require("uikit/dist/js/uikit")
        require('../styles/script.js')
    }, []);
    return <Component {...pageProps}/>
}