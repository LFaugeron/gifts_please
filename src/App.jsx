import {useEffect} from 'react'
import {Outlet} from "react-router-dom";
import {io} from "socket.io-client";
import Socket from "./SocketContext.jsx";
import SocketProvider from "./SocketContext.jsx";

function App() {



    return (
        <SocketProvider>
            <div className={"font-nunito bg-gradient-to-br from-fuchsia-600 to-red-500"}>
                <Outlet/>
            </div>
        </SocketProvider>
    )
}

export default App
