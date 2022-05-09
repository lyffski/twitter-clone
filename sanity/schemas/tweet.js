export default { // same as the typings.d.ts of Tweet[]
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text', //content of tweet
      title: 'Text in Tweet',
      type: 'string',
    },
    {
      name: 'blockTweet',
      title: 'Block Tweet',
      description: 'ADMIN Controls: Toggle if Tweet is deemed inapproprate',
      type: "boolean",
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name:"profileImg",
      title: "Profile Image",
      type: "string"
    },
    {
      name: "image",
      title: "Tweet image",
      type: "string"
    }
  ]
}
