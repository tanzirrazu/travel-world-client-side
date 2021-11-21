import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Hooks/AuthProvider';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import ManageOrder from './Components/Pages/MangeOrder/ManageOrder';
import NotFound from './Components/Pages/NotFound/NotFound';
import Footer from './Components/Pages/Shered/Footer/Footer';
import Header from './Components/Pages/Shered/Header/Header';
import AddTours from './Components/Pages/TourPlaces/AddTours';
import ToursDeatils from './Components/Pages/TourPlaces/ToursDeatils';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<PrivetRoute path="/tourdetail/:id">
							<ToursDeatils />
						</PrivetRoute>
						<PrivetRoute path="/addtours">
							<AddTours />
						</PrivetRoute>
						<PrivetRoute path="/manageorder">
							<ManageOrder />
						</PrivetRoute>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
