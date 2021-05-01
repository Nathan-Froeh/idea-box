
export const initialState = {
  ideas: [{title: 'test title 1', message: 'test message 1'}]
}

export const reducer = (state, action) => {
  console.log(state, action)
  switch(action.type) {
    case 'ADD-IDEA':
      return {
        ...state,
        ideas: [...state.ideas, action.payload]
      };
    case 'GET-IDEAS':
      return {
        ...state,
        ideas: action.payload
      };
    case 'DELETE-IDEA':
      return {
        ...state,
        ideas: state.ideas.filter(idea => idea !== action.payload)
      };

    default:
      return state;
  }
}