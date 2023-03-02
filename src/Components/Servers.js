import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import "../index.css";

function Servers() {
  const [instances, setInstances] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    async function fetchInstances() {
      const response = await fetch("http://localhost:3001/instances");
      const data = await response.json();
      setInstances(data.instances);
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

  return (
    <Container>
      <h1>Instâncias EC2 - STC</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              Nome{" "}
              <Button variant="link" onClick={toggleSortOrder}>
                {sortOrder === "asc" ? "▲" : "▼"}
              </Button>
            </th>
            <th>IP público</th>
            <th>IP privado</th>
            <th>Sistema operacional</th>
            <th>Tipo de instância</th>
            <th>CPUs</th>
            <th>Memória</th>
            <th>Armazenamento</th>
          </tr>
        </thead>
        <tbody>
          {instances.sort(sortByName).map((instance, index) => (
            <tr key={index}>
              <td>{instance.name}</td>
              <td>{instance.public_ip}</td>
              <td>{instance.private_ip}</td>
              <td>{instance.operating_system}</td>
              <td>{instance.instance_type}</td>
              <td>{instance.cpu}</td>
              <td>{instance.memory}</td>
              <td>{instance.storage}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Servers;
