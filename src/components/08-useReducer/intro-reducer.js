const initialState = [
  {
    id: 1,
    todo: "Comprar manzanas",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "ADD_TODO") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Comprar leche",
  done: false,
};

const action = {
  type: "ADD_TODO",
  payload: newTodo,
};

todos = todoReducer(todos, action);

console.log(todos);
