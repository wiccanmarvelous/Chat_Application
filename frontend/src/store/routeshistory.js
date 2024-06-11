import { createSlice } from '@reduxjs/toolkit';

const routesSlice = createSlice({
    name: 'routes',
    initialState: { routes: [], lastRoute: null },
    reducers: {
        setRoutesHistory(state, action) {
            state.lastRoute = state.routes[state.routes.length - 1];
            state.routes.push(action.payload);
        },
        removeLastRoute(state, action) {
            state.routes.pop();
        }
    }
})

export const routesActions = routesSlice.actions;
export default routesSlice.reducer;