import { Comment } from "../typings"

export const fetchComments = async (tweetId: string) => {
    const res = await fetch(`/api/getComments?tweetId=${tweetId}`) // ${tweetId} == undefined, as long as the first api does not come thrug the index.js etc

    const comments: Comment[] = await res.json()

    return comments
}
