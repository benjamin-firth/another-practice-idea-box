export const activityReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return [...state, action.activity];
    default:
      return state;
  }
};