import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import homePage from './components/home/homePage';
import aboutPage from './components/about/aboutPage';
import coursesPage from './components/course/coursesPage';



export default (
	<Route path="/" component={App}>
		<IndexRoute component={homePage} />
		<Route path="courses" component={coursesPage} />
		<Route path="about" component={aboutPage} />

	</Route>
);
