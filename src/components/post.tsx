import React from "react";

function Post() {
  return (
    <div className="post-container">
      <div className="post-detail">
        <p>Anonymous</p>
        <p className="text-secondary">•</p>
        <p className="text-secondary">19h</p>
      </div>
      <div className="post-content">
        <p>
          Kematian Afif Maulana bukan sekadar tragedi pribadi, melainkan sebuah
          panggilan bagi kita semua untuk mendesak perubahan yang lebih besar
          dalam sistem penegakan hukum di Indonesia.Setiap nyawa berharga, dan
          setiap tindakan kekerasan harus diusut tuntas.Sebuah utas.
        </p>
      </div>
      <div className="action-container"></div>
    </div>
  );
}

export default Post;
