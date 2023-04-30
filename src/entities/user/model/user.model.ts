enum Role {
    TEACHER,
    STUDENT,
    ADMIN,
    ORAGANIZATOR
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