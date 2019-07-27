import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map } from  'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  SERVER_URL: string = "http://localhost:8000";
  constructor(private httpClient: HttpClient) { 

  }

    public upload(data) {
    let uploadURL = `${this.SERVER_URL}/api/importExcel`;

    return this.httpClient.post<any>(uploadURL, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
}


    public makestatements() {
    let uploadURL = `${this.SERVER_URL}/api/makestatements`;

    return this.httpClient.get<any>(uploadURL)
}

   public invoices(data) {
    let uploadURL = `${this.SERVER_URL}/api/importExcel4`;

    return this.httpClient.post<any>(uploadURL, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
}


   public discount(data) {
    let uploadURL = `${this.SERVER_URL}/api/importExcel3`;

    return this.httpClient.post<any>(uploadURL, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
}


   public collectionbalance(data) {
    let uploadURL = `${this.SERVER_URL}/api/importExcel2`;

    return this.httpClient.post<any>(uploadURL, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
}


   public endingbalance(data) {
    let uploadURL = `${this.SERVER_URL}/api/importExcel5`;

    return this.httpClient.post<any>(uploadURL, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
}

public sendsms(number,id,month){

        return this.httpClient.get<any>('http://127.0.0.1:8000/api/send/sms/'+number+'/'+id+'/'+month)

}

public dueBalance(data){
      let uploadURL = `${this.SERVER_URL}/api/importExcel6`;

    return this.httpClient.post<any>(uploadURL, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
}



   public s(data) {   


    return this.httpClient.get<any>('http://127.0.0.1:8000/api/statements/' + data)

}

public customerStatement(customer, month){
      return this.httpClient.get<any>('http://127.0.0.1:8000/api/user/statement/' + customer+'/'+ month)


}
}
