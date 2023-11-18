import styles from './App.module.css';
import React, { useState } from 'react';

export const App = () => {
	const NUMS = [
		{ id: '0', number: 0 },
		{ id: '1', number: 1 },
		{ id: '2', number: 2 },
		{ id: '3', button: '-' },
		{ id: '4', number: 3 },
		{ id: '5', number: 4 },
		{ id: '6', number: 5 },
		{ id: '7', button: '+' },
		{ id: '8', number: 6 },
		{ id: '9', number: 7 },
		{ id: '10', number: 8 },
		{ id: '11', button: '*' },
		{ id: '12', number: 9 },
		{ id: '13', button: '=' },
		{ id: '14', button: 'C' },
		{ id: '15', button: '/' },
	];

	let [operand1, setOperand1] = useState('');
	let [operator, setOperator] = useState('');
	let [operand2, setOperand2] = useState('');
	let [isResult, setIsResult] = useState(false);

	const onClick = (event) => {
		const simbolDelete = /[+*=|%#&\-$/]/g;
		if (setOperand2 !== '' && operator === '') {

			setOperand1(
				(updatedValue) =>
					updatedValue + event.target.innerText.replace(simbolDelete, ''),
			);
			setIsResult(false)
		}

		if (event.target.innerText === 'C') {
			setOperand1('');
			setOperator('');
			setOperand2('');
			setIsResult(false);
		}
		if (event.target.innerText === '+') {
			setOperator('+');
		}

		if (event.target.innerText === '-') {
			setOperator('-');
		}
		if (event.target.innerText === '*') {
			setOperator('*');
		}
		if (event.target.innerText === '/') {
			setOperator('/');
		}

		if (operator !== '' && event.target.innerText !== 'C') {
			setOperand2(
				(updatedValue) =>
					updatedValue + event.target.innerText.replace(simbolDelete, ''),
			);
		}
		if (event.target.innerText === '=') {
			if (operator === '+') {
				let sumResult = Number(operand1) + Number(operand2);
				operand1 = sumResult;

				setOperand1(sumResult);
				setOperator('');
				setOperand2('');
				setIsResult(true);
			} else if (operator === '-') {
				let subResult = Number(operand1) - Number(operand2);
				operand1 = subResult;
				setOperand1(subResult);
				setOperator('');
				setOperand2('');
				setIsResult(true);
			} else if (operator === '*') {
				let multipResult = Number(operand1) * Number(operand2);
				operand1 = multipResult;
				setOperand1(multipResult);
				setOperator('');
				setOperand2('');
				setIsResult(true);
			} else if (operator === '/') {
				let divisionResult = Number(operand1) / Number(operand2);
				operand1 = divisionResult;
				setOperand1(Math.round(divisionResult));
				setOperator('');
				setOperand2('');
				setIsResult(true);
			}
		}
		return setOperand1;
	};

	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<div>
					<div className={isResult ? styles.resultColor : styles.inputDisplay}>
						{operand1}
						{operator}
						{operand2}
					</div>
				</div>
				<div className={styles.wrapperCalc}>
					{NUMS.map(({ id, number, button }) => (
						<button className={styles.calcButtons} key={id} onClick={onClick}>
							{number}
							{button}
						</button>
					))}
				</div>
				<p className={styles.calcNameText}>React Calculator </p>
				<h6>© made by Alexander Shulgin</h6>
			</header>
		</div>
	);
};
