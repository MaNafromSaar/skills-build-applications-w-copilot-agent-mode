import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://ominous-carnival-4x77rp9v4rv3pwr-8000.app.github.dev/api/teams')
      .then(response => response.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Teams</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Members</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team.id}>
                <td>{team.name}</td>
                <td>{team.members}</td>
                <td>{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;
