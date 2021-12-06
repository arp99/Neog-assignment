import { createContext, useContext, useState } from "react";

const participantContext = createContext()

export const ParticipantProvider = ({ children }) => {
    const [ active, setActive ] = useState([])
    
    return(
        <participantContext.Provider  value={{ active, setActive }}>
            { children }
        </participantContext.Provider>
    )
}

export const useParticipants = () => useContext(participantContext)