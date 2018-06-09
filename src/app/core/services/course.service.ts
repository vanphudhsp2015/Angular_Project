import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';

@Injectable()
export class CourseService {

    private url: string = "http://192.168.3.35:8080/api/";

    constructor(private http: Http) { }

    getAllCourse() {
        return this.http.get(this.url + "course")
            .map(response => response.json())
            .catch(this.handleError);
    }
    getCourse( id:number ) {
        return this.http.get(this.url + "course/"+id)
            .map(response => response.json())
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
