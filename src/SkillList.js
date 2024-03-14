import React from "react";
import "./styles.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "REACT.JS",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Bootstrap",
    level: "intermediate",
    color: "#C3DCAF",
  },
];

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <Skill
          key={index}
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export default SkillList;
