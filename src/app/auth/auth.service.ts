import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UsernameAvailableResponse {
  available: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public usernameAvailable(username: string):Observable<any> {
    return this.http.post<UsernameAvailableResponse>(
      `https://api.angular-email.com/auth/username`,
      {
        username: username,
      }
    );
  }
}
