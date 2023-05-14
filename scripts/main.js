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

let x = 1;
let y = 1;

function animate() {
	ctx.clearRect(0, 0, CANVAS_WIDTH,CANVAS_HEIGHT);

	ctx.drawImage(playerImage, spriteWidth * x, spriteHeight * y, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

	x++;
	y++;

	if (x > PLAYER_SPRITESHEET.rows - 8) {
		x = 0;
	}

	if (y > PLAYER_SPRITESHEET.columns - 10) {
		y = 0;
	}

	setTimeout(() => {
		requestAnimationFrame(animate);
	}, FRAME_DELAY);
}

animate();