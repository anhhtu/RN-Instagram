import { USERS } from "./users";

export const POSTS = [
    {
        username: USERS[4].name,
        profilePicture: USERS[4].avatar,
        imageURL: 'https://images.unsplash.com/photo-1675278608161-4b8ec9a89f8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
        likes: 666,
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

    }
]