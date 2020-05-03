import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CloneData} from "../../models/CloneData";
import {Snippet} from "../../models/file-inputs/Snippet";

@Injectable({
  providedIn: 'root'
})
export class CodeAnalysisService {


  // private baseUrl = 'http://localhost:8080/clones';
  private baseUrl = 'https://code-clone-detector.herokuapp.com/clones';
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

  getClonesSnippet(inputFileString: string, referenceFileString: string): Observable<CloneData[]> {
    const body = {
      "inputFile": inputFileString,
      "referenceFile": referenceFileString
    };
    let inputData: InputData = new InputData(inputFileString, referenceFileString);
    return this.http.post<CloneData[]>(this.baseUrl, body, this.httpOptions);
  }


  getClonesProject(inputFileString: string, referenceProject: Snippet[]):Observable<CloneData[]> {
    const body = {
      "inputFileString": inputFileString,
      "referenceProject": referenceProject

    };
    let url = this.baseUrl + "/project";
    // console.log(JSON.stringify(body, null, 2));
    return this.http.post<CloneData[]>(url, body, this.httpOptions);
  }



}


export class InputData {
  inputFile: string;
  referenceFile: string;

  constructor(input: string, reference: string) {
    this.inputFile = input;
    this.referenceFile = reference;
  }
}
