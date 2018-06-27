const Area = require('./area');
const Drone = require('./drone');

const processCommands = () => {
  const packOfCommands = 4;
  const processedMovements = [];
  const movements = process.argv.slice(4);
  const iteratorMovements = movements.length / packOfCommands;

  if (iteratorMovements % 1) {
    throw new Error('Incorrect number of commands');
  }

  for (let iterator = 0; iterator < iteratorMovements; iterator++) {
    const position = iterator * packOfCommands;

    processedMovements.push({
      axisX: Number(movements[position]),
      axisY: Number(movements[position + 1]),
      direction: movements[position + 2],
      movements: movements[position + 3]
    });
  }

  return processedMovements;
};

const createArea = () => {
  const area = {
    axisX: Number(process.argv[2]),
    axisY: Number(process.argv[3])
  };

  if (!Number.isInteger(area.axisX) || !Number.isInteger(area.axisY)) {
    throw new Error('Incorrect type to create th Area');
  }

  return new Area(area.axisX, area.axisY);
};

const service = () => {
  const droneArea = createArea();
  const processedCommands = processCommands();

  processedCommands.forEach(({axisX, axisY, direction, movements}) => {
    const drone = new Drone(droneArea, axisX, axisY, direction);

    for (let movement of movements) {
      drone.executeCommand(movement);
    }

    console.log(drone.droneStatus());
  });
};

service();
