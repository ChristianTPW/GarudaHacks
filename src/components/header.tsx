import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HeaderTimeline() {
  return (
    <div className="header-timeline-container">
        <Image src="/images/logo.svg" width={82.3} height={16} alt='header'/>
    <div className="row">
    <Link href="/">
        <Image
          src="/icons/bell.svg"
          width={24}
          height={24}
          alt="bell-icon"
        />
      </Link>
      <Link href="/">
        <Image
          src="/icons/chat.svg"
          width={24}
          height={24}
          alt="chat-icon"
        />
      </Link>
      <Link href="/">
        <Image
          src="/icons/chatBot.svg"
          width={24}
          height={24}
          alt="chatBot-icon"
        />
      </Link>
    </div>
    </div>
  )
}

export default HeaderTimeline