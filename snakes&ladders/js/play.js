board = new Board();
board.build();

die = new Die();
die.init();

red = new Pawn('red', board);
red.init();

blue = new Pawn('blue', board);
blue.init();

green = new Pawn('green', board);
green.init();

yellow = new Pawn('yellow', board);
yellow.init();