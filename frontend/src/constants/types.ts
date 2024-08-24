export interface User {
    email: string;
    username: string;
    password: string;
}

export interface Post {
    title: string;
    content: string;
    author: string;
    createdAt: Date;
}

export interface Comment {
    content: string;
    author: string;
    postId: string;
    createdAt: Date;
}