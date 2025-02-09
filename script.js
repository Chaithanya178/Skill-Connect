document.addEventListener("DOMContentLoaded", () => {
    const skills = [
        { name: "Web Development", mentor: "Alice" },
        { name: "Photography", mentor: "Bob" }
    ];
    const mentors = [
        { name: "Alice", skill: "Web Development" },
        { name: "Bob", skill: "Photography" }
    ];
    
    // Display Skills
    const skillList = document.getElementById("skill-list");
    if (skillList) {
        skills.forEach(skill => {
            let skillItem = document.createElement("div");
            skillItem.innerHTML =` <h3>${skill.name}</h3><p>Mentor: ${skill.mentor}</p>`;
            skillList.appendChild(skillItem);
        });
    }

    // Display Mentors
    const mentorList = document.getElementById("mentor-list");
    if (mentorList) {
        mentors.forEach(mentor => {
            let mentorItem = document.createElement("div");
            mentorItem.innerHTML =` <h3>${mentor.name}</h3><p>Teaches: ${mentor.skill}</p>`;
            mentorList.appendChild(mentorItem);
        });
    }
});