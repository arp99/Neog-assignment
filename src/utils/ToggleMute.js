export const toggleMute = ( active, setActive, participantId ) => {
    const modified = active.map((participant) => {
        if( participant.id === participantId ){
            return {
                ...participant,
                muted : !participant.muted
            }
        }else{
            return participant
        }
    })
    setActive(modified)
}