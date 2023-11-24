import React, {useEffect, useState, createContext} from 'react';
import {io} from "socket.io-client";
import {useLocation, useNavigate} from "react-router-dom";


export const SocketContext = createContext()

const SocketProvider = ({children}) => {

    const [socket, setSocket] = useState(null)
    const [socketId, setSocketId] = useState(null)
    const [client, setClient] = useState(null)
    const [status, setStatus] = useState(null)
    const [motif, setMotif] = useState("")
    const [potDeVin, setPotDeVin] = useState(null)
    const [accepted, setAccepted] = useState(null)
    const [nobody, setNobody] = useState(false)
    const [myPosition, setMyPosition] = useState(0)
    const [nombreDeClients, setNombreDeClients] = useState("0")

    const navigate = useNavigate()

    useEffect(() => {
        // Connecter au serveur WebSocket
        const socket = io(import.meta.env.VITE_BACKEND_URL);

        // Gérer les événements du serveur WebSocket
        socket.on('connect', () => {
            const id = socket.id
            setSocketId(id)
            console.log('Connecté au serveur WebSocket');
        });

        socket.on('message', (data) => {
            console.log('Message du serveur:', data);
        });

        socket.on('disconnect', () => {
            console.log('Déconnecté du serveur WebSocket');
        });

        socket.on("new", (cl) => {
            if(!cl) {
                return alert("File d'attente vide")
            } else {
                const randomAvatar = Math.floor(Math.random() * 7) + 1
                setClient({...cl, avatar: "/av"+randomAvatar+".png"})
            }
        })

        socket.on("potdevin", (amount) => {
            setPotDeVin(amount)
        })

        socket.on("nbClients", (nbClients) => {
            setNombreDeClients(nbClients)
        })

        socket.on("position", (position) => {
            setMyPosition(position)
        })

        socket.on("forward", () => {
            setMyPosition((oldValue) => oldValue - 1)
        })

        socket.on("myturn", () => {
            setClient("me")
        })

        socket.on("accepted client", () => {
            alert("voici le code d'accès notez-le et entrez : 34782928")
            setClient(null)
            setStatus(null)
            setMotif("")
            setPotDeVin(null)
            setAccepted(null)
            localStorage.removeItem("answers")
            navigate("/in")
        })

        socket.on("nobody", () => {
            setNobody(true)
        })

        socket.on("refused client", (mot) => {
            setStatus("refused")
            setMotif(mot)
        })

        socket.on("potdevin refused", () => {
            alert("Pot de vin refusé")
            setClient(null)
            setStatus(null)
            setMotif("")
            setPotDeVin(null)
            setAccepted(null)
            localStorage.removeItem("answers")
            navigate("/")
        })


        setSocket(socket)

        // Nettoyage à la sortie du composant
        return () => {
            socket.disconnect();
        };
    }, []);


    return (
        <SocketContext.Provider value={{socketId, setSocketId, socket, setSocket, client, setClient, status, motif, potDeVin, setPotDeVin, nobody, setNobody, accepted, nombreDeClients, myPosition}}>
            {children}
        </SocketContext.Provider>
    )
};

export default SocketProvider;
