export class Post {
    postId: string;
    parentId:string;
    title: string;
    content: string;
    author: string;
    link: string;
    createdDate: any;
    type: any;

    constructor() {
        this.title = '';
        this.content = '';
    }
}
