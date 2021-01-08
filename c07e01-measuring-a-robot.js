function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let totalSteps1 = 0;
  let totalSteps2 = 0;
  for (let i = 0; i < 100; i++) {
    let task = VillageState.random();
    totalSteps1 += runRobot(task, robot1, memory1);
    totalSteps2 += runRobot(task, robot2, memory2);
  }
  console.log('First robot average:', totalSteps1/100);
  console.log('Second robot average:', totalSteps2/100);
}
