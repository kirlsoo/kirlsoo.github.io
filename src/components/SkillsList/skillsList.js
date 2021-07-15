import React from 'react';
import '../SkillsList/skillsList.css';

function SkillsList({id, title, active, setSelected}) {
    return (
        <li className={active ? "skillsList active" : "skillsList"} onClick={() => setSelected(id)} >
                {title}
         </li>
    );
}

export default SkillsList;
