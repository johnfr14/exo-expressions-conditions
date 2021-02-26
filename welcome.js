let user = ['Bob', 'Alice']
let gender = ['male', 'female']

for(let i = 0; i < user.length; i++){
  gender[i] === 'female' ? console.log(`Bonjour ${user[i]}, vous êtes entrée sur le chan\n`) : console.log(`Bonjour ${user[i]}, vous êtes entré sur le chan\n`)
}