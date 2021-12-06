import { useEffect } from "react";
import "./App.css";
import Participant from "./components/Participant/Participant";
import { Participantgrid } from "./components/ParticipantGrid";
import { Participantlist } from "./components/ParticipantList";
import { useParticipants } from "./context/participantContext";
import { participants } from "./Db/Database";

function App() {
  const { active, setActive } = useParticipants();

  useEffect(() => {
    const activeParticipants = participants.map(({ id, name }) => {
      return {
        id,
        name,
        muted: true,
      };
    });
    setActive(activeParticipants);
  }, [setActive]);

  return (
    <div className="App">
      <Participantgrid />  
      <Participantlist>
        {participants.map(({ id, name }) => {
          return <Participant id={id} name={name} key={id} />;
        })}
      </Participantlist>
    </div>
  );
}

export default App;
