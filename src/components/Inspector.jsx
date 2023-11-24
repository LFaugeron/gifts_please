import React, {useContext} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {SocketContext} from "../SocketContext.jsx";

const Inspector = ({isOpen, handleClient, handleNext, handleAccept, handleRefuse, isAccepted, client, handleAcceptPotDeVin, handleRefusePotDeVin}) => {

    const {potDeVin, setPotDeVin, nombreDeClients} = useContext(SocketContext)

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


    return (
        <>
            <div className={"h-full w-1/3 flex flex-col overflow-hidden"}>
                <div className={"w-full h-1/2 bg-cover flex justify-center items-end"}  style={{backgroundImage: "url('/bg.png')"}}>
                    <AnimatePresence
                        initial={true}
                        mode={"wait"}
                    >
                        {isOpen &&
                            <motion.div variants={flip} initial={"hidden"} className={"w-full h-full flex justify-center items-end"}
                                        animate={"visible"}
                                        exit={isAccepted ? "exitRight" : "exitLeft"}

                            >
                                <div className={"w-1/2 aspect-square rounded-t-full relative"}>
                                    <img src={client.avatar} alt={"avatar"} className={"w-full rounded-t-full"}/>
                                    <div className={"absolute z-20 p-4 rounded-lg bg-white text-black font-courrier font-bold top-0 right-0"}>{client.message}</div>
                                </div>
                            </motion.div>
                        }

                    </AnimatePresence>
                </div>
                <div className={"w-full h-1/2 flex justify-center items-center bg-no-repeat bg-cover bg-center"} style={{backgroundImage: "url('/papers.png')"}}>

                    <AnimatePresence
                        initial={true}
                        mode={"wait"}
                    >
                        {isOpen &&
                            <motion.div className="content-container" variants={flip} initial={"hidden"}
                                        animate={"visible"}
                                        exit={isAccepted ? "exitRight" : "exitLeft"}>
                                <div className="content">

                                    {potDeVin === null ?<><h1>{client.name}</h1>
                                        <p>Age : {client.age}</p>
                                <p>Nombres de cadeaux : {client.gifts}</p>
                                <p>Cheveux : {client.hair}</p>
                                <p>Dents : {client.teeth}</p>
                                <p>Alcool : {client.alcohol}</p>
                                <p>Objet de gauche : {client.item}</p>
                                <p>Enfants: {client.child}</p></> :
                                    <p>Pot de vin : {potDeVin}</p>
                                    }
                                </div>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
            </div>
            <div className={"w-2/3 h-full bg-slate-600 flex items-center justify-center gap-8 relative"} style={{background: "radial-gradient(rgba(255, 255, 255, 0.2) 8%, #201919 8%)", backgroundPosition: "0% 0%", backgroundSize: "5vmin 5vmin"}}>
                <p className={"p-4 text-white bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg absolute text-center top-12 left-12"}>Personnes dans la file d'attente : {nombreDeClients}</p>
                <button className={"p-7 rounded-lg text-4xl bg-gradient-to-br from-green-500 to-green-700 font-bold transition hover:scale-105"} onClick={potDeVin ? handleAcceptPotDeVin : handleAccept}>Accepter</button>
                <button className={"p-7 rounded-lg text-4xl bg-gradient-to-br from-red-500 to-red-700 font-bold transition hover:scale-105"} onClick={potDeVin ? handleRefusePotDeVin : handleRefuse}>Refuser</button>
                <button onClick={handleNext} className={"text-white bg-black p-4 rounded-lg transition hover:scale-105"}>SUIVANT</button>
            </div>
        </>
    );
};

export default Inspector;