import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {


  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;
  @Input() index: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onDeletePost(index: number) {
    this.postsService.removePost(this.index);
  };


  onLike() {
    this.postsService.loveIt(this.index);
  };

  onDislike() {
    this.postsService.dontLoveIt(this.index)
  };

}
