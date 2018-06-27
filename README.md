# DroneClassProject

The goal of this project is to work with javascript classes.

The idea is to create two classes, the first a Drone and the second the Area where the Drone can fly.

To run the project we send a one-line command

~~~
1. The first instruction is the size of the area
2. Before we add the initial point of drone and the direction
3. In the last command, we will indicate the movements
  - L turn left
  - R turn right
  - M move one step in the drone direction
~~~


# Documentation

## Getting Started

To run this project it's necessary Node 8

### Scripts

```bash
npm start # run
npm test # run testing
```

### Examples

```bash
npm start 5 5 3 3 E L 3 3 E MMRMMRMRRM
```

Log response
```bash
3 3 N
5 1 E
```

## Technologies / Libraries

- [Node](https://nodejs.org/) - JS runtime environment
- [npm](https://www.npmjs.com/) - package manager
- [ESLint](http://eslint.org/) - linter
- [Proxyquire](https://github.com/thlorenz/proxyquire) - Allow overriding dependencies during testing for Node.js
- [Sinon](http://sinonjs.org/) - Standalone test spies, stubs and mocks for JavaScript.
- [Tape](http://eslint.org/) - Test harness for Node.js


## Timeline / TODOS
* [x] Write README file
* [x] Create structure
* [x] Write Area and Dron classes
* [ ] Write unit tests
* [ ] Write integration tests
