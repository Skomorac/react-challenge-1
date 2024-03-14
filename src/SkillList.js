import React from "react";
import "./styles.css";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="🐎" color="blue" />
      <Skill skill="Javascript" emoji="🤖" color="yellow" />
      <Skill skill="React" emoji="🌐" color="orangered" />
      <Skill skill="Bootstrap" emoji="🎨" color="aqua" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default SkillList;
