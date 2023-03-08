import React, { useState } from 'react';
import DatabasesTable from "../Components/DatabasesTable";
import NameFilter from "../Components/NameFilter";

function Databases() {
  const [filterName, setFilterName] = useState('');

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value);
  };
  console.log(filterName);

  return (
    <div>
        <h1>Instâncias RDS - STC</h1>
        <NameFilter filterName={filterName} onFilterNameChange={handleFilterNameChange} />
        <DatabasesTable filterName={filterName} />
    </div>
  )
}

export default Databases;