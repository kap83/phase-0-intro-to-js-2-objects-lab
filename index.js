const employee = {
    name: "",
    streetAddress: "",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value

    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee
}
   
function deleteFromEmployeeByKey(employee, key, value) {
    const employeeClone = {...employee}
    delete employeeClone[key]
    return employeeClone
}


function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];  
    return employee
}