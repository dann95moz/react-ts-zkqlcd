import React from 'react';
import { useForm } from '../hooks/useForm';
import { Form, Button } from 'react-bootstrap';

const Estudiantes = () => {
  let [values, reset, handleInputChange] = useForm({
    nombre: '',
    apellido: '',
    codigo: '',
    nota1: '',
    nota2: '',
    nota3: '',
  });

  const { nombre, apellido, codigo, nota1, nota2, nota3 } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    promedioNotas(nota1, nota2, nota3);
    dispatch(studentsReducers(values));
    reset();
  };

  const promedioNotas = (nota1, nota2, nota3) => {
    let nota = (nota1 + nota2 + nota3) / 3;
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre estudiante</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Enter nombre"
            value={nombre}
            onChange={handleInputChange}
          />

          <Form.Label>Apellido estudiante</Form.Label>
          <Form.Control
            type="text"
            name="apellido"
            placeholder="Enter descripcion"
            value={apellido}
            onChange={handleInputChange}
          />

          <Form.Label>Codigo estudiante</Form.Label>
          <Form.Control
            type="text"
            name="codigo"
            placeholder="El codigo contine dos letras y 3 numeros"
            value={codigo}
            onChange={handleInputChange}
          />

          <Form.Label>Nota 1</Form.Label>
          <Form.Control
            type="number"
            name="nota1"
            value={nota1}
            onChange={handleInputChange}
          />
          <Form.Label>Nota 2</Form.Label>
          <Form.Control
            type="number"
            name="nota2"
            value={nota2}
            onChange={handleInputChange}
          />
          <Form.Label>Nota 3</Form.Label>
          <Form.Control
            type="number"
            name="nota3"
            value={nota3}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="secondary">Crear nuevo estudiante</Button>
      </Form>
      <ListaNotas />
    </div>
  );
};
export default Estudiantes;
