const team1Name = document.getElementById('team1Name')
const team2Name = document.getElementById('team2Name')
const round = document.getElementById('round')


function update() {
	const data = {team1Name: team1Name.value, team2Name: team2Name.value, round: round.value}
	nodecg.sendMessage('updateTeams', data)
}