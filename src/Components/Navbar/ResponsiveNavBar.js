import React, { useState } from 'react';
import './nav.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import { Link } from 'react-scroll';
import Resume from '../Assets/Ashtiany_resfinal copy.pdf';
import { MatchMediaHOC } from 'react-match-media';
import AboutIpad from '../About/AboutIpad';
export default function ResponsiveNavBar() {
	const [navbarOpen, setNavbarOpen] = useState(false);
		    const ipadView = () => {
					<AboutIpad />;
				};

				const ComponentForSmallScreen = MatchMediaHOC(
					ipadView,
					'(max-width: 500px)'
				);

				const ComponentForMediumScreen = MatchMediaHOC(
					About,
					'(min-width: 800px)'
				);
	return (
		<Router>
			<>
				<nav className='relative border-b-4 sticky top-0 z-50   flex flex-wrap items-center justify-between px-2 py-3  mb-3'>
					<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
						<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
							<Link
								activeClass='active'
								spy={true}
								smooth={true}
								to='about'
								className='nav-links text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'>
								ABOUT
							</Link>
							<Link
								spy={true}
								smooth={true}
								to='project'
								className='nav-links text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'>
								PROJECTS
							</Link>
							<Link
								spy={true}
								smooth={true}
								to='contact'
								className='nav-links text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'>
								CONTACT
							</Link>

							<button
								className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
								type='button'
								onClick={() => setNavbarOpen(!navbarOpen)}>
								<i className='fas fa-bars'></i>
							</button>
						</div>
						<div
							className={
								'lg:flex flex-grow items-center' +
								(navbarOpen ? ' flex' : ' hidden')
							}
							id='example-navbar-danger'>
							<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
								<li className='nav-item'>
									<a
										target='_blank'
										className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
										href='https://github.com/Alexfit4'>
										<i className='fab fa-facebook-square text-lg leading-lg text-white opacity-75'></i>
										<span className='ml-2'>GITHUB</span>
									</a>
								</li>
								<li className='nav-item'>
									<a
										target='_blank'
										className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
										href='https://www.linkedin.com/in/amir-ashtiany-4a25421b9/'>
										<i className='fab fa-twitter text-lg leading-lg text-white opacity-75'></i>
										<span className='ml-2'>linkedin</span>
									</a>
								</li>
								<li className='nav-item'>
									<a
										target='_blank'
										className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
										href={Resume}>
										<i className='fab fa-pinterest text-lg leading-lg text-white opacity-75'></i>
										<span className='ml-2'>RESUME</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<Switch>
					<Route exact path='/'>
						<About />
					</Route>
					<Route path='/projects'>
						<Projects />
					</Route>
					<Route path='/contact'>
						<Contact />
					</Route>
				</Switch>
			</>
		</Router>
	);
}
