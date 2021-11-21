import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Hooks/AuthProvider';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Dashboard from './Components/Pages/MangeOrder/Dashboard';
import NotFound from './Components/Pages/NotFound/NotFound';

import ToursDeatils from './Components/Pages/TourPlaces/ToursDeatils';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<BrowserRouter>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/home'>
							<Home />
						</Route>
						<Route path='/login'>
							<Login />
						</Route>
						<PrivetRoute path='/tourdetail/:id'>
							<ToursDeatils />
						</PrivetRoute>

						<PrivetRoute path='/dashboard'>
							<Dashboard />
						</PrivetRoute>
						<Route path='*'>
							<NotFound />
						</Route>
					</Switch>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
