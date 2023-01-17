import React from 'react';
import s from './projects.module.css'
import generalContainer from '../common/styles/container.module.css'
import image from '../logo.svg'
import Project from "./Project/Project";


const Projects = (props) => {
    return (
        <div className={s.project}>
            <div className={`${generalContainer.container} ${s.container}`}>
                <div className={s.title}>My Projects</div>
                <div className={s.projects}>
                    <Project title={'Project1'}
                             description={'Mekaksis'}
                             img={'https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'}/>
                    <Project title={'Project2'}
                             description={'Miami'}
                             img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYvRUF6CwX1jDAEF_la46hU7iCOboOcolva6DSikp2YUXnkpBfZIkYmyzsRe5uO7Zw-Q&usqp=CAU'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;