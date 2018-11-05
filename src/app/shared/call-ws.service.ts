import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { AllInfoVideoOoyala } from '../models/all-info-video-ooyala';
import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';


declare var window: any;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CallWSService {
  constructor(private http: HttpClient,
    private messageService: MessageService ) { }


       /** GET hero by id. Will 404 if id not found */
   _getAllInfoOoyala(param: string): Observable<AllInfoVideoOoyala> {
    console.log(' --- _getAllInfoOoyala [ CallWSService ] --- ');

    console.log(' ws_info_ooyala : ' + window.ws_info_ooyala_servlet);
   const url = window.ws_info_ooyala_servlet;
     // const url = 'https://dev-unotv.tmx-internacional.net/wps/PA_MX_PBO_InfoOoyala/GetAllInfoOoyalaServlet';

  return this.http.post<AllInfoVideoOoyala>(url, { idContent : param } , httpOptions ).pipe(
      tap(_ => this.log(`fetched _getAllInfoOoyala `)),
      catchError(this.handleError<AllInfoVideoOoyala>(`_getAllInfoOoyala `))
    );



  }




    private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.npm
      return of(error.error.message as T);
     // return error.message;
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`usuarioService: ${message}`);
  }
}
