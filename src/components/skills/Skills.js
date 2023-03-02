import React from 'react';
import s from './skills.module.css'
import generalContainer from '../../common/styles/container.module.css'
import Skill from "./skill/Skill";
import {Title} from "../../common/title/Title";
import jsImg from '../../common/icons/images.png'
import htmlImg from '../../common/icons/images (2).png'
import cssImg from '../../common/icons/images (3).png'
import gitHubImg from '../../common/icons/git-git.png'
import TddImg from '../../common/icons/tdd.jpg'
import UnitImg from '../../common/icons/unit.png'
import APIImg from '../../common/icons/rest.webp'
import MaterialImg from '../../common/icons/material.png'
import StorybookImg from '../../common/icons/story.png'
import ReduxImg from '../../common/icons/redux.webp'
import ReactImg from '../../common/icons/react.png'
import TypeScriptImg from '../../common/icons/ts.png'
import {Line} from '../../common/Line/Line'


const Skills = () => {
    return (
        <div id={"services"} className={s.skillsBlock} >
            <Line/>
            <div className={`${generalContainer.container} ${s.skillsContainer}`}>
                <div>
                    <Title title={'Services'}/>
                </div>
                <div className={s.skills}>
                    <Skill title={'HTML'} skill={'Have confident skills'} img={htmlImg}/>
                    <Skill title={'CSS'} skill={'Have confident skills'} img={cssImg}/>
                    <Skill title={'JS'} skill={'Have confident skills'} img={jsImg}/>
                    <Skill title={'TypeScript'} skill={'Have confident skills'} img={TypeScriptImg}/>
                    <Skill title={'React'} skill={'Have confident skills'} img={ReactImg}/>
                    <Skill title={'Storybook'} skill={'Have confident skills'} img={StorybookImg}/>
                    <Skill title={'TDD'} skill={'Have confident skills'} img={TddImg}/>
                    <Skill title={'Unit Test'} skill={'Have confident skills'} img={UnitImg}/>
                    <Skill title={'REST API'} skill={'Have confident skills'} img={APIImg}/>
                    <Skill title={'Material-UI'} skill={'Have confident skills'} img={MaterialImg}/>
                    <Skill title={'Redux'} skill={'Have confident skills'} img={ReduxImg}/>
                    <Skill title={'GitHub'} skill={'Have confident skills'} img={gitHubImg}/>
                </div>
            </div>
            <Line/>
        </div>
    );
};

export default Skills;