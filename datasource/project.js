const { RESTDataSource }=require('apollo-datasource-rest')

class ProjectService extends RESTDataSource {

    constructor() {
        super();
       this.baseURL='http://localhost:3000'; 
    }

    //restDtatsoucr already override this method
    // what happens is  it will create new instance and then uh replace the the override instance within within the uh rest uh data source there 18:53
    // is also rest
    // uh class right so therefore that is that

    getprojects() {
        return this.get('/projects').then(projects => { //promice handling
            return projects;
        })
        .catch((err) =>console.log(err));
    }

   async findprojectById(id) { 
        return await this.get(`/projects/${id}`)
    }

}

module.exports = ProjectService;