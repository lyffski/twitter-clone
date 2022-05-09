

import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity';
import { groq } from "next-sanity"

const commentQuery = groq`
    *[_type == "comment" && references(*[_type == "tweet" && _id == $tweetId]._id)]
    {
        _id,
        ...
    }
`   //see groq doc (unusally syntax)


type Data = Comment[];



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { tweetId } = req.query
    const comments: Comment[] = await sanityClient.fetch(commentQuery, {tweetId,})

    console.log("getComments: ", comments)
    res.status(200).json(comments)
}
