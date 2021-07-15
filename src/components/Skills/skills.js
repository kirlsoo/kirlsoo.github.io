import React, { Component, useEffect, useState } from 'react';
import SkillsList from '../SkillsList/skillsList';
import '../Skills/skills.css';
import {pythonSkills, cSkills,javaSkills} from "../../data";

function Skills() {
        const [selected,setSelected] = useState("python");
        const [data,setData] = useState([]);
        const list = [
            {
                id:"python",
                title:"Python",
            },
            {
                id:"c",
                title:"C",
            },
            {
                id:"java",
                title:"Java",
            },
            {
                id:"html",
                title:"HTML",
            },
        ];

        useEffect(()=>{
            switch(selected){
                case "python":
                    setData(pythonSkills);
                    break;
                case "c":
                    setData(cSkills);
                    break;
                case "java":
                    setData(javaSkills);
                     break;
                case "html":
                    setData(cSkills);
                    break;
                default:
                    setData(pythonSkills);
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