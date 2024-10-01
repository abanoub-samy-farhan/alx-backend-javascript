export default function createEmployeesObject(departmentName, employees) {
    const depr = {
        [departmentName]: [
            ...employees
        ]
    }
    return depr;
}
