import SimpleLinkedList from "./simplelinkedlist.js";

export {
  init,
  getFirstBall,
  getNextBall,
  addRandomBall,
  dump,
  addBall,
  insertBallAfter,
  getCannonBall,
  loadCannon,
  red,
  blue,
  green,
  yellow,
};

const list = new SimpleLinkedList();

function init() {
  console.log("Model init");
}

function dump() {
  let node = list.head;
  let output = "";
  while (node != null) {
    output += '"' + node.data + node.id + '"';
    output += " -> ";

    node = node.next;
  }
  output += "null";
  console.log(output);
}

// **** WRAPPERS ****
function addRandomBall() {
  list.add(randomBall());
}

function addBall(ball) {
  list.add(ball);
}

// TODO: Implement more functions

function insertBallAfter(ball, node) {
  return list.insertAfter(ball, node);
}

function numberOfBalls() {
  return list.size();
}

function getFirstBall() {
  return list.head;
}
function getNextBall(ball) {
  return ball.next;
}

// **** CANNON ****
let cannonBall;

function loadCannon() {
  cannonBall = randomBall();
}

function getCannonBall() {
  return cannonBall;
}

// **** MATCHES ****

// TODO: Implement functions to find and remove matches
function checkMatches(node) {
  const matches = [node];

  let lookAt = node.prev;

  while (lookAt && lookAt.data == node.data) {
    matches.push(lookAt);
    lookAt = lookAt.prev;
  }

  lookAt = node.next;

  while (lookAt && lookAt.data == node.data) {
    matches.push(lookAt);
    lookAt = lookAt.next;
  }
  return matches;
}

// **** BALLS ****

const balls = ["🔴", "🔵", "🟡", "🟢"];

function randomBall() {
  return balls[Math.floor(Math.random() * balls.length)];
}

function red() {
  return balls[0];
}

function blue() {
  return balls[1];
}

function yellow() {
  return balls[2];
}

function green() {
  return balls[3];
}

//debugger;
