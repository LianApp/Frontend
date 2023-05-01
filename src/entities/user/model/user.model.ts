export enum Role {
    TEACHER = 'teacher',
    STUDENT = 'student',
    ADMIN = 'admin',
    ORAGANIZATOR = 'organizator'
}

export type User = {
    id: number
    name: string
    role: Role
    email: string
    password: string
    oraganization_id: number
    group_id: number
}