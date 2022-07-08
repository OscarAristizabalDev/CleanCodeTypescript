import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebApiPostServices } from './05-dependency-c';


// Main
(async () => {

    //const provider = new LocalDataBaseService()
    //const provider = new JsonDataBaseService()
    const provider = new WebApiPostServices()

    // Puedo enviar cualquier provider data que estos implementan las clase abstracta PostProvider
    // Sea cual sea el provedor que se envia, no vamos a tener problema
    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();