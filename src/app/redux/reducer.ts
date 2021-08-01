// todo-app-angular/src/app/redux/reducer.ts
export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
          return [...state, action.payload];
        default:
          return state;
      }
}