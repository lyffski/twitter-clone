import { Tweet } from '../typings'

export const fetchTweets = async () => {
    //todo try-block
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`) // only absoliute URL allowed

    const data = await res.json();
    const tweets: Tweet[] = data.tweets;

    return tweets
}