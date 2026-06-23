import {AuthService} from "./authService"
import TasksService from "./tasksService";
import { WorkspaceService } from "./workspaceService";

export const authService = new AuthService();
export const workspaceService = new WorkspaceService();
export const tasksService = new TasksService(); 
