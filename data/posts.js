import { USERS } from "./users";

export const POSTS = [
    {
        username: USERS[0].name,
        profilePicture: USERS[0].avatar,
        imageURL: 'https://images.unsplash.com/photo-1675278608161-4b8ec9a89f8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
        likes: 6666,
        caption: 'Nhan mot ngay duoc cho doi 😘',
        comments: [
            {
                username: 'zensnif_',
                comment: '越南 chứ k phải 江南',
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
        caption: '22.08.2018 - 22.08.2021',
        comments: [
            {
                username: 'zensnif_',
                comment: 'Hậu tu yeah ;)',
            },
            {
                username: '_anhh.tu',
                comment: 'Đừng biến trái tim bạn thành một con đường để ai cũng có thể đi qua mà hãy biến nó thành một bầu trời nơi mà tất cả mọi người đều mơ ước tới...'
            },
        ],

    },
    {
        username: USERS[2].name,
        profilePicture: USERS[2].avatar,
        imageURL: 'https://images.unsplash.com/photo-1678791589088-f26ed2590a21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
        likes: 62,
        caption: 'Ve que la nhu the nay dey a. 📸 photogr : yen_tmr❤️',
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
        caption: 'Lâu lâu mới lục lại. 25.10.2015 15:03 Hitachi Seaside Park #hoangdo😁',
        comments: [
            {
                username: '_anhh.tu',
                comment: 'Train passed the station, we passed the memories 😢'
            },
        ],

    },
]