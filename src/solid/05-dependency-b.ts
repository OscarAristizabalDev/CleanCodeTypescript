import { JsonDataBaseService, LocalDataBaseService, PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    // Se aplica inyección de dependencias, el cual se inyecta la clase abstract en vez de las clases que la implementa
    constructor(private postProvide: PostProvider) {}

    async getPosts() {
        // const jsonDB = new LocalDataBaseService();
        //const jsonDB = new JsonDataBaseService();
        //this.posts = await jsonDB.getPosts();
        this.posts = await this.postProvide.getPosts();

        return this.posts;
    }
}