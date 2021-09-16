import './App.css';
import ResponsiveNavBar from './Components/Navbar/ResponsiveNavBar';
import Projects from './Components/Projects/Projects';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '@material-tailwind/react/tailwind.css';
import Contact from './Components/Contact/Contact';


function App() {

	return (
		<Router>
			<div className='App'>
				<ResponsiveNavBar />
				<Projects />
				<Contact />
			</div>
		</Router>
	);
}

export default App;
