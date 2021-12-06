import React from 'react';
import { useParticipants } from '../context/participantContext';
import { BsFillMicMuteFill } from "react-icons/bs"
import { GoUnmute } from "react-icons/go"
import Styles from "../components/participantGrid.module.css"

export const Participantgrid = () => {
    const { active } = useParticipants()
    return (
        <div className={Styles.grid}>
            {
                active.map(({id, name, muted })=>{
                    return <div key={id} className={ Styles.itemGrid}>
                        <p>{ name }</p>
                        { muted ? <BsFillMicMuteFill /> : <GoUnmute />}
                    </div>
                })
            }
        </div>
    );
}
