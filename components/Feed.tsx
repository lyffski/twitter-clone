import { RefreshIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import TweetBox from './TweetBox'
import { Tweet } from "../typings"
import TweetComponent from "../components/Tweet"
import { fetchTweets } from '../utils/fetchTweets'
import map from "react"
import toast from 'react-hot-toast'

interface Props {
  tweets: Tweet[]
}

function Feed({ tweets: tweetsProps }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProps)
  console.log("tweet-feed", tweets)

  //toast refresh
  const handleRefrash = async () => {
    const refreshToast = toast.loading("Refreshing...")

    const tweets = await fetchTweets();
    setTweets(tweets)

    toast.success("Feed Updated!",{
      id: refreshToast
    })
  }

  return (
    <div className='border-x col-span-7 max-h-screen overflow-scroll scrollbar-hide lg:col-span-5'>
        <div className='flex items-center justify-between'>
            <h1 className='p-5 front-bold text-xl pb-0'>Home</h1>
            <RefreshIcon onClick={handleRefrash} className="mr-5 mt-5 h-8 w-8  cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"/>
        </div>

        <div> 
        <TweetBox setTweets={setTweets}/> 
        </div>

        <div>
          {tweets?.map(tweet => (
            <TweetComponent key={tweet._id} tweet={tweet}/> //comments section
          ))}
        </div>
    </div>
  )
}

export default Feed