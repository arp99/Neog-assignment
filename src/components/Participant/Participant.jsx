import { useParticipants } from "../../context/participantContext";
import ParticipantStyle from "./Participant.module.css";
import { toggleMute } from "../../utils/ToggleMute"
import { getActiveState } from "../../utils/GetActiveState"

const Participant = ({ id, name }) => {
    const { active, setActive } = useParticipants()
    getActiveState(active, id)
    return (
    <div className={ParticipantStyle.participantItem}>
      <div className={ParticipantStyle.participant}>{name}</div>
      <button onClick={() =>toggleMute(active, setActive, id ) }>
        { getActiveState(active, id) ? "unmute" : "mute"}
      </button>
    </div>
  );
};

export default Participant;
