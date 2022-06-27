import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  url = environment.API_URL;

  constructor(private http: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url + '/comment');
  }

  getCommentByType(type: string): Observable<Comment> {
    return this.http.get<Comment>(this.url + '/comment/' + type);
  }
  
  getComment(id: string): Observable<Comment> {
    return this.http.get<Comment>(this.url + '/comment/' + id);
  }

  deleteComment(id: string): Observable<string> {
    return this.http.delete(this.url + '/comment/' + id, { responseType: 'text' });
  }

  addComment(comment: Comment): Observable<string> {
    return this.http.post(this.url + '/comment', comment, { responseType: 'text' });
  }

  editComment(id: string, comment: Comment): Observable<string> {
    return this.http.put(this.url + '/comment/' + id, comment, {
      responseType: 'text',
    });
  }
}
