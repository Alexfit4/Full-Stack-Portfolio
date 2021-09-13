import React from 'react'
import Typed from 'react-typed';
export default function About() {
    return (
			<div className='about-content rounded-lg border-2 border-red-200 h-screen mx-8 my-8 shadow-2xl'>
				<div className='container text-center mt-24 px-8'>
					<div>
						<h1 className='text-center text-4xl text-black font-bold'>
							Alex Ashtiany
						</h1>
						<h1 className='text-center text-4xl text-black font-bold'>
							A{' '}
							<Typed
								strings={[' Dedicated', 'Professional', 'Full Stack Developer']}
								typeSpeed={30}
								backSpeed={50}
								loop
							/>
						</h1>
					</div>

					<div>
						<p>
							I’m a hard working and dedicated professional full stack developer
							interface designer with a keen eye for detail, and a determination
							to deliver the very highest quality. I take great pride in my
							work, and I always try to better myself with every project I work
							on. I am motivated, enthusiastic and well organized, with a keen
							eye for beautiful design, primarily based around user interfaces.
							The main areas of my expertise are HTML(5), CSS(3), React and
							JavaScript (native and jQuery) but I have intermediate knowledge
							of MongoDB and MySQL. I have worked with a number of project’s
							where I have led a team and I am comfortable working under
							pressure to complex specifications. I regularly use version
							control systems (GIT) to maintain my code, and I specialize in
							responsive web design (RWD).
						</p>
					</div>
				</div>
			</div>
		);
}
