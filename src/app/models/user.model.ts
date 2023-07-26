import { Task } from "./task.model";

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    tasks: Task[]
}