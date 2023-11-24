import React, {useContext, useEffect, useState} from 'react';
import {SocketContext} from "../SocketContext.jsx";
import {useLocation, useNavigate, useNavigation} from "react-router-dom";

const AcceptedPage = () => {

    const [goodCode, setGoodCode] = useState(false)

    const handleSubmitCode = (e) => {
        e.preventDefault()
        if(e.target.code.value === "34782928") {
            setGoodCode(true)
        } else {
            alert("Mauvais code")
        }
    }


    return (
        <div className={"w-screen h-screen flex justify-center items-center"}>
            {!goodCode ? <form onSubmit={handleSubmitCode}><input name={"code"} type={"text"} placeholder={"code svp"} className={"mt-2 rounded-lg p-4"}/></form> : <p className={"text-black text-3xl p-20"}>Vous avez battu l'inspecteur et passé toutes les étapes de vérifications, vous aurez des cadeaux cette année</p>}
        </div>
    );
};

export default AcceptedPage;