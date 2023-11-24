import React, {useContext, useEffect} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {SocketContext} from "../SocketContext.jsx";

const Client = ({client, status, motif}) => {

    const {socket, myPosition} = useContext(SocketContext)

    const flip = {
        hidden: {
            transform: "translateX(-100%)",
            opacity: 0,
            transition: {
                delay: 0.3,
            },
        },
        visible: {
            transform: "translateX(0%)",
            opacity: 1,
            transition: {
                duration: 0.4,
            },
        },
        exitRight: {
            transform: "translateX(100%)",
            opacity: 0,
            transition: {
                duration: 0.4,
            },
        },

        exitLeft: {
            transform: "translateX(-100%)",
            opacity: 0,
            transition: {
                duration: 0.4,
            },
        }
    };

    const handleCorrupt = (e) => {
        e.preventDefault()
        const amount = e.target.amount.value
        socket.emit("potdevin", amount)
        alert("pot de vin envoyé")
    }


    return (
        <div>
            <AnimatePresence initial={true}
                             mode={"wait"}>


            {client !== "me" ?
                <div className={"h-screen w-screen flex justify-center items-center"}>
                    <p className={"text-white"}>Vous êtes dans la file d'attente, en position {myPosition && myPosition}</p>
                </div>
                :
                <motion.div variants={flip} initial={"hidden"}
                            animate={"visible"}
                            exit={"exitRight"} className={"w-screen h-screen overflow-hidden relative bg-center bg-cover flex justify-center items-start"} style={{backgroundImage : "url('/vonel.png')"}}>
                    <p className={"p-4 bg-white rounded-lg mt-24"}>{status === null ? "Bonjour, vos documents sont en cours d'analyse, Merci de patienter" : status === "refused" ? "Vous avez été refusé pour cause : " + motif: ""}</p>
                    {status === "refused" && <div className={"absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black flex flex-col justify-center items-center"}>
                        <p className={"bg-white p-4 rounded-lg"}>Vous pouvez proposer un pot de vin, renseignez le montant et appuyez sur entrée, choisissez bien</p>
                        <form onSubmit={handleCorrupt}>
                            <input name={"amount"} type={"number"} placeholder={"montant"} className={"mt-2 rounded-lg p-4"}/>
                        </form>
                    </div>}
                </motion.div>}
            </AnimatePresence>
        </div>
    );
};

export default Client;