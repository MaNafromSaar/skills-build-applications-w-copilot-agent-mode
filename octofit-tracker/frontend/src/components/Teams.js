import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://ominous-carnival-4x77rp9v4rv3pwr-8000.app.github.dev/api/teams.js')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setTeams(data))
      .catch(err => {
        console.error('Failed to fetch teams:', err);
        setError('Failed to load teams. Please try again later.');
      });
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Teams</h2>
      </div>
      <div className="card-body">
        {error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default Teams;
