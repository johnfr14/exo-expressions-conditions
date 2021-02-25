currentFloor = 7
targetFloor = 0
time = 12

//currentFloor = targetFloor ? console.log('vous êtes déjà à l\'étage') : 

for (let ascensor = 0; ascensor != targetFloor; console.log(`Veuillez patienter l\'ascenseur est actuellement au ${ascensor}ème étage !\n`))  {
  switch (currentFloor){
    case 7:
      currentFloor = targetFloor ? console.log(`vous voilà arrivé au ${targetFloor}ème étage, passez une bonne ${time < 6 || time > 18 ? 'soirée' : 'journée'}`) :
      ascensor = currentFloor ? console.log(`Vous avez choisi d'aller au ${targetFloor}ème étage`) currentFloor = targetFloor : ascensor++
      break
    case 6:
      ++nbA
      break
    case 5:
      ++nbI
      break
    case 4:
      ++nbO
      break
    case 3:
      ++nbU
      break
    case 2:
      ++nbY
    case 1:
      ++nbO
      break
    case 0:
      ++nbU
      break
    case -1:
      ++nbY
      break
    case -2:
      break
    default:
  }
}
console.log(`vous voilà arrivé au ${targetFloor}ème étage, passez une bonne ${time < 6 || > 18 ? 'soirée' : 'journée'}`)