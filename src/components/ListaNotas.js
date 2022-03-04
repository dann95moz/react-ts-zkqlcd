import React from 'react';
import {useSelector useDispatch} from 'react-redux';


const ListaNotas = () => {

  const dispatch = useDispatch();

  const {estudiantes} = useSelector(store => store.estudiantes)

  return(
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Codigo Estudiante</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota 3</th>
            <th>Nota Final</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          
        </tbody>
      </Table>
    </div>
  );
};

export default ListaNotas;