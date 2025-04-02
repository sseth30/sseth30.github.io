import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        {cardInfo.footer.map((v, i) => {
  const clickable = v.url && v.url.trim() !== "";
  return clickable ? (
    <span
      key={i}
      className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
      onClick={() => openUrlInNewTab(v.url, v.name)}
      style={{ cursor: "pointer" }}
    >
      {v.name}
    </span>
  ) : (
    <span
      key={i}
      className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
      style={{ cursor: "default" }}
    >
      {v.name}
    </span>
  );
})}
      </div>

      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>

      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
  const clickable = v.url && v.url.trim() !== "";
  return clickable ? (
    <span
      key={i}
      className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
      onClick={() => openUrlInNewTab(v.url, v.name)}
      style={{ cursor: "pointer" }}
    >
      {v.name}
    </span>
  ) : (
    <span
      key={i}
      className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
      style={{ cursor: "default" }}
    >
      {v.name}
    </span>
  );
})}
      </div>
    </div>
  );
}
