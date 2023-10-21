img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
	//img = loadImage('mario05.png');
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
    //createCanvas(650,400);
	instializeInSetup(mario);
	video = createCapture(VIDEO);
    //video.size(600,300);
	video.size(800, 400);
	video.parent('game_console');
	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('¡Modelo cargado!');
  }

  function gotPoses(results)
  {
	if(results.length > 0)
	{
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX +", noseY = " + noseY);
	}
  }
   
function draw() {
	game();
	//background('grey');
	//if (noseX < 300) {
	//	marioX = marioX - 1;
	//	console.log("marioX = "+ marioX + ", marioY = "+ marioY);
	//}

	//if (noseX > 300) {
	//	marioX = marioX + 1;
	//}

	//image(img, marioX, marioY, 40, 70);
}






