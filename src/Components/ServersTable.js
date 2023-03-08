import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import Loading from "../Pages/Loading";
import "../index.css";

function ServersTable(props) {
  const [instances, setInstances] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchInstances() {
      const response = await fetch(
        "https://d3f3ubvh03.execute-api.us-east-1.amazonaws.com/stage/instances"
      );
      const data = await response.json();
      setInstances(data.body.instances);
      setLoading(true);
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

  // Filtra a lista de instâncias com base no estado filterName passado pelo componente NameFilter
  const filteredInstances = instances.filter((instance) =>
    instance.name.toLowerCase().includes(props.filterName.toLowerCase())
  );

  return (
    <Container>
      {loading === false ? (
        <Loading />
      ) : (
        <div>
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
                { /* <th>Sistema operacional</th> */}
                <th>CPUs</th>
                <th>Memória</th>
                <th>Armazenamento</th>
              </tr>
            </thead>
            <tbody>
              {filteredInstances.sort(sortByName).map((instance, index) => (
                <tr key={index}>
                  <td>{instance.name}</td>
                  <td>{instance.public_ip}</td>
                  <td>{instance.private_ip}</td>
                  { /* <td>{instance.operating_system}</td> */ }
                  <td>{instance.cpu}</td>
                  <td>{instance.memory}</td>
                  <td>{instance.storage}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
}

export default ServersTable;
