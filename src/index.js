import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ParticipantProvider } from './context/participantContext';

ReactDOM.render(
  <React.StrictMode>
    <ParticipantProvider>
      <App />
    </ParticipantProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

