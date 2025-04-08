import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://ominous-carnival-4x77rp9v4rv3pwr-8000.app.github.dev/api/workouts.js')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setWorkouts(data))
      .catch(err => {
        console.error('Failed to fetch workouts:', err);
        setError('Failed to load workouts. Please try again later.');
      });
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Workouts</h2>
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
                <th>Workout</th>
                <th>Duration</th>
                <th>Calories Burned</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map(workout => (
                <tr key={workout.id}>
                  <td>{workout.name}</td>
                  <td>{workout.duration}</td>
                  <td>{workout.caloriesBurned}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Workouts;
