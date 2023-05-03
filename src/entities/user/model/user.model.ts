export enum Role {
    TEACHER = 'TEACHER',
    STUDENT = 'STUDENT',
    ADMIN = 'ADMIN',
    ORAGANIZATOR = 'ORGANIZATOR'
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