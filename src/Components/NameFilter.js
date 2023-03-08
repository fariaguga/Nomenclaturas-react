import React from 'react';
import { Form } from 'react-bootstrap';

function NameFilter(props) {
  return (
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Filtrar por nome:</Form.Label>
        <Form.Control type="text" placeholder="Digite o nome" value={props.filterName} onChange={props.onFilterNameChange} />
      </Form.Group>
    </Form>
  );
}

export default NameFilter;
