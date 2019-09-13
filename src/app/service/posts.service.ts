import { Subject } from 'rxjs';
import { Post } from '../model/post.model';

export class PostsService {

    postsSubject = new Subject<any[]>();

    private posts = [
        {
            index: 0,
            title: 'Mon premier post',
            content: 'Je suis le contenu du post 1',
            loveIts: 0,
            created_at: new Date
        },
        {
            index: 1,
            title: 'Mon deuxième post',
            content: 'Je suis le contenu du post 2',
            loveIts: -1,
            created_at: new Date
        },
        {
            index: 2,
            title: 'Encore un post',
            content: 'Je suis le contenu du post 3',
            loveIts: 1,
            created_at: new Date
        }
    ];

    emitPosts() {
        this.postsSubject.next(this.posts.slice());
    }

    createNewPost(post: Post) {
        this.posts.push(post);
        this.emitPosts();
    }

    removePost(index: number) {
        this.posts.splice(index, 1);
        this.emitPosts();
    }

    loveIt(index: number) {
        this.posts[index].loveIts++;
        this.emitPosts();
    }

    dontLoveIt(index: number) {
        this.posts[index].loveIts--;
        this.emitPosts();
    }

}


