import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  students=[
    {id:1,sname:'Arjun',age:20,class:'Bsc cs',phone:9898765894,email:"arjun@gmail.com",fee:29000},
    {id:2,sname:'Rahul',age:19,class:'BCA',phone:9898765845,email:"rahul@gmail.com",fee:28000},
    {id:3,sname:'Lal',age:18,class:'Bsc maths',phone:9898765890,email:"lal@gmail.com",fee:30000},
    {id:4,sname:'Jiya',age:21,class:'Bsc cs',phone:9898793894,email:"jiya@gmail.com",fee:29000}
  ]
}
