import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CodeAnalysisService } from './code-analysis.service';
import { CloneData } from '../../models/CloneData';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'

describe('CodeAnalysisService', () => {
  let service: CodeAnalysisService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CodeAnalysisService]
    });
    service = TestBed.inject(CodeAnalysisService);
    httpMock = TestBed.get(HttpTestingController);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrive post from the API via getCloneSnippet', () => {
    /*
    const dummyData: CloneData[] = [{
      cloneType: 1,
      referenceLocation: [1,2],
      inputLocation: [3,4],
      feedback: null,
      referenceFileName: 'test.java'
    },{
      cloneType: 2,
      referenceLocation: [4,6],
      inputLocation: [8,9],
      feedback: null,
      referenceFileName: 'test1.java'
    }];

    var inputFileString: string = "CodeInputContents"
    var referenceFileString: string = "ReferenceContents"
    

    service.getClones(inputFileString, referenceFileString).subscribe(data => {
          expect(data.length).toBe(2);
          expect(data).toEqual(dummyData);
    });

    const request = httpMock.expectOne('${service.baseUrl}')
    expect(request.request.method).toBe('GET');
    request.flush(dummyData);
    */
  });

  afterEach(() => {
    httpMock.verify();
  });

});
