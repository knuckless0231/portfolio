import React from 'react';
import s from './projects.module.css'
import generalContainer from '../../common/styles/container.module.css'
import Project from "./Project/Project";
import {Title} from "../../common/title/Title";
import todoImage from '../../common/icons/todo-list.jpg'
import socialNetworkImage from '../../common/icons/social-network.jpg'

const Projects = (props) => {
    return (
        <div id={'projects'} className={s.projectBlock}>
            <div className={`${generalContainer} ${s.container}`}>
                <div>
                    <Title title={'My Projects'}/>
                </div>
                <div className={s.projects}>
                    <Project
                        linkcode={'https://github.com/knuckless0231/portfolio.git'}
                        link={'https://www.google.com/?&bih=829&biw=1730&hl=ru'}
                        title={'Todo List'} description={'Miami'}
                        img={todoImage}/>
                    <Project
                        link={'https://www.google.com/?&bih=829&biw=1730&hl=ru'}
                        title={'Social Network'} description={'Miami'}
                        img={socialNetworkImage}/>
                    <Project
                        link={'https://www.google.com/?&bih=829&biw=1730&hl=ru'}
                        title={'Project2'} description={'Miami'}
                        img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYvRUF6CwX1jDAEF_la46hU7iCOboOcolva6DSikp2YUXnkpBfZIkYmyzsRe5uO7Zw-Q&usqp=CAU'}/>
                </div>
            </div>
        </div>


    );

    //     <div className={s.project}>
    //         <div className={`${generalContainer.container} ${s.container}`}>
    //             <div className={s.title}>
    //                 My Projects
    //             </div>
    //             <div className={s.projects}>
    //                 <span>
    //                    <Project title={'Project1'}
    //                             description={'Mekaksis'}
    //                             img={'https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'}/>
    //                 </span>
    //                 <span>
    //                  <Project title={'Project2'}
    //                           description={'Miami'}
    //                           img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYvRUF6CwX1jDAEF_la46hU7iCOboOcolva6DSikp2YUXnkpBfZIkYmyzsRe5uO7Zw-Q&usqp=CAU'}/>
    //
    //             </span>
    //                 <span>
    //                  <Project title={'Project2'}
    //                           description={'Miami'}
    //                           img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYvRUF6CwX1jDAEF_la46hU7iCOboOcolva6DSikp2YUXnkpBfZIkYmyzsRe5uO7Zw-Q&usqp=CAU'}/>
    //
    //             </span>
    //             </div>
    //         </div>
    //     </div>
};
export default Projects;