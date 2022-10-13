import React from "react";

type HomeProps = {
  subject: string;
  style: { [key in string]: string };
  onSidebar: () => void;
};

function Home({ subject, style, onSidebar }: HomeProps) {
  return (
    <div className="Home">
      <div className="Sidebar">
        <div className="Profile">
          <h2>안녕하세요</h2>
        </div>
        <div className="Search">검색</div>
        <div className="Notification">알림</div>
        <div className="Setting">설정</div>
      </div>
    </div>
  );
}

export default Home;
