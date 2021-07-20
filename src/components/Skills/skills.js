import React, { Component, useEffect, useState } from 'react';
import SkillsList from '../SkillsList/skillsList';
import '../Skills/skills.css';
import {featuredSkills, progLangSkills,webDevSkills,mobDevSkills,otherSkills} from "../../data";

function Skills() {
        const [selected,setSelected] = useState("featured");
        const [data,setData] = useState([]);
        const list = [
            {
                id:"featured",
                title:"Featured",
            },
            {
                id:"progLang",
                title:"Programming Languages",
            },
            {
                id:"webDev",
                title:"Web Development",
            },
            {
                id:"mobDev",
                title:"Mobile Development",
            },
            {
                id:"others",
                title:"Others",
            },
        ];

        useEffect(()=>{
            switch(selected){
                case "featured":
                    setData(featuredSkills);
                    break;
                case "progLang":
                    setData(progLangSkills);
                    break;
                case "webDev":
                    setData(webDevSkills);
                     break;
                case "mobDev":
                    setData(mobDevSkills);
                    break;
                case "others":
                    setData(otherSkills);
                    break;
                default:
                    setData(featuredSkills);
            }
        },[selected])

        return (
            <div className="Skills" id="skills">
                <h1>Skills</h1>
                <ul>
                    {list.map((item)=> ( 
                    <SkillsList title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}
                    />
                    ))}
                </ul>
                <div className="container">
                    {data.map((d) => (
                        <div className="item">
                            <img src={d.img} alt=""/>
                            <h3>{d.title}</h3>
                         </div>
                    ))}
                    
                </div>
            </div>
        );
}

export default Skills;