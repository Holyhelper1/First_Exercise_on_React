import logo from './logo.svg';
import './App.css';
import { MyComponent } from './MyComponent';
// import { createElement } from 'react';

export const App = () => {
	// const onClick = () => {console.log(123);}
	return (
		<div className="App">
			<header className="App-header" >
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload Have some fun.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
					npm
					start
				>
					Learn React
				</a>
				<MyComponent />
			</header>
		</div>
	);
};

// без использования JSX
// export const App = () => {
// 	const yearNow = new Date().getFullYear();
// 	// console.log(yearNow);
// 	return createElement(
// 		'div',
// 		{ className: 'App' },
// 		createElement(
// 			'header',
// 			{ className: 'App-header' },
// 			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
// 			createElement(
// 				'p',
// 				null,
// 				'Edit src/App.js and save to reload and have some fun!',
// 			),
// 			createElement(
// 				'a',
// 				{
// 					className: 'App-link',
// 					href: 'https://reactjs.org',
// 					target: '_blank',
// 					rel: 'noopener noreferrer',
// 				},
// 				'Learn React',
// 				createElement('p', { className: 'App-year' }, null, yearNow),
// 			),
// 		),
// 	);
// };
