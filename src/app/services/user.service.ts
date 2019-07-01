import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  url = environment.api_url + '/user'
  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).subscribe(res => {
        resolve(res)
      })
    })
  }

  post(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, data).subscribe(res => {
        resolve(res)
      })
    })
  }

  put(id) {
    return new Promise((resolve, reject) => {
      this.http.put(this.url, id).subscribe(res => {
        resolve(res)
      })
    })
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url + '/' + id).subscribe(res => {
        resolve(res)
      })
    })
  }
}
