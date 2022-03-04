import { typeStudents } from './types/typeStudents';

export const studentsReducers = (state = initialState, action) => {
  switch (action.type) {
    case typeStudents.crear:
      return {
        ...state,
      };
    case typeStudents.actualizar:
      return {
        ...state,
      };
    case typeStudents.consultar:
      return {
        ...state,
      };
    case typeStudents.borrar:
      return {
        ...state,
      };
    default:
      return state;
  }
};
