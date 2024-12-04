import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Blogs } from '../models/blogs.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  // url = "https://blogsbackend-d1a7.onrender.com"
  url = "https://recrutory-blogs-backend.onrender.com"

  constructor(private http:HttpClient) { }

  getAllBlogs(){
    return this.http.get<any>(`${this.url}/api/blogs`).pipe(
      map(response => {
        const postsArray: Blogs[] = [];
        for (const postId in response) {
          if (response.hasOwnProperty(postId)) {
            const post = response[postId];
            const blogPost: Blogs = {
              _id: post._id,
              title: post.title,
              date: post.date,
              imageUrl: post.imageUrl,
              intro: post.intro
              // imageUrl2: post.imageUrl2,
              // content2: post.content2
            };
            postsArray.push(blogPost);
          }
        }
        return postsArray;
      })
    );
  }

  getOneBlog(id: any){
    return this.http.get(`${this.url}/api/blogs/${id}`);
  }

}
