import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Candidat } from "../classes/candidat";
import { catchError, tap} from 'rxjs/operators';
const apiUrl = 'http://localhost:9889/candidats';
@Injectable({
 providedIn: 'root'
})


@Injectable()
export class CandidatService  {
  
  constructor(private http: HttpClient) { }

  

addCandidat(candidat: Candidat): Observable<any> {
return this.http.post<any>(`${apiUrl}` + '/newCandidat', candidat)
}




}


