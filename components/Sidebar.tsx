import React from 'react'
import SidebarRow from './SidebarRow'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Sidebar() {

  const { data: session } = useSession()
  
  return (


      <div className='col-span-2 flex flex-col items-center md:items-start'>
        <img 
          src="https://links.papareact.com/drq" 
          className="h-10 w-10 m-3"
          alt=""
        />
        <SidebarRow title="Home" Icon={HomeIcon}/>
        <SidebarRow Icon={HashtagIcon} title="Explore"/>
        <SidebarRow Icon={BellIcon} title="Notification"/>
        <SidebarRow Icon={MailIcon} title="Messages"/>
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
        <SidebarRow Icon={CollectionIcon} title="Lists"/>

        <SidebarRow onClick={session ? signOut: signIn} Icon={UserIcon} title={session ? "Sign Out" : "Sign In"}/>
        <SidebarRow Icon={DotsCircleHorizontalIcon} title="More"/>
      </div>
  )
}
