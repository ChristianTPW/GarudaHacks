import Link from "next/link";
import React from "react";
import Image from "next/image";

function TabBar() {
  return (
    <div className="tabbar-container">
      <Link href="/">
        <Image src="/icons/home.svg" width={24} height={24} alt="home-icon" />
      </Link>

      <Link href="/">
        <Image
          src="/icons/search.svg"
          width={24}
          height={24}
          alt="search-icon"
        />
      </Link>

      <Link href="/">
        <div className="upload-btn">
        <Image src="/icons/plus-white.svg" width={24} height={24} alt="plus-icon" />
        </div>
      </Link>

      <Link href="/">
        <Image
          src="/icons/people.svg"
          width={24}
          height={24}
          alt="people-icon"
        />
      </Link>

      <Link href="/">
        <Image src="/icons/user.svg" width={24} height={24} alt="user-icon" />
      </Link>
    </div>
  );
}

export default TabBar;
