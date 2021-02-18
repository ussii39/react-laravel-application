import { createSelector } from "reselect";

const TodosSelector = (state) => state.todos;

export const getTodo = createSelector([TodosSelector], (state) => state.tasks);
