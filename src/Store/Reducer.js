

export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD-IDEA':
      return {
        ...state,
        ideas: [...state.ideas, action.payload]
      };
    case 'DELETE-IDEA':
      return {
        ...state,
        ideas: state.ideas.filter(idea => idea !== action.payload)
      };
    case 'TOGGLE-FAVORITE':
      return {
        ...state,
        ideas: state.ideas.map(idea => {
          if(idea === action.payload) {
            idea.favorite = !idea.favorite;
          }
          return idea
        })
      };

    default:
      return state;
  }
}