// Import our actions from our actions file

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT:
      return {
  // TODO

      };
    case REMOVE_STUDENT:
      return {
        ...state,
        students: [...state.students].filter(
          (student) => student.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
