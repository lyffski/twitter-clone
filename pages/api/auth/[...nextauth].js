import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"

export default NextAuth({

    providers:[
        // can config one or more providers
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
            version: "2.0" // opt-in to Tiwtter Oauth 2.0
        })
        //add more providesr here
    ]
})