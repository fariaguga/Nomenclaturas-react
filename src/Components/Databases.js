import { useEffect, useState } from "react";
// import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";
import '../index.css';

function Databases() {
  const [databases, setDatabases] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    async function fetchInstances() {
      const response = await fetch('http://localhost:3002/databases');
      const data = await response.json();
      setDatabases(data.databases);
    }
    fetchInstances();
  }, []);

    // Define a função de classificação com base na ordenação atual
  const sortByName = (a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (nameA > nameB) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  };

  // Define a função para alternar a ordenação atual
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  console.log(databases);
  return (
    <Container>
      <h1>Instâncias RDS - STC</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>
              Nome{" "}
              <Button variant="link" onClick={toggleSortOrder}>
                {sortOrder === "asc" ? "▲" : "▼"}
              </Button>
            </th>
            <th>Engine</th>
            <th>Version</th>
            <th>Size</th>
            <th>Maintanence</th>
            <th>Armazenamento</th>
          </tr>
        </thead>
        <tbody>
        {databases.sort(sortByName).map((database, index) => (
            <tr key={index}>
              <td>{database.name}</td>
              <td>{database.engine}</td>
              <td>{database.engine_version}</td>
              <td>{database.size}</td>
              <td>{database.maintanence}</td>
              <td>{database.storage} GiB</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Databases;