import Image from "next/image";
import React from "react";

function Post() {
  return (
    <div className="post-item-container">
      <div className="post-detail">
        <Image
          className="avatar"
          src="/images/budi-arie.png"
          width={32}
          height={32}
          alt="avatar"
        />
        <div className="row">
          <p className="bold">Anonymous</p>
          <p className="text-secondary">•</p>
          <p className="text-secondary">19h</p>
        </div>
      </div>
      <div className="post-content row">
        <div className="line col">
          <div className="line-item"></div>
          <Image
            src="/images/line-curve.svg"
            width={32}
            height={20}
            alt="line-curve"
          />
          <div className="line-item"></div>
        </div>
        <div className="col">
          <p>
            Kematian Afif Maulana bukan sekadar tragedi pribadi, melainkan
            sebuah panggilan bagi kita semua untuk mendesak perubahan yang lebih
            besar dalam sistem penegakan hukum di Indonesia.Setiap nyawa
            berharga, dan setiap tindakan kekerasan harus diusut tuntas.Sebuah
            utas.
          </p>
        </div>
      </div>
      <div className="action-container"></div>
    </div>
  );
}

export default Post;
