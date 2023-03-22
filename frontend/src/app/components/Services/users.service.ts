import { Page, QueryBuilder } from '../Util/pagination';
import { User } from './users.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  page: Page<User>
  users: User[] 

  baseUrl = "http://localhost:3001/users"

  constructor(
    private snackbar: MatSnackBar, 
    private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top" 
    })
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, user)
  }

  read(queryBuilder: QueryBuilder): Observable<Page<User>> {
    return this.http
    .get<User[]>(`${this.baseUrl}?${queryBuilder.buildQueryString()}`, {observe: 'response'})
    .pipe(
      map(response => <Page<User>>Page.fromResponse(response))
    )
  }

  update(user: User, id: string): Observable<User> {
    const url = (`${this.baseUrl}/${id}`)
    return this.http.put<User>(url, user)
  }

  delete(id: number): Observable<User> {
    const url = (`${this.baseUrl}/${id}`)
    return this.http.delete<User>(url)
  }

  readById(id: string): Observable<User> {
    const url = (`${this.baseUrl}/${id}`)
    return this.http.get<User>(url)
  }

  usersRead() {
      return this.http.get<User[]>(this.baseUrl)
      .pipe(map(response => {
        return response;
      }));
  }

  load() {
    location.reload()
  }
}