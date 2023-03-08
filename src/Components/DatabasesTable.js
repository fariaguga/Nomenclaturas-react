import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import Loading from "../Pages/Loading";
import '../index.css';

function DatabasesTable(props) {
  const [databases, setDatabases] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchInstances() {
      const response = await fetch('https://d3f3ubvh03.execute-api.us-east-1.amazonaws.com/stage/databases');
      const data = await response.json();
      setDatabases(data.body.databases);
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
  const filteredDatabases = databases.filter((database) =>
    database.name.toLowerCase().includes(props.filterName.toLowerCase())
  );

  // console.log(databases);
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
                <th>Engine</th>
                <th>Version</th>
                { /* <th>Size</th> */ }
                <th>Maintanence</th>
                <th>Armazenamento</th>
              </tr>
            </thead>
            <tbody>
            {filteredDatabases.sort(sortByName).map((database, index) => (
            <tr key={index}>
              <td>{database.name}</td>
              <td>{database.engine}</td>
              <td>{database.engine_version}</td>
              { /* <td>{database.size}</td> */ }
              <td>{database.maintanence}</td>
              <td>{database.storage} GiB</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
}

export default DatabasesTable;