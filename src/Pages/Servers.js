import React, { useState } from 'react';
import ServersTable from "../Components/ServersTable";
import NameFilter from "../Components/NameFilter";

function Servers() {
  const [filterName, setFilterName] = useState('');

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value);
  };
  console.log(filterName);

  return (
    <div>
      <h1>Instâncias EC2 - STC</h1>
      <NameFilter filterName={filterName} onFilterNameChange={handleFilterNameChange} />
      <ServersTable filterName={filterName} />
    </div>
  );
}

export default Servers;