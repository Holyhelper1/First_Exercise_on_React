// import { useEffect } from "react"
// import styles from './App.module.css';
import styles from './MyComponent.module.css';
import { useState } from 'react';

export const MyComponent = () => {
	const [showRedText, setshowRedText] = useState(false);
	const onClick = () => {
		setshowRedText(!showRedText);
		// console.log(event);
	};
	const text = <div className={showRedText ? styles.red : styles.white}>Тайный текст</div>
	return (
		<>
			{text}
			<button className={styles.btnStyle} onClick={onClick}> Изменить цвет текста</button>
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
