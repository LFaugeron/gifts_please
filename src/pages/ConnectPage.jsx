import React, {useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";

const ConnectPage = () => {

    const ref = useRef(null)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(ref.current.value === "iaminspector") {
            localStorage.setItem("inspector", "true")
            navigate("/checkin")
        } else {
            alert("fuck you")
        }
    }

    return (
        <div className={"flex flex-col items-center justify-center h-screen gap-8"}>
            <p className={"text-2xl text-white font-bold p-4"}>Welcome to Gifts Please, if you are the inspector, please log in. Else click the button "I want to come in"</p>
            <form onSubmit={handleSubmit}>
                <input type={"text"} placeholder={"password"} className={"p-4 rounded-lg outline w-fit outline-fuchsia-600"} ref={ref}/>
            </form>
            <Link to={"/register"} className={"rounded-lg p-4 opacity-80 animate-bounce text-white text-xl transition hover:bg-fuchsia-600"}>I want to come in !</Link>
        </div>
    );
};

export default ConnectPage;