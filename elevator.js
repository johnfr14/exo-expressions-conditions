currentFloor = 6
targetFloor = 3


  switch (currentFloor){
    case 7:
      currentFloor != targetFloor ? console.log(`vous vous trouvez actuellement à l\'étage 7 et desirez descendre au ${targetFloor}ème`) : console.log('Vous y êtes déjà...')
      break
    case 6:
      currentFloor != targetFloor ? console.log(`vous vous trouvez actuellement à l\'étage 6 et desirez ${targetFloor < currentFloor ? 'descendre' : 'monter'} au ${targetFloor}ème`) :
      console.log('Vous y êtes déjà...')
      break
    case 5:
      currentFloor != targetFloor ? console.log(`vous vous trouvez actuellement à l\'étage 5 et desirez ${targetFloor < currentFloor ? 'descendre' : 'monter'} au ${targetFloor}ème`) :
      console.log('Vous y êtes déjà...')
      break
    case 4:
      currentFloor != targetFloor ? console.log(`vous vous trouvez actuellement à l\'étage 4 et desirez ${targetFloor < currentFloor ? 'descendre' : 'monter'} au ${targetFloor}ème`) :
      console.log('Vous y êtes déjà...')
      break
    case 3:
      currentFloor != targetFloor ? console.log(`vous vous trouvez actuellement à l\'étage 3 et desirez ${targetFloor < currentFloor ? 'descendre' : 'monter'} au ${targetFloor}ème`) :
      console.log('Vous y êtes déjà...')
      break
    case 2:
      currentFloor != targetFloor ? console.log(`vous vous trouvez actuellement à l\'étage 2 et desirez ${targetFloor < currentFloor ? 'descendre' : 'monter'} au ${targetFloor}ème`) :
      console.log('Vous y êtes déjà...')
      break
    case 1:
      currentFloor != targetFloor ? console.log(`vous vous trouvez actuellement à l\'étage 1 et desirez ${targetFloor < currentFloor ? 'descendre' : 'monter'} au ${targetFloor}ème`) :
      console.log('Vous y êtes déjà...')
      break
    case 0:
      currentFloor != targetFloor ? console.log(`vous vous trouvez actuellement à l\'étage 0 et desirez ${targetFloor < currentFloor ? 'descendre' : 'monter'} au ${targetFloor}ème`) :
      console.log('Vous y êtes déjà...')
      break
    case -1:
      currentFloor != targetFloor ? console.log(`vous vous trouvez actuellement à l\'étage -1 et desirez ${targetFloor < currentFloor ? 'descendre' : 'monter'} au ${targetFloor}ème`) :
      console.log('Vous y êtes déjà...')
      break
    case -2:
      currentFloor != targetFloor ? console.log(`vous vous trouvez actuellement à l\'étage -2 et desirez monter au ${targetFloor}ème`) :
      console.log('Vous y êtes déjà...')
      break
    default:
  }
  console.log(`Vous voilà arrivé au ${targetFloor} étage${targetFloor < -1 || targetFloor > 1 ? 's' : ''}`)