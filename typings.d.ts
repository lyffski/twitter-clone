// d = type defintion files etc
export type TweetBody = { // values appended in DIC:schemas
    text: string
    username: string
    profileImg: string
    image?: string
} 

export interface Tweet extends TweetBody{
    _id: string // generic form sanity "_" since those are coming form sanity
    _cratedAt: string 
    _updatedAt: string
    _rev: string
    _type: "tweet"
    blockTweet: boolean //bannig opt
}

export type CommentBody = { // values appended in DIC:schemas
    comment: string
    tweetId: string
    username: string
    profileImg: string
}

export interface Comment extends CommentBody{
    _createdAt: string
    _id: string
    _rev: string
    _type: "comment"
    _updatedAt: string
    tweet: { //an array in an array, thats why in Tweet.tsx useState<Comment[]>([]), while ([]) mean an array is passes
        _ref: string
        _type: "reference"
    }
}