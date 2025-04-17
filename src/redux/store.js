import { configureStore } from '@reduxjs/toolkit';
import kanbanReducer from './slices/KanbanSlice';
import ThemeReducer from './slices/ThemeSlice';

const store = configureStore({
    reducer: {
          kanban: kanbanReducer,
          theme: ThemeReducer,
    }
       
})
export default store;