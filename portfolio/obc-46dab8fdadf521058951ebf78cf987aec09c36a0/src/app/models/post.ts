export class Post {
    postId: string;
    parentId:string;
    title: string;
    content: string;
    author: string;
    codeId: string;
    createdDate: any;
    type: any;

    constructor() {
        this.title = '';
        this.content = '';
    }
}
