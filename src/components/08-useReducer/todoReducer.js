export const todoReducer = (state = [], action) => {
  switch (action?.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "complete":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};
