import { typeStudents } from './types/typeStudents';



// ------------------- sincronico-----------------

export const crearEstudiante = (estudiante) => {
  return {
    type: typeStudents.crear,
    payload: estudiante,
  };
};

export const buscarEstudiante = (estudiante) => {
  return {
    type: typeStudents.buscar,
    payload: estudiante,
  };
};

export const actualizarEstudiante = (idEstudiante, estudiante) => {
  return {
    type: typeStudents.actualizar,
    payload: estudiante,
  };
};

export const borrarEstudiante = (idEstudiante) => {
  return {
    type: typeStudents.borrar,
    payload: idEstudiante,
  };
};
