import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CloneData} from "../../models/CloneData";

@Injectable({
  providedIn: 'root'
})
export class CodeAnalysisService {


  private baseUrl = 'http://localhost:8080/clones';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  getClones(inputFileString: string, referenceFileString: string): Observable<any> {
    let inputData = [inputFileString, referenceFileString];
    let params = new HttpParams();
    params = params.append('cloneStrings', inputData.join(', '));
    return this.http.get(this.baseUrl, {params: params});

    // return this.http.get(`${this.baseUrl}/${id}`);
  }

  getClones2(inputFileString: string, referenceFileString: string): Observable<CloneData[]> {
    const body = {
      "inputFile": inputFileString,
      "referenceFile": referenceFileString
    };
    let inputData: InputData = new InputData(inputFileString, referenceFileString);
    return this.http.post<CloneData[]>(this.baseUrl, body, this.httpOptions);
  }


  // createEmployee(employee: Object): Observable<Object> {
  //   return this.http.post(`${this.baseUrl}`, employee);
  // }

}


export class InputData {
  inputFile: string;
  referenceFile: string;

  constructor(input: string, reference: string) {
    this.inputFile = input;
    this.referenceFile = reference;
  }
}
