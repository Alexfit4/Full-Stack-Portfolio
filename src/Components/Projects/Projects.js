import React from 'react';
import '../Navbar/nav.css';
import { projects } from './ProjectData';

export default function Projects() {
	return (
		<div
			id='project'
			className='about-content md:rounded-lg rounded-lg md:border-2 border-2 lg:mx-36 md:mx-10 sm:mx-80  shadow-2xl mt-10 py-6 '>
			<div className='text-center text-4xl font-bold tracking-widest mb-10 '>
				<h1>PROJECTS</h1>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				{projects.map((x, i) => {
					return (
						<div>
							<a target='_blank' href={x.projectLink}>
								<img className='w-full' src={x.projectPic} alt='Mountain' />
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
