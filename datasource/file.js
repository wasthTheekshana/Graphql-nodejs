const employees=require('../data/employees.json')
const{DataSource}=require('apollo-datasource')
const _ =require('lodash')

class EmployeeServeice extends DataSource{

constructor(){
    super();
}

initialize(config){

}

getEmployees(args){
    return _.filter(employees,args);
}

getEmployeeById(id){
    return employees.filter(function(employee){
        return employee.id == id;
    });
}

}

module.exports = EmployeeServeice;