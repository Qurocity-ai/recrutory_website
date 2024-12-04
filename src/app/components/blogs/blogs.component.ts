import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../services/blogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit{
  blogPosts: any;
  loading: boolean = true;
  constructor(private blog:BlogsService,private route:Router) {}

  ngOnInit(): void {
    this.blog.getAllBlogs().subscribe({
      next:(res:any) =>{
        this.blogPosts = res;
        this.loading =false;
      },
      error: (err:any)=> {
        console.error(err);
      }
    })

  }

  openBlog(id: any){
    this.route.navigate(['blogs/',id]);
  }
  
}
