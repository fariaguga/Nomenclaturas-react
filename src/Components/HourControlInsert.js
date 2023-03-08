import React, { useState } from 'react';
import "../Styles/hourControlInsert.css"

function HourControlInsert() {
  const [instanceType, setInstanceType] = useState('');
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');

  const handleInstanceTypeChange = (event) => {
    setInstanceType(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      instance_type: instanceType,
      task_content: task,
      task_date: date
    };

    fetch('https://d3f3ubvh03.execute-api.us-east-1.amazonaws.com/stage/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log(response);
        setInstanceType('');
        setTask('');
        setDate('');
      })
      .catch(error => {
        console.log(error);
      });
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="instanceType">Instance Type:</label>
        <select id="instanceType" name="instanceType" value={instanceType} onChange={handleInstanceTypeChange}>
          <option value="">Select Instance Type</option>
          <option value="ec2">EC2 Instance</option>
          <option value="rds">RDS Instance</option>
        </select>
        <br />
        <label htmlFor="task">Task:</label>
        <input id="task" name="task" type="text" value={task} onChange={handleTaskChange} />
        <br />
        <label htmlFor="date">Date:</label>
        <input id="date" name="date" type="datetime-local" value={date} onChange={handleDateChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HourControlInsert;