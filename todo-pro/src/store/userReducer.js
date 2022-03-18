const defaultState = {
  todo: [],
};

export const userReducer = (state = defaultState, action) => {
  console.log("STATE:", state);
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, todo: [...state.todo, action.payloader] };
    default:
      return state;
  }
};
