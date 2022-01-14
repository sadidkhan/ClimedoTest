export interface Department{
    departmentId: number;
    displayName: string;
}

export interface GetDepartmentResponse{
    departments: Array<Department>;
}
