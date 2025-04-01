import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <Link to="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
  <a href="/sseth/#skills">Skills</a>
</li>
<li>
  <a href="/sseth/#experience">Work Experiences</a>
</li>
<li>
  <a href="/sseth/#projects">Open Source</a>
</li>
<li>
  <a href="/sseth/#achievements">Achievements</a>
</li>
<li>
  <a href="/sseth/#blogs">Blogs</a>
</li>
<li>
  <a href="/sseth/#talks">Talks</a>
</li>
<li>
  <a href="/sseth/#resume">Resume</a>
</li>
<li>
  <a href="/sseth/#contact">Contact Me</a>
</li>

          <li>
        <Link to="/about">About Me</Link>
      </li>
        <li>
        <div>
        <ToggleSwitch />
    </div>
      </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
