import React from 'react';
import Typed from 'react-typed';
import ReactIcon from '../Assets/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png';
import SQL from '../Assets/SQL.png';
import MongoDB from '../Assets/mongoDb.png';
import BigThree from '../Assets/BigThree.png';
import NodeJS from '../Assets/nodejs.png';
export default function About() {
	return (
		<div id="about" className='about-content md:rounded-lg rounded-lg md:border-2 border-2  h-5/6 md:mx-80  shadow-2xl'>
			<div className='container mx-auto text-center mt-20 '>
				<div>
					<h1 className='text-center text-4xl text-black font-bold'>
						Alex Ashtiany
					</h1>
					<h1 className='text-center text-4xl text-black font-bold '>
						<Typed
							strings={[' Dedicated', 'Professional', 'Full Stack Developer']}
							typeSpeed={30}
							backSpeed={40}
							loop
						/>
					</h1>
				</div>

				<div className='mt-10 mx-16'>
					<p>
						I’m a hard working and dedicated professional full stack developer
						interface designer with a keen eye for detail, and a determination
						to deliver the very highest quality. I take great pride in my work,
						and I always try to better myself with every project I work on. I am
						motivated, enthusiastic and well organized, with a keen eye for
						beautiful design, primarily based around user interfaces. The main
						areas of my expertise are HTML(5), CSS(3), React and JavaScript
						(native and jQuery) but I have intermediate knowledge of MongoDB and
						MySQL. I have worked with a number of project’s where I have led a
						team and I am comfortable working under pressure to complex
						specifications. I regularly use version control systems (GIT) to
						maintain my code, and I specialize in responsive web design (RWD).
					</p>
				</div>

				<div className='container md:mx-auto ml-5 mb-12'>
					<div className='grid grid-cols-1 md:grid-cols-5 ml-24 mt-10'>
						<img
							className='h-24 object-contain'
							src={ReactIcon}
							alt=''
							srcset=''
						/>
						<img className='h-24 object-contain' src={SQL} alt='' srcset='' />
						<img
							className='h-24 object-contain'
							src={MongoDB}
							alt=''
							srcset=''
						/>
						<img
							className='h-24 object-contain'
							src={BigThree}
							alt=''
							srcset=''
						/>
						<img
							className='h-24 object-contain'
							src={NodeJS}
							alt=''
							srcset=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
