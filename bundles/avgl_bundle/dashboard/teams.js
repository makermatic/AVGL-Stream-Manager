const team1Name = document.getElementById('team1Name')
const team2Name = document.getElementById('team2Name')


function update() {
	const data = {team1Name: team1Name.value, team2Name: team2Name.value}
	nodecg.sendMessage('updateTeams', data)
}