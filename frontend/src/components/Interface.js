import React from "react"
import ColorList from "./ColorList"

const Interface = () => {
    // let [scheme, schemeChange] = useState([]);
    // const props = {
    //     "scheme" : scheme,
    //     "schemeChange" : schemeChange
    // };

    return(
        <>
        <ColorList className="w-80percent"/>
        {/* {ColorSchemeView(props)} */}
        </>
    );
};

export default Interface