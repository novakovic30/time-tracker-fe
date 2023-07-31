export interface Task {
    id: number,
    title: string,
    description: string,
    created: Date,
    updated: Date,
    status: boolean,
    totalHours: number,
    hours: number,
    userId: number
}