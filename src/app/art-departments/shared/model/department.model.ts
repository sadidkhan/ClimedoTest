export interface Department{
    departmentId: number;
    displayName: number;
}

export interface GetDepartmentResponse{
    departments: Array<Department>;
}
