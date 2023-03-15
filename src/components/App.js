import React, { Fragment, useEffect, useState } from 'react';
import '../styles/App.css';

const characters = [
	{
		id: 1,
		name: 'Jett',
		role: 'Duelist',
		abilities: ['TailWind', 'Cloud Burst', 'UpDraft', 'Blade Storm'],
	},
	{
		id: 2,
		name: 'Phoenix',
		role: 'Duelist',
		abilities: ['HotHands', 'Blaze', 'Curve Ball', 'Run It Back'],
	},
	{
		id: 3,
		name: 'Yoru',
		role: 'Duelist',
		abilities: ['GateCrash', 'Fakeout', 'Blind Side', 'Dimensional Drift'],
	},
	{
		id: 4,
		name: 'Reyna',
		role: 'Duelist',
		abilities: ['Dismiss', 'Leer', 'Devour', 'Empress'],
	},
	{
		id: 5,
		name: 'Raze',
		role: 'Duelist',
		abilities: ['Paint Shells', 'Boom Bot', 'BlastPack', 'ShowStopper'],
	},
	{
		id: 6,
		name: 'Neon',
		role: 'Duelist',
		abilities: ['High Gear', 'Fast Lane', 'Relay Bolt', 'Over Drive'],
	},
	{
		id: 7,
		name: 'Sova',
		role: 'Initiator',
		abilities: ['Recon Bolt', 'Owl Drone', 'Shock Bolt', "Hunter's Fury"],
	},
	{
		id: 8,
		name: 'Fade',
		role: 'Initiator',
		abilities: ['Haunt', 'Prowler', 'Seize', 'NightFall'],
	},
	{
		id: 9,
		name: 'Skye',
		role: 'Initiator',
		abilities: ['Guiding Light', 'Regrowth', 'Trail Blazer', 'Seekers'],
	},
	{
		id: 10,
		name: 'KAY/O',
		role: 'Initiator',
		abilities: ['Zero/Point', 'Frag/Ment', 'Flash/Drive', 'NULL/CMD'],
	},
	{
		id: 11,
		name: 'Breach',
		role: 'Initiator',
		abilities: [
			'Fault Line',
			'AfterShock',
			'FlashPoint',
			'Rolling Thunder',
		],
	},
	{
		id: 12,
		name: 'Omen',
		role: 'Controller',
		abilities: [
			'Dark Cover',
			'Shrouded Step',
			'Paranoia',
			'From the Shadows',
		],
	},
	{
		id: 13,
		name: 'Astra',
		role: 'Controller',
		abilities: ['Nebula', 'Gravity Well', 'Nova Pulse', 'Cosmic Divide'],
	},
	{
		id: 14,
		name: 'Viper',
		role: 'Controller',
		abilities: [
			'Toxic Screen',
			'Snake Bite',
			'Poison Cloud',
			"Viper's PIT",
		],
	},
	{
		id: 15,
		name: 'Brimstone',
		role: 'Controller',
		abilities: ['SkySmoke', 'Stim Beacon', 'Icendiary', 'Orbital Strike'],
	},
	{
		id: 16,
		name: 'Chamber',
		role: 'Sentinel',
		abilities: ['Rendezvous', 'Trademark', 'Head Hunter', 'Tour De Force'],
	},
	{
		id: 17,
		name: 'Sage',
		role: 'Sentinel',
		abilities: ['Healing Orb', 'Barrier Orb', 'Slow Orb', 'Resurrection'],
	},
	{
		id: 18,
		name: 'Killjoy',
		role: 'Sentinel',
		abilities: ['Turret', 'Nano Swarm', 'AlarmBot', 'Blade Storm'],
	},
	{
		id: 19,
		name: 'Cypher',
		role: 'Sentinel',
		abilities: ['Spycam', 'Trapwire', 'Cyber Cage', 'Nueral Theft'],
	},
];

const App = () => {
	const [currChar, setCurrChar] = useState({
		name: '',
		role: '',
		abilities: [],
		options: [],
	});

	const [score, setScore] = useState(0);

	const changeChar = () => {
		const idx = Math.floor(Math.random() * characters.length);
		const op1 = Math.floor(Math.random() * characters.length);
		const op2 = Math.floor(Math.random() * characters.length);
		const op3 = Math.floor(Math.random() * characters.length);
		setCurrChar({
			...currChar,
			name: characters[idx].name,
			role: characters[idx].role,
			abilities: characters[idx].abilities,
			options: shuffle([
				characters[op1],
				characters[op2],
				characters[op3],
				characters[idx],
			]),
		});
	};

	const scoreHandler = e => {
		if (e.target.textContent === currChar.name) {
			setScore(score + 1);
		} else {
			setScore(score - 1);
		}
		changeChar();
	};

	function shuffle(array) {
		let currentIndex = array.length,
			randomIndex;
		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	}

	useEffect(() => {
		changeChar();
	}, []);
	return (
		<div id="main">
			<div className="container">
				<h1 className="header">Guess the Character</h1>
				<div className="ques-area">
					<div className="score" id="score">
						Score: {score}
					</div>
					<h3>The character has the following abilities:</h3>
					<h4>Role: {currChar.role}</h4>
					{currChar.abilities.join()}
					<div className="options">
						{currChar.options.map(option => (
							<button key={Math.random()} onClick={scoreHandler}>
								{option.name}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
