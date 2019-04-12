import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private http: HttpClient,
		private header: HttpHeaders
	) { }



	// canActivate validate user logged in
	public IfLoggedIn() {
		if (localStorage.getItem('Token') &&  localStorage.getItem('SessionKey') && localStorage.getItem('SessionToken')) {
			
		}
	}
}
