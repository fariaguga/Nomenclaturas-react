import React, { useState, useEffect } from 'react';
// import Loading from '../Pages/Loading';
import "../index.css";

const HourControlTable = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('https://d3f3ubvh03.execute-api.us-east-1.amazonaws.com/stage/')
      .then(response => response.json())
      .then(data => setTasks(data.body))
      .catch(error => console.log(error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Task ID</th>
          <th>Instance Type</th>
          <th>Task Content</th>
          <th>Task Date</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task.taskID}>
            <td>{task.taskID}</td>
            <td>{task.instance_type}</td>
            <td>{task.task_content}</td>
            <td>{task.task_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HourControlTable;
