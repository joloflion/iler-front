import { Post } from 'src/app/shared/models/post';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

   posts: Post[] = [
    {
      id: "1",
      title: "Culture de tomate",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem",
      target: 2000,
      rised: 200,
      likes: 20,
      remainingTime: 3000


    },
    {
      id: "2",
      title: "Bay soble",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem",
      target: 2000,
      rised: 300,
      likes: 20,
      remainingTime: 3000

    },
    {
      id: "3",
      title: "Bay khal",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem",
      target: 2000,
      rised: 200,
      likes: 20,
      remainingTime: 3000


    },
    {
      id: "4",
      title: "Culture de fraise",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem",
      target: 2000,
      rised: 40,
      likes: 20,
      remainingTime: 3000


    },
    {
      id: "5",
      title: "Cultiver du mais",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem",
      target: 2000,
      rised: 100,
      likes: 20,
      remainingTime: 3000


    } ];


  getPosts(): Post[]{
    return this.posts
  }

  getById(id: string): Post {
    return this.posts.find(p => p.id == id)!;
  }
}
