//Name Reps
const team1Name = document.getElementById('team1Name');
const team2Name = document.getElementById('team2Name');

//Score Reps
const team1Rep = nodecg.Replicant('team1');
const team2Rep = nodecg.Replicant('team2');
const team1El = document.getElementById('team1');
const team2El = document.getElementById('team2');

//Listen for Scores
team1Rep.on('change', (newVal) => {
	team1El.innerHTML = newVal;
})

team2Rep.on('change', (newVal) => {
	team2El.innerHTML = newVal;
})


//Listen for Team Names
nodecg.listenFor('updateTeams', (data) => {
	team1Name.innerHTML = data.team1Name
	team2Name.innerHTML = data.team2Name
})

nodecg.listenFor('b03Toggle', (data) => {
	console.log('hit')
	if (data.value) {
		document.body.style.backgroundImage = 'url("./layout_b03.png")';
		team1.style.display = 'block';
		team2.style.display = 'block';
	} else {
		document.body.style.backgroundImage = 'url("./layout1x.png")';
		team1.style.display = 'none'
		team2.style.display = 'none'
	}
})