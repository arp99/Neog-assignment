export const getActiveState = ( active, partipantId ) => {
    const foundIdx = active.findIndex(({ id })=>{
        return id === partipantId
    })

    return foundIdx === -1 ? true : active[foundIdx].muted
    // console.log("found index: ", foundIdx)
}