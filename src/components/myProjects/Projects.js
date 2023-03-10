import React from 'react';
import s from './projects.module.css'
import generalContainer from '../../common/styles/container.module.css'
import Project from "./Project/Project";
import {Title} from "../../common/title/Title";
import todoImage from '../../common/icons/todo-list.jpg'
import socialNetworkImage from '../../common/icons/social-network.jpg'
import counter from '../../common/icons/counter.JPG'
import {Line} from "../../common/Line/Line";

const Projects = (props) => {
    return (
        <div id={'projects'} className={s.projectBlock}>
            <Line/>
            <div className={`${generalContainer} ${s.container}`}>
                <div className={s.title}>
                    <Title title={'My Projects'}/>
                </div>
                <div className={s.projects}>
                    <Project
                        linkcode={'https://github.com/knuckless0231/todoList.git'}
                        link={'https://www.google.com/?&bih=829&biw=1730&hl=ru'}
                        title={'Todo List'} description={'Miami'}
                        img={todoImage}/>
                    <Project
                        linkcode={'https://github.com/knuckless0231/way-of-samurai-ts-upd.git'}
                        link={'https://knuckless0231.github.io/login'}
                        title={'Social Network'} description={'Miami'}
                        img={socialNetworkImage}/>
                    <Project
                        linkcode={'https://github.com/knuckless0231/todoList.git'}
                        link={'https://www.google.com/?&bih=829&biw=1730&hl=ru'}
                        title={'Project2'} description={'Miami'}
                        img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYvRUF6CwX1jDAEF_la46hU7iCOboOcolva6DSikp2YUXnkpBfZIkYmyzsRe5uO7Zw-Q&usqp=CAU'}/>
                    <Project
                        linkcode={'https://github.com/knuckless0231/Counter.git'}
                        link={'https://www.google.com/?&bih=829&biw=1730&hl=ru'}
                        title={'Counter'} description={'Stack:Redux,Thunk,Unit-Test,Local Storage'}
                        img={counter}/>
                </div>
            </div>

        </div>
    );
};
export default Projects;