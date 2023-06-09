import { Component, OnInit } from '@angular/core';
import { Post } from '../addpostform/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-dashboardposts',
  templateUrl: './dashboardposts.component.html',
  styleUrls: ['./dashboardposts.component.css'],
})
export class DashboardpostsComponent implements OnInit {
  posts: Post[];
  Id = localStorage.getItem('loggedUser');
  constructor(private postServ: PostService) {}

  ngOnInit(): void {
    const id = JSON.parse(this.Id);
    this.postServ.getPostsByUserId(id._id).subscribe((data) => {
      console.log(data);
      this.posts = data.posts.map((post) => {
        return {
          ...post,
          commentCount:post.comments.length,
          postId: post._id
        };
      });
      this.posts.sort((a,b)=>{
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime();
      })
    });
  }
}
