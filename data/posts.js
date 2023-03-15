import { USERS } from "./users";

export const POSTS = [
    {
        username: USERS[0].name,
        profilePicture: USERS[0].avatar,
        imageURL: 'https://images.unsplash.com/photo-1675278608161-4b8ec9a89f8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
        likes: 6666,
        caption: 'Cat Linh-Ha Dong high station 😘',
        comments: [
            {
                username: 'zensnif_',
                comment: 'Beautiful pic!',
            },
            {
                username: '_anhh.tu',
                comment: 'Train passed the station, we passed the memories 😢'
            },
        ],

    },
    {
        username: USERS[1].name,
        profilePicture: USERS[1].avatar,
        imageURL: 'https://images.unsplash.com/photo-1678792038590-2ad155462402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        likes: 3,
        caption: 'Cat Linh-Ha Dong high station 😘',
        comments: [
            {
                username: 'zensnif_',
                comment: 'Beautiful pic!',
            },
            {
                username: '_anhh.tu',
                comment: 'Train passed the station, we passed the memories 😢'
            },
        ],

    },
    {
        username: USERS[2].name,
        profilePicture: USERS[2].avatar,
        imageURL: 'https://images.unsplash.com/photo-1678791589088-f26ed2590a21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
        likes: 62,
        caption: 'Cat Linh-Ha Dong high station 😘',
        comments: [
            {
                username: '_anhh.tu',
                comment: 'Train passed the station, we passed the memories 😢'
            },
        ],

    },
    {
        username: USERS[3].name,
        profilePicture: USERS[3].avatar,
        imageURL: 'https://images.unsplash.com/photo-1678750267527-4c3f55e32149?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        likes: 30,
        caption: 'Cat Linh-Ha Dong high station 😘',
        comments: [
            {
                username: '_anhh.tu',
                comment: 'Train passed the station, we passed the memories 😢'
            },
        ],

    },
]