// import { useEffect } from "react"

import { useState } from 'react';

export const MyComponent = () => {
	const [showText, setShowText] = useState(true);
	const onClick = (event) => {
		setShowText(!showText);
		// console.log(event);
	};
	const text = <div>Тайный текст</div>
	return (
		<>
			{showText && text}
			<button className='btn-style' onClick={onClick}>{showText ? 'скрыть' : 'показать'} текст</button>
		</>
	);
};

// import { Fragment } from "react";
// const getTimeFromDate = (date) => date.toISOString().substring(11, 19)

// export const MyComponent = () => {
// 	const [currentDate, setCurrentDate] = useState(new Date());

// 	setTimeout(() => {
// 		setCurrentDate(new Date());
// 	}, 1000);
// 	return <div>{getTimeFromDate(currentDate)}</div>;
// };

// export const MyComponent = (props) => {
// 	const date = new Date()
// 	useEffect(() => {
// 		console.log(date);
// 	}, []);
// 	return (
// 		<div>{String(date)}</div>
// 	);
// }
// const getValue = () => 123;

// export const MyComponent = () => {
// 	const tagName = 'div';
// 	return (
// 		<Fragment>
// 		<label>Значение</label>
// 		<div
// 			className={tagName + 'Element'}
// 			style={{ width: '100px', marginTop: '20px' }}
// 		>
// 			{getValue()}
// 		</div>
// 		</Fragment>
// 	);
// };
