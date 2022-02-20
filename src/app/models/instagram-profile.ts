export interface InstagramProfile {
    username: string;
    postCount: number;
    title: string;
    biography: string;
    url: string;
    posts: InstagramPost[];
    followersCount: number;
    followingCount: number;
}

interface InstagramPost {
    imgUrl: string,
    videoUrl: string,
    is_video: boolean,
    caption: string,
    shortcode: string,
    likes: number,
    views: number,
    comments: number
}