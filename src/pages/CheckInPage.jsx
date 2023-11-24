import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import "../book.css"
import {AnimatePresence, motion} from "framer-motion";
import {SocketContext} from "../SocketContext.jsx";
import Inspector from "../components/Inspector.jsx";
import Client from "../components/Client.jsx";


const CheckInPage = () => {

    const [isClient, setIsClient] = useState(false)
    const navigate = useNavigate()

    const {socket, socketId, client, setClient, status, motif, potDeVin, setPotDeVin, nobody, setNobody} = useContext(SocketContext)

    const [isOpen, setIsOpen] = useState(false)
    const [isAccepted, setIsAccepted] = useState(null)

    useEffect(() => {
        if(socket && socketId) {

            const answers = JSON.parse(localStorage.getItem("answers"))
            if(answers) {
                setIsClient(true)
            }
            const isInspector = localStorage.getItem("inspector")
            if(isInspector) {
                socket.emit("inspector", socketId)
                setIsClient(false)
            }

            if(!isInspector && !answers) {
                navigate("/")
            }

            if(answers) {
                socket.emit("arrived", answers)
            }
        }
    }, [socket, socketId])

    useEffect(() => {
        if(client) {
            setIsOpen(true)
        }
    }, [client])

    useEffect(() => {
        if (isAccepted !== null) {
            handleClient();
        }
    }, [isAccepted]);

    useEffect(() => {
        if(nobody) {
            setNobody(null)
            setIsOpen(false)
            setTimeout(() => {
                setClient(false)
            }, 400)
        }

    }, [nobody])

    const handleClient = () => {
        if(client) {
            if(isAccepted) {
                socket.emit("accepted", client)
                setIsOpen(false)
                setTimeout(() => {
                    setClient(false)
                }, 400)
            } else {
                const reason = prompt("Cause du refus ?")
                socket.emit("refused", {...client, motif: reason})
                setIsAccepted(null)
            }
        }
    }

    const handleRefusePotDeVin = () => {
        socket.emit("potdevin refused", {...client})
        setIsOpen(false)
        setTimeout(() => {
            setClient(false)
        }, 400)
        setPotDeVin(null)
    }

    const handleAcceptPotDeVin = () => {
        setIsAccepted(true)
        setPotDeVin(null)
    }

    const handleNext = () => {
        if(!client) {
            socket.emit("next")
            setIsAccepted(null)
        }
    }
    const handleAccept = () => {
        if(isAccepted === null && client) {
            setIsAccepted(true)
        }
    }

    const handleRefuse = () => {
        if(isAccepted === null && client) {
            setIsAccepted(false)
        }
    }

    return (
        <div className={"w-full h-screen bg-black flex"}>
            {
                !isClient ? <Inspector client={client} handleClient={handleClient} handleAccept={handleAccept} handleAcceptPotDeVin={handleAcceptPotDeVin} handleRefusePotDeVin={handleRefusePotDeVin} handleNext={handleNext} handleRefuse={handleRefuse} isAccepted={isAccepted} isOpen={isOpen}/> : <Client client={client} motif={motif} status={status}/>
            }
        </div>
    );
};

export default CheckInPage;