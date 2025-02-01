import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavNgo from '../Components/NavNgo';
import './NGO_Dash.css';

const NGODashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="ngo-dashboard">
      <NavNgo/>
      <h1>NGO Dashboard</h1>
      <div className="button-container">
        <button onClick={() => navigate('/NGO_AddRequest')}>Add Request</button>
        <button onClick={() => navigate('/NGO_TrackRequest')}>Track Requests</button>
      </div>
    </div>
  );
};

export default NGODashboard;
