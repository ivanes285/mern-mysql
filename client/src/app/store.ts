import  TaskSlice  from '@/features/Task/TaskSlice';
import { ITask } from '@/models/Task';
import { configureStore } from '@reduxjs/toolkit';

export interface AppStore {
    tasks:ITask[]
}

export const store = configureStore<AppStore>({
    reducer: {
      tasks: TaskSlice,

    },
  })

