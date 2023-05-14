const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const PLAYER_SPRITESHEET = {
	columns: 12,
	rows: 10,
	widthInPx: 6876,
	heightInPx: 5230,
}

const FRAME_DELAY = 200;

const playerImage = new Image();
playerImage.src = '../images/shadow_dog.png';

const spriteWidth = (PLAYER_SPRITESHEET.widthInPx / PLAYER_SPRITESHEET.columns) + 2;
const spriteHeight = (PLAYER_SPRITESHEET.heightInPx / PLAYER_SPRITESHEET.rows);

let frameX = 0;
let frameY = 0;

let gameFrame = 0;
const STAGGER_FRAMES = 10;


function animate() {
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	// Calculate the number of frames.
	// As gameframe cycles through 1 to 5
	// we need to calculate the number of animation
	// loops to position get to number 1 of the animation frame.

	// This means that the position will increase by 1
	// each time our stagger frame increases by 5,
	// slowing our animation play to be perceivable.

	// By us modulo we ensure that the variable increase
	// is limited to a range between 0 and 6
	// this is because 0 % 6 = 0, 1 % 6 = 1...
	let position = Math.floor(gameFrame / STAGGER_FRAMES) % 6;

	// We multiply the width by the position
	// this is because we want the sprite
	// at the specified position, but we need to
	// account for the width of each sprite in the row.
	frameX = spriteWidth * position;

	ctx.drawImage(
		playerImage,
		frameX,
		spriteHeight * frameY,
		spriteWidth,
		spriteHeight,
		0,
		0,
		spriteWidth,
		spriteHeight
	);
	gameFrame++;

	// infinite loop animation
	// via recurrent call.
	requestAnimationFrame(animate);
}

animate();