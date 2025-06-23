// initialize game context
kaboom({
  width: 400,
  height: 300,
  background: [153, 0, 230]
});

loadSprite("knight", "sprites/knight.png");
loadSprite("enemy", "sprites/enemy.png");
loadSound("boxJump", "sounds/boxJump.wav");
loadSound("collide", "sounds/collide.wav");
loadSound("jump", "sounds/jump.wav");

scene("game", function() {
  setGravity(2400);

  const bgm = play('boxJump', {
    loop: true,
    volume: 0.3
  })

  let player = add([
    sprite('knight'),
    pos(80, 80),
    scale(2),
    area(),
    body(),
    "player"
  ]);

  let floor = add([
    rect(width(), 50),
    pos(0, height() - 50),
    color(112, 128, 144),
    area(),
    body({ isStatic: true })
  ]);

  function playerJump() {
    if (player.isGrounded()) {
      player.jump(800);
      play("jump");
    }

  }

  onKeyPress("space", playerJump);
  onMousePress(playerJump);

  function spawnEnemy() {
    add([
      sprite('enemy'),
      pos(width(), 50),
      scale(rand(0.5, 2)),
      area(),
      body(),
      move(LEFT, 200),
      offscreen({ destroy: true }),
      "enemy"
    ]);
    wait(rand(1, 3), spawnEnemy)

  }

  spawnEnemy();

  onCollide("player", "enemy", function() {
    destroy(player);
    addKaboom(player.pos);
    play("collide");
    bgm.paused = true;
    go('gameOver');
  })

});

scene("gameOver", function() {
  add([
    text('Game Over!'),
    pos(width() / 2, height() / 2),
    anchor('center')
  ])
  onKeyPress(function() {
    go("game");
  });
})

go("game");