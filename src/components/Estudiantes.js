import React from 'react';
import {useForm} from '../hooks/useForm';


const Estudiantes = () => {

  let [values, reset, handleInputChange] = useForm({
    nombre: '',
    apellido: '',
    codigo: '',
    nota: '',   

  })

  const {nombre, apellido, codigo, nota} = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(studentsReducers(values))
    reset();
  }



  return(
    <div>
      <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre estudiante</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="Enter nombre" value={nombre} onChange={handleInputChange} />

                    <Form.Label>Apellido estudiante</Form.Label>
                    <Form.Control type="text" name="apellido" placeholder="Enter descripcion" value={apellido} onChange={handleInputChange} />

                    <Form.Label>Codigo estudiante</Form.Label>
                    <Form.Control type="text" name="codigo" placeholder="El codigo contine dos letras y 3 numeros" value={codigo} onChange={handleInputChange} />

                    <Form.Label>Nota</Form.Label>
                    <Form.Control type="number" name="nota" value={nota} onChange={handleInputChange} />
                
                    
                
                </Form.Group>

                <Button variant="secondary">Crear nuevo estudiante</Button>
             
            </Form>
    </div>
  )
}