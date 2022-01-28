import React from 'react';

const SkillsCard = props => {
    return(
    <div className="skills-card">
        <p className="skills-text">{props.text}</p>
    </div>
    );
};

export default SkillsCard;