import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { fetchTweets } from '../utils/fetchTweets'
import { Tweet } from "../typings"
import { Toaster } from 'react-hot-toast'

interface Props{
  tweets: Tweet[]
}


const Home = ({ tweets }: Props) => { //tweets deconstructed from "props"-obj
  console.log("tweets-test", tweets)

  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
     <Head><title>Twitter 2.0</title></Head>
     <Toaster />

     <h1>
       <main className='grid grid-cols-9'>
         
         <Sidebar />
         
         <Feed tweets={tweets}/>
         
         <Widgets />
       </main>
     </h1>
    </div>
  )
}

export default Home

export const getSeverSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets(); //call API, by utils/fetchTweets()
  return{
    props:{
      tweets,
    },
  }
}