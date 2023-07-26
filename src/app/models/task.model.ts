export interface Task {
    id: number,
    Title: string,
    Description: string,
    Created: Date,
    Updated: Date,
    Status: boolean,
    TotalHours: number,
    Hours: number,
    UserId: number
}