var qString;
window.onpopstate = function () { //http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
    var match,
        pl     = /\+/g,
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    qString = {};
    while (match = search.exec(query))
       qString[decode(match[1])] = decode(match[2]);
}();
var isMobile;
window.mobileAndTabletcheck = function() { //http://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	isMobile = check;
}();
var falseArray = function (num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr[i] = false;
	}
	return arr;
};
var wall = "<span title='wall' class='wall'>#</span>";
var water = "<span title='water' class='water'>~</span>";
var path = "<span title='path' class='path'>-</span>";
var weapon = "<span title='new weapon' class='weapon'>/</span>";
var HPack = "<span title='HP pack' class='HPack'>+</span>";
var weapons = [{"name":"a fist","dmg":1},
			   {"name":"brass knuckles","dmg":2},
			   {"name":"a bat","dmg":3},
			   {'name':"a knife","dmg":4},
			   {'name':"a sword","dmg":7},
			   {"name":"a broadsword","dmg":8},
			   {"name":"dual swords","dmg":9},
			   {'name':"a shotgun","dmg":10},
			   {'name':"a demon's sad smile","dmg":-1},
			   {'name':"an ego","dmg":10},
			   {'name':"a dead baby enemy","dmg":15},
			   {'name':"a javaScipt console","dmg":22},
			   {'name':"a c++ complier","dmg":30},
			   {'name':"the heat death of the universe","dmg":50}];
var neWeapon;
var newUser = function (name, pass) {
	var playerStats = {
		"HP":100,
		"name":name||"Fred",
		"depth":0,
		"lvl":0,
		"maxHP":100,
		"justDescended":false,
		"kills":0,
		"dmg":0,
		"score":0,
		"highScore":0,
		"time":0,
		"typesKilled":falseArray(8),
		"weaponsFound":0,
		"maxDepth":0,
		"multiply":1,
		"shield":0,
		"currentWeapon":0,
		"skip":0,
		"mute":false,
		"shadowMultiply":false,
		"shadowShield":false,
		"waterShield":false,
		"interval":1000,
		"deaths":0,
		"stickyKeys":true,
		"achievements":falseArray(10),
		"v":2.5
	};
	if (pass) {
		playerStats.pass = pass;
	}
	return playerStats;
}
var pStats = newUser(qString["name"]||"Fred");
var allStats;
var player = "<span title='player' class='player'>"+pStats.name[0]+"</span>";
var enemy = "<span title='enemy' class='enemy'>*</span>";
var stillEnemies = false;
var enemies = [];
var start = "<span title='startPoint' class='start'>o</span>";
var prev;
var pos;
var exit = "<span title='hole' class='exit'>O</span>";
var map = document.getElementById("map");
var elems = [];
var stats = document.getElementById("stats");
var state, battle, health, score, depth, level, toNextLvl, tool, highScore;
var menu = document.getElementById('menu');
var info = document.getElementById('info');
var board = [];
var size;
var everySecond;
var justMoved;
var clear = true;
var music = document.getElementById('mp3');
var mute = function () {
	if (music.paused) {
		pStats.mute = false;
		music.play();
	} else {
		pStats.mute = true;
		music.pause();
	}
};
var dispBoard = function () {
	var html = "<p>";
	for (var i = 0; i < size; i++) {
		for (var j = 0; j < 2*size; j++) {
			if (board[i][j] == enemy) {
				for (var k = 0; k < enemies.length; k++) {
					if (enemies[k].row == i && enemies[k].col == j) {
						if (Object.prototype.toString.call(enemies[k].lvl) == '[object String]') {
							html += "<span id="+(j+2*size*i)+"><span class='"+enemies[k].lvl+"'>"+enemy+"</span></span>";
						} else {
							html += "<span id="+(j+2*size*i)+"><span class='type"+Math.floor(enemies[k].lvl/10)%8+"'>"+enemy+"</span></span>";
						}
						break;
					}
				}
			} else {
				html+="<span id="+(j+2*size*i)+">"+board[i][j]+"</span>";
			}
		}
		html+="<br>";
	}
	map.innerHTML = html+"</p>";
	for (var i = 0; i < size*size*2-1; i++) {
		elems[i] = document.getElementById(i);
	}
};
var placeWeapon = function () {
	if (!pStats.currentWeapon || (Math.random() < 1/pStats.currentWeapon && weapons.length - pStats.currentWeapon)) {
		var r, c;
		do {
			r = Math.ceil((Math.random() * (size-2)));
			c = Math.ceil((Math.random() * (2*size-2)));
		} while (board[r][c] == wall || board[r][c] == player);
		neWeapon = {"row":r,"col":c,"dmg":weapons[pStats.currentWeapon].dmg,"name":weapons[pStats.currentWeapon].name,"prev":board[r][c]};
		board[r][c] = weapon;
	}
};
var newEnemy = function (r, c, HP, lvl, dmg) {
	return {"row":r,"col":c,"inBattle":undefined,"HP":HP,"maxHP":HP,"lvl":lvl,"maxDmg":dmg,"prev":board[r][c]};
};
var placeEnemies = function () {
	enemies = [];
	for (var i = 0; i < pStats.depth; i++) {
		if (pStats.depth-i>40) {
			continue;
		}
		var r, c;
		do {
			r = Math.ceil((Math.random() * (size-2)));
			c = Math.ceil((Math.random() * (2*size-2)));
		} while (board[r][c] == wall || board[r][c] == enemy || board[r][c] == player);
		if (Math.random()<.001) {
			enemies[i%40] = newEnemy(r,c,1000+pStats.lvl*pStats.multiply,"Shadow",pStats.maxHP);
		} else {
			enemies[i%40] = newEnemy(r,c,i*3+5,i*2,i*2+1);
		}
		board[r][c] = enemy;
	}
};
var smileyBoss = function () {
	enemies = [];
	stillEnemies = true;
	fillMap();
	var exitPlaced = false;
	pos = [17,27];
	prev = start;
	board[17][27] = player;
	board[1][3] = HPack;
	board[3][3] = HPack;
	board[2][6] = HPack;
	board[1][34] = HPack;
	board[2][37] = HPack;
	board[3][35] = HPack;
	for (var i = 3; i <= 8; i++) {
		if (!exitPlaced && Math.random() < .08) {
			board[i][(13&&Math.random()<.5)||24] = exit;
			exitPlaced = true;
		}
		enemies[enemies.length] = newEnemy(i,24,Math.floor(Math.random() * 10) + pStats.depth,"eye", pStats.depth/3 + 1);
		enemies[enemies.length] = newEnemy(i,13,Math.floor(Math.random() * 10) + pStats.depth,"eye", pStats.depth/3 + 1);
		board[i][13] = enemy;
		board[i][24] = enemy;
	}
	var coors = [[8,4],[9,4],[10,4],[11,4],[12,4],[12,5],[12,6],[12,7],[13,7],[13,8],[13,9],[14,9],[14,10],[14,11],[14,12],[14,13],[14,14],[14,15],[14,16],[14,17],[14,18],[14,19],[14,20],[14,21],[14,22],[14,23],[14,24],[14,25],[14,26],[14,27],[14,28],[14,29],[13,29],[13,30],[12,30],[12,31],[11,31],[11,32],[10,32],[9,32],[8,32],[7,32]];
	for (var i = 0; i < coors.length; i++) {
		if (!exitPlaced && Math.random() < .08) {
			board[coors[i][0]][coors[i][1]] = exit;
			exitPlaced = true;
		}
		enemies[enemies.length] = newEnemy(coors[i][0],coors[i][1],Math.floor(Math.random() * 10) + pStats.depth,"smiley", pStats.depth/3 + 1);
		board[coors[i][0]][coors[i][1]] = enemy;
	}
	if (!exitPlaced) {
		board[15][18] = exit;
	}
	for (var i = 15; i <= 17; i++) {
		for (var j = 15; j <= 20; j++) {
			enemies[enemies.length] = newEnemy(i, j, Math.floor(Math.random() * 10) + pStats.depth, "tongue", pStats.depth / 3 + 1);
			board[i][j] = enemy;
		}
	}
	dispBoard();
};
var rainbowBoss = function () {
	enemies = [];
	stillEnemies = true;
	fillMap();
	var exitPlaced = false;
	pos = [11,19];
	prev = start;
	board[11][19] = player;
	board[4][2] = HPack;
	board[2][5] = HPack;
	board[2][33] = HPack;
	board[5][36] = HPack;
	var midCol = 19;
	var top = 2;
	var red = [[0,0],[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[4,8],[5,9],[6,9],[7,10],[8,10],[9,11],[10,11]];
	var orng = [[1,0],[1,1],[1,2],[2,3],[2,4],[3,5],[3,6],[4,7],[5,8],[6,8],[7,9],[8,9],[9,10]];
	var yllw = [[2,0],[2,1],[2,2],[3,3],[3,4],[4,5],[4,6],[5,7],[6,7],[7,8],[8,8],[9,9]];
	var grn = [[3,0],[3,1],[3,2],[4,3],[4,4],[5,5],[5,6],[6,6],[7,7],[8,7],[9,8]];
	var blu = [[4,0],[4,1],[4,2],[5,3],[5,4],[6,5],[7,6],[8,6],[9,7],[10,7]];
	var prpl = [[5,0],[5,1],[5,2],[6,3],[6,4],[7,5],[8,5],[9,6]];
	var cld = [[12,13],[13,13],[11,12],[12,12],[13,12],[14,12],[11,11],[12,11],[13,11],[14,11],[15,11],[10,10],[11,10],[12,10],[13,10],[14,10],[15,10],[10,9],[11,9],[12,9],[13,9],[14,9],[15,9],[10,8],[11,8],[12,8],[13,8],[14,8],[11,7],[12,7],[13,7],[14,7],[15,7],[10,6],[11,6],[12,6],[13,6],[14,6],[15,6],[11,5],[12,5],[13,5],[14,5],[12,4],[13,4],[14,4],[13,3]];
	var rainbow = [["red",red],["orange",orng],["yellow",yllw],["green",grn],["blue",blu],["purple",prpl],["cloud",cld]];
	for (var i = 0; i < rainbow.length; i++) {
		for (var j = 0; j < rainbow[i][1].length; j++) {
			if (rainbow[i][0] == "green" && !exitPlaced && Math.random() < .1) {
				board[ top + rainbow[i][1][j][0] ][ (((midCol + rainbow[i][1][j][1]) && (Math.random()<.5)) || (midCol - rainbow[i][1][j][1])) ] = exit;
				exitPlaced = true;
			} else if (!exitPlaced && rainbow[i][0] == "cloud") {
				board[15][9] = exit;
				exitPlaced = true;
			}
			if (rainbow[i][1][j][1]) {
				enemies[enemies.length] = newEnemy(top + rainbow[i][1][j][0], midCol + rainbow[i][1][j][1], Math.floor(Math.random() * 10) + pStats.depth, rainbow[i][0], pStats.depth / 3 + 1);
				board[ top + rainbow[i][1][j][0] ][ midCol + rainbow[i][1][j][1] ] = enemy;
			}
			enemies[enemies.length] = newEnemy(top + rainbow[i][1][j][0], midCol - rainbow[i][1][j][1], Math.floor(Math.random() * 10) + pStats.depth, rainbow[i][0], pStats.depth / 3 + 1);
			board[ top + rainbow[i][1][j][0] ][ midCol - rainbow[i][1][j][1] ] = enemy;
		}
	}
	dispBoard();
};
var generateBoss = [smileyBoss, rainbowBoss];
var fillMap = function (walls) {
	for (var i = 0; i < size; i++) {
		for (var j = 0; j < 2*size; j++) {
			if (!walls && i && (i-size+1) && j && (j-2*size+1)) {
				board[i][j] = path;
			} else {
				board[i][j] = wall;
			}
		}
	}
};
var createRoom = function (row, col, hole) {
	var exitPlaced = false;
	var radius = Math.floor(Math.random() * 3) + 2;
	var wateRoom = Math.random() < .01;
	for (var i = row - radius; i < row + radius; i++) {
		if (i > 0 && i < size - 1) {
			for (var j = col - 2*radius; j < col + 2*radius; j++) {
				if (j > 0 && j < 2*size-1) {
					if (hole && !exitPlaced && Math.random()<.1) {
						exitPlaced=true;
						board[i][j]=exit;
					} else if (Math.random()<.1 || wateRoom) {
						board[i][j]=water;
					} else {
						board[i][j]=path;
					}
				}
			}
		}
	}
	if (hole && !exitPlaced) {
		board[row][col] = exit;
	}
};
var placeEntities = function (checkpoint) {
	if (board[pos[0]][pos[1]] == exit) {
		prev = exit;
	} else {
		prev = start;
	}
	board[pos[0]][pos[1]] = player;
	placeWeapon();
	if (checkpoint) {
		enemies = [];
	} else {
		placeEnemies();
	}
};
var connectRooms = function (r1,c1,r2,c2) {
	var rowch, colch;
	if (r1 > r2) {
		rowch = -1;
	} else {
		rowch = 1;
	}
	if (c1 > c2) {
		colch = 1;
	} else {
		colch = -1;
	}
	for (var i = r1; i != r2; i+=rowch) {
		if (board[i][c1] == wall) {
			board[i][c1] = path;
		}
	}
	for (var i = c2; i != c1; i+=colch) {
		if (board[r2][i] == wall) {
			board[r2][i] = path;
		}
	}
	if (board[r2][c1] == wall) {
		board[r2][c1] = path;
	}
}
var generateMap = function() {
	fillMap(1);
	stillEnemies = false;
	createRoom(pos[0],pos[1], false);
	for (var i = Math.ceil(Math.random()*size/5); i; i--) {
		var r = Math.floor(Math.random()*(size-2))+1;
		var c = Math.floor(Math.random()*(2*size-2))+1;
		createRoom(r,c,false);
		connectRooms(r,c,pos[0],pos[1]);
		if (!(i-1)) {
			var row = Math.floor(Math.random()*(size-2))+1;
			var col = Math.floor(Math.random()*(2*size-2))+1;
			connectRooms(r,c,row,col);
			createRoom(row,col,true);
			placeEntities();				
		}
	}
	dispBoard();
};
var generateCheckMap = function () {
	fillMap(0);
	board[Math.ceil((Math.random() * (size-2)))][Math.ceil((Math.random() * (2*size-2)))] = water;
	placeEntities(1);
	board[Math.ceil((Math.random() * (size-2)))][Math.ceil((Math.random() * (2*size-2)))] = exit;
	dispBoard();
};
var init = function () {
	pStats.justDescended=false;
	size = qString["size"]*(qString["size"]>=10)||20;
	for (var i = 0; i < size; i++) {
		board[i] = [];
	}
	pos = [Math.ceil((Math.random() * (size-2))),Math.ceil((Math.random() * (2*size-2)))];
	generateCheckMap();
	stats.innerHTML="<pre>Hero: "+pStats.name+"<br><span id='health'>HP: "+pStats.HP+"/"+pStats.maxHP+"</span><br>Score: <span id='score'>"+pStats.score+"</span>   High: <span id='highScore'>"+pStats.highScore+"</span><br>You have descended <span id='depth'>"+pStats.depth+"</span> floors<br>You brandish <span title='Does "+(((pStats.currentWeapon>0)&&weapons[pStats.currentWeapon-1].dmg)||0)+" damage' id='weapon'>"+(((pStats.currentWeapon>0)&&weapons[pStats.currentWeapon-1].name)||"a smile")+"</span><br>Your hero is level <span id='level'>"+pStats.lvl+"</span><br>(<span id='toNextLvl'>"+(1-pStats.kills+toLevelUp())+"</span> kills to next level)</pre><div id='state'></div><div id='battle'></div><div id='keys'></div>";
	state = document.getElementById('state');
	battle = document.getElementById('battle');
	health = document.getElementById('health');
	level = document.getElementById('level');
	toNextLvl = document.getElementById('toNextLvl');
	tool = document.getElementById('weapon');
	depth = document.getElementById('depth');
	score = document.getElementById('score');
	highScore = document.getElementById('highScore');
	if (isMobile) {
		document.getElementById('keys').innerHTML = "<button type='button' onclick='pauseGame();'>Pause</button><div id='horz'><button type='button' onclick='\
			if (board[pos[0]][pos[1]-1] != wall) {\
				moveplayer(0,-1);\
			}\
		'>&lt</button><button type='button' onclick='\
			if (board[pos[0]][pos[1]+1] != wall) {\
				moveplayer(0,1);\
			}\
		'>&gt</button></div><div id='vert'><button type='button' onclick='\
			if (board[pos[0]-1][pos[1]] != wall) {\
				moveplayer(-1,0);\
			}\
		'>^</button><button type='button' onclick='\
			if (board[pos[0]+1][pos[1]] != wall) {\
				moveplayer(1,0);\
			}\
		'>v</button></div>";
	}
};
var attack = function (i) {
	if (board[enemies[i].row+enemies[i].inBattle[0]][enemies[i].col+enemies[i].inBattle[1]]==player) {
		if (enemies[i].lvl == "Shadow" && pStats.shadowMultiply) {
			enemies[i].HP = Math.floor(enemies[i].HP/2);
		} else {
			enemies[i].HP -= (pStats.multiply*(pStats.dmg+pStats.lvl));
		}
		if (enemies[i].HP <= 0) {
			killEnemy(i);
			battle.innerHTML = "";
		} else {
			battle.innerHTML = "<p><br>You are in battle<br>Enemy HP: "+enemies[i].HP+"/"+enemies[i].maxHP+"<br>Enemy level: "+enemies[i].lvl+"</p>";
			if (enemies[i].lvl == "Shadow" && pStats.shadowShield) {
				getHit(Math.ceil(Math.random()*enemies[i].maxDmg/2))
			} else {
				getHit(Math.ceil((Math.random()*enemies[i].maxDmg)));
			}
		}
	} else {
		battle.innerHTML = "";
		enemies[i].inBattle=undefined;
	}
};
var moveplayer = function (rowch, colch) {
	if (board[pos[0]+rowch][pos[1]+colch] == enemy) {
		for (var i = 0; i < enemies.length; i++) {
			if (enemies[i].row == pos[0]+rowch && enemies[i].col == pos[1]+colch) {
				enemies[i].inBattle = [-rowch,-colch];
				attack(i);
				return;
			}
		}
	}
	if (board[pos[0]+rowch][pos[1]+colch] == weapon) {
		pStats.currentWeapon++;
		clear = false;
		state.innerHTML="<p>You picked up "+neWeapon.name+"</p>";
		board[pos[0]+rowch][pos[1]+colch] = neWeapon.prev;
		tool.innerHTML = neWeapon.name;
		tool.title = "Does "+neWeapon.dmg+" damage";
		pStats.dmg = neWeapon.dmg;
	}
	board[pos[0]][pos[1]] = prev;
	elems[((pos[1])+2*size*(pos[0]))].innerHTML = prev;
	prev = board[pos[0]+rowch][pos[1]+colch];
	board[pos[0]+rowch][pos[1]+colch] = player;
	elems[((pos[1]+colch)+2*size*(pos[0]+rowch))].innerHTML = player;
	pos = [pos[0]+rowch, pos[1]+colch];
	if (prev == exit) {
		battle.innerHTML = "";
		pStats.justDescended = true;
		pStats.depth++;
		getHit(-pStats.depth);
		depth.innerHTML = pStats.depth;
		if (!(((pStats.depth+1)/2)%10)) {
			generateBoss[((pStats.depth+1)/20-1)%generateBoss.length]();
		} else if (!(pStats.depth%10)) {
			saveGame();
			clear = false;
			state.innerHTML="<p>Game Saved</p>"
			generateCheckMap();
		} else {
			generateMap();
		}
	} else if (prev == HPack) {
		getHit(pStats.HP - pStats.maxHP);
		prev = path;
	}
};
var keys =	function (e) {
    e = e || window.event;
    if (pStats.stickyKeys && (e.keyCode == 38 || e.keyCode == 87 || e.keyCode == 40 || e.keyCode == 83 || e.keyCode == 37 || e.keyCode == 65 || e.keyCode == 39 || e.keyCode == 68)) {
		if (justMoved == e.keyCode) {
			return;
		}
		justMoved = e.keyCode;
		window.onkeyup = function () { 
    		justMoved = false;
		};
	}
    if ((e.keyCode == 38 || e.keyCode == 87) && board[pos[0] - 1][pos[1]] != wall) {
		moveplayer(-1, 0);
    } else if ((e.keyCode == 40 || e.keyCode == 83) && board[pos[0] + 1][pos[1]] != wall) {
        moveplayer(1, 0);
    } else if ((e.keyCode == 37 || e.keyCode == 65) && board[pos[0]][pos[1] - 1] != wall) {
      	moveplayer(0, -1);
    } else if ((e.keyCode == 39 || e.keyCode == 68) && board[pos[0]][pos[1] + 1] != wall) {
    	moveplayer(0, 1);
    } else if (e.keyCode == 80) {
		pauseGame();
    } else if (e.keyCode == 77) {
    	mute();
    }
};
var pauseGame = function () {
	clearInterval(everySecond);
	state.innerHTML = "<p>The game is paused.<br>\
					   Press 'p' to resume.<br>\
					   Press 'q' to quit to menu.<br>\
					   Press 'm' to mute/unmute music.</p>";
	var storEnemies = enemies;
	enemies = [];
	document.onkeydown = function (e) {
		if (e.keyCode == 80) {
			state.innerHTML = "";
			enemies = storEnemies;
			everySecond = setInterval(update, pStats.interval);
			document.onkeydown = keys;
		} else if (e.keyCode == 81) {
			killPlayer(1);
			showMenu();
		} else if (e.keyCode == 77) {
			mute();
		}
	}
};
var moveEnemy = function (i, rowch, colch) {
	if (board[enemies[i].row + rowch][enemies[i].col + colch] == player) {
		enemies[i].inBattle = [rowch,colch];
	} else if (!stillEnemies) {
		board[enemies[i].row][enemies[i].col] = enemies[i].prev;
		var enemyspec = elems[enemies[i].col + enemies[i].row * 2 * size].innerHTML;
		elems[enemies[i].col + enemies[i].row * 2 * size].innerHTML = enemies[i].prev;
		enemies[i].prev = board[enemies[i].row + rowch][enemies[i].col + colch];
		board[enemies[i].row + rowch][enemies[i].col + colch] = enemy;
		elems[enemies[i].col + colch + (enemies[i].row + rowch) * 2 * size].innerHTML = enemyspec;
		enemies[i].row += rowch;
		enemies[i].col += colch;
	}
};
var toLevelUp = function () {
	var toLvl = 0;
	for (var i = 0; i <= pStats.lvl; i++) {
		toLvl += i * i;
	}
	return toLvl;
};
var killEnemy = function (i) {
	if (enemies[i].lvl == "Shadow") {
		pStats.score *= 2;
	} else {
		pStats.score += enemies[i].maxHP;
	}
	pStats.typesKilled[Math.floor(enemies[i].lvl / 10) % 8] = true;
	score.innerHTML = pStats.score;
	if (enemies[i].prev == enemy) {
		enemies[i].prev = path;
	}
	board[enemies[i].row][enemies[i].col] = enemies[i].prev;
	elems[enemies[i].col + enemies[i].row * 2 * size].innerHTML = enemies[i].prev;
	enemies.splice(i,1);
	if (!enemies.length) {
		clear = false;
		state.innerHTML = "<p>Room Clear Bonus: +" + pStats.lvl + " HP!</p>";
		getHit(-pStats.lvl);
	}
	if (++pStats.kills > toLevelUp()) {
		getHit(-(++pStats.lvl));
		clear = false;
		state.innerHTML = "<p><br>You have leveled up!<br>You are now level " + pStats.lvl + "</p>";
		level.innerHTML = pStats.lvl;
	}
	toNextLvl.innerHTML = (1 - pStats.kills + toLevelUp());
};
var getHit = function (damage) {
	if (damage > 0 && prev != water) {
		damage -= pStats.shield;
		if (damage < 0) {
			damage = 0;
		}
		state.innerHTML = "<p>You lose " + damage + " HP</p>";
	}
	pStats.HP -= damage;
	if (pStats.HP > pStats.maxHP) {
		pStats.HP = pStats.maxHP;
	}
	health.innerHTML = "HP: " + pStats.HP + "/" + pStats.maxHP;
	if (pStats.HP <= 0) {
		killPlayer();
	}
};
var killPlayer = function (quit) {
	clearInterval(everySecond);
	if (isMobile) {
		document.getElementById('keys').innerHTML = "";
	}
	document.onkeydown = function (e) {
		if (e.keyCode == 82) {
			restart();
		} else if (e.keyCode == 84) {
			restart(1);
		} else if (e.keyCode == 77) {
			showMenu();
		}
	};
	enemies = [];
	if (pStats.depth > pStats.maxDepth) {
		pStats.maxDepth = pStats.depth;
	}
	if (pStats.currentWeapon > pStats.weaponsFound) {
		pStats.weaponsFound = pStats.currentWeapon;
	}
	pStats.currentWeapon = 0;
	pStats.depth = (pStats.skip * 10);
	pStats.dmg = 0;
	pStats.HP = pStats.maxHP;
	if (!quit) {
		pStats.deaths++;
	}
	saveGame();
	state.innerHTML = "<p id='dead'><br>You have died</p>\
					   <p><span onclick='restart();'>Press 'r' to restart</span><br>\
					   <span onclick='restart(1);'>Press 't' to trade score for max HP boost</span><br>\
					   <span onclick='showMenu();'>Press 'm' to access the menu</span></p>";		
};
var update = function () {
	pStats.time++;
	if (prev == water && !pStats.waterShield) {
		state.innerHTML = "<p><br>You are drowning</p>";
		getHit(Math.ceil(pStats.maxHP * .01));
	} else if (pStats.justDescended && pStats.depth % 10) {
		if (prev == start) {
			state.innerHTML = "<p><br>You descend to the next floor</p>";
		} else {
			pStats.justDescended = false;
		}
	} else if (clear) {
		if (!(pStats.depth%10)) {
			if (!(pStats.depth - pStats.skip*10)) {
				state.innerHTML = "<p><br>You begin your descent</p>";
			} else {
				state.innerHTML = "<p><br>You have reached a checkpoint.<br>Take a breather.</p>";
			}
		} else {
			state.innerHTML = "";
		}
	} else {
		clear = true;
	}
	moveEnemies();
};
var moveEnemies = function () {
	for (var i = 0; i < enemies.length; i++) {
		if (enemies[i].inBattle) {
			attack(i);
		} else {
			var dir = Math.ceil((Math.random()*4));
			if (dir == 1 && board[enemies[i].row - 1][enemies[i].col] != wall && board[enemies[i].row - 1][enemies[i].col] != enemy) {
				moveEnemy(i, -1, 0);
			} else if (dir == 2 && board[enemies[i].row + 1][enemies[i].col] != wall && board[enemies[i].row + 1][enemies[i].col] != enemy) {
				moveEnemy(i, 1, 0);
			} else if (dir == 3 && board[enemies[i].row][enemies[i].col + 1] != wall && board[enemies[i].row][enemies[i].col + 1] != enemy) {
				moveEnemy(i, 0, 1);
			} else if (dir == 4 && board[enemies[i].row][enemies[i].col - 1] != wall && board[enemies[i].row][enemies[i].col - 1] != enemy) {
				moveEnemy(i, 0, -1);
			}
		}
	}
};
var restart = function (boost) {
	info.innerHTML = "";
	document.onkeydown = keys;
	if (boost) {
		if (pStats.highScore < pStats.score) {
			pStats.highScore    = pStats.score;
			highScore.innerHTML = pStats.score;
		}
		pStats.maxHP = (100 + Math.floor(Math.pow(pStats.score, .5))) * (Math.floor(Math.pow(pStats.score, .5)) + 100 > pStats.maxHP) || pStats.maxHP;
		pStats.HP    = pStats.maxHP;
		pStats.score = 0;
		saveGame();
	}
	everySecond = setInterval(update, pStats.interval);
	init();
};
var showInfo = function () {
	info.innerHTML = "<p>This is a dungeon style game developed by Elias Marcopoulos.</p>\
					  <p>The game is mainly based on getting achievements, so try to get all those achievements, eh?</p>\
					  <p>I have the intention of adding boss battles, with special drops to spice up the game.\
					  <br>This also hopefully will come along with a plot of some kind maybe.</p>\
					  <p>The rooms are randomly generated, according to an algorithm I developed,\
					  <br>and thus the game is currently infinite.</p>\
					  <p>I am open to suggestions, if anyone has any ideas feel free to contact me\
					  <br>at down.the.hole.we.all.go@gmail.com</p>\
					  <p>Music from https://www.youtube.com/watch?v=uJqq7BqXEYQ</p>\
					  <p>Thanks for playing!</p>\
					  <p id='warning'><br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>\
					  ...Beware of the Shadows...</p>";
};
var showAchievements = function () {
	var html = "<h1>Achievements</h1>\
			    <h6>Hover over achievement to see description.</h6>\
			    <pre>";
	for (var i = 0; i < 7; i++) {
		html += "<span class='" + (pStats.kills >= Math.pow(10, i)) + "' title='kill " + Math.pow(10, i) + " enemies'>[" + Math.pow(10, i) + "K]</span>  ";
	}
	html += "<br><br>";
	for (var i = 0; i < 8; i++) {
		html += "<span class='" + pStats.typesKilled[i] + "' title='kill enemy type " + i + "'>[<span class='type" + i + "'>*</span>]</span>    ";
	}
	html += "<br><br>";
	for (var i = 0; i < 8; i++) {
		html += "<span class='" + (pStats.maxDepth >= Math.floor(Math.pow(3, 1.5 * i))) + "' title='descend " + Math.floor(Math.pow(3, 1.5 * i)) + " floors'>[" + Math.floor(Math.pow(3, 1.5 * i)) + "F]</span>  ";
	}
	html += "<br><br>";
	for (var i = 0; i < 8; i++) {
		html += "<span class='" + (pStats.deaths >= Math.floor(Math.pow(1.5, 3 * i))) + "' title='die " + Math.floor(Math.pow(1.5, 3 * i)) + " times'>[" + Math.floor(Math.pow(1.5, 3 * i)) + "D]</span>  ";
	}
	html += "<br><br>";
	for (var i = 0; i < weapons.length; i++) {
		var abbrev = "";
		if (weapons[i].name == "a broadsword") {
			abbrev = "BS";
		} else if (weapons[i].name == "a shotgun") {
			abbrev = "SG";
		} else {
			if (weapons[i].name[0] != 'a' && weapons[i].name[0] != 't') {
				abbrev += weapons[i].name[0];
			}
			for (var j = 0; j < weapons[i].name.length; j++) {
				if (weapons[i].name[j] == " ") {
					abbrev += weapons[i].name[j + 1];
				}
			}
		}
		html += '<span class="' + (pStats.weaponsFound > i) + '" title="pickup ' + weapons[i].name + '">[' + abbrev.toUpperCase() + ']</span> ';
	}
	html += "<br><br>";
	for (var i = 0; i < 7; i++) {
		html += "<span class='" + (pStats.highScore > Math.pow(2, 5 * i)) + "' title='record a score above " + Math.pow(2, 5 * i) + "'>[" + Math.pow(2, 5 * i) + "S]</span>  ";
	}
	html += "<br><br><span class='" + (pStats.time >= 1) + "' title='play for 1 second'>[1S]</span>  <span class='" + (pStats.time >= 10) + "' title='play for 10 seconds'>[10S]</span>  <span class='" + (pStats.time >= 60) + "' title='play for 1 minute'>[1M]</span>  <span class='" + (pStats.time >= 600) + "' title='play for 10 minutes'>[10M]</span>  <span class='" + (pStats.time >= 3600) + "' title='play for 1 hour'>[1H]</span>  <span class='" + (pStats.time >= 36000) + "' title='play for 10 hours'>[10H]</span>  <span class='" + (pStats.time >= 24 * 3600) + "' title='play for 1 day'>[1D]</span>  <span class='" + (pStats.time >= 48 * 3600) + "' title='play for 2 days'>[2D]</span>  <span class='" + (pStats.time >= 3 * 24 * 3600) + "' title='play for 3 days'>[3D]</span>";
	var shadow = false;
	for (var i = 0; i < pStats.achievements.length; i++) {
		if (pStats.achievements[i]) {
			if (!shadow) {
				shadow = true;
				html += "<br><br><br>S h A d O w  A c H i E v E m E n T s";
			}
			switch (i) {
			    case 0:
			        html += "<br><br><span class='true' title='read all the hints'>[?]</span>  ";
			        break;
			    case 1:
			        break;
			    case 2:
			        break;
			    case 3:
			        break;
			    case 4:
			        break;
			    case 5:
			        break;
			    case 6:
			    	break;
			}
		}
	}
	html += "<br><br>";
	info.innerHTML = html + "</pre>";
};
var showData = function () {
	info.innerHTML = "<h1>Player Data</h1><pre>Hero Name:   " + pStats.name + "<br>Hero Level:  " + pStats.lvl + "<br>Max HP:      " + pStats.HP + "<br>Score:       " + pStats.score + "<br>High Score:  " + pStats.highScore + "<br>Deepest Run: " + pStats.maxDepth + "<br>Enemy Kills: " + pStats.kills + "<br>Death Toll: " + pStats.deaths + "<br>Time Played: " + pStats.time + "s</pre>";
};
var showShop = function () {
	info.innerHTML="<h1>Shop</h1>\
					<h6>Hover over an item to see description and click to buy</h6>\
					<h3>Score: "+pStats.score+"</h3>\
					<p class='"+(pStats.score >= (10000*Math.pow(2,pStats.multiply)))+"' onclick='\
						if (pStats.score >= (10000*Math.pow(2,pStats.multiply))) {\
							pStats.score -= (10000*Math.pow(2,pStats.multiply++));\
							saveGame();\
							showShop();\
						}\
					' title='"+(pStats.multiply+1)+" times damage multiplier (costs "+(10000*Math.pow(2,pStats.multiply))+" score)'>[x"+(pStats.multiply+1)+"]</p>\
					"+(((pStats.multiply >= 3)&&("<p class='"+(pStats.shadowMultiply||(pStats.score >= 40000))+"' onclick='\
						if ((pStats.score >= 40000) && !pStats.shadowMultiply) {\
							pStats.score -= 40000;\
							pStats.shadowMultiply = true;\
							saveGame();\
							showShop();\
						}\
					' title='Shadow multiplier "+((pStats.shadowMultiply&&"(owned)")||"(costs 40000 score)")+"'>[xS]</p>"))||"")+"\
					<p class='"+(pStats.score >= (500*(pStats.shield+1)))+"' onclick='\
						if (pStats.score >= (500*(pStats.shield+1))) {\
							pStats.score -= (500*(++pStats.shield));\
							saveGame();\
							showShop();\
						}\
					' title='Shield "+(pStats.shield+1)+" damage (costs "+(500*(pStats.shield+1))+" score)'>[-"+(pStats.shield+1)+"]</p>\
					"+(((pStats.shield >= 9)&&("<p class='"+(pStats.shadowShield||(pStats.score >= 40000))+"' onclick='\
						if ((pStats.score >= 40000) && !pStats.shadowShield) {\
							pStats.score -= 40000;\
							pStats.shadowShield = true;\
							saveGame();\
							showShop();\
						}\
					' title='Shadow shield "+((pStats.shadowShield&&"(owned)")||"(costs 40000 score)")+"'>[-S]</p>"))||"")+"\
					"+(((pStats.shadowShield)&&("<p class='"+(pStats.waterShield||(pStats.score >= 80000))+"' onclick='\
						if ((pStats.score >= 80000) && !pStats.waterShield) {\
							pStats.score -= 80000;\
							pStats.waterShield = true;\
							saveGame();\
							showShop();\
						}\
					' title='water shield "+((pStats.waterShield&&"(owned)")||"(costs 80000 score)")+"'>[-W]</p>"))||"")+"\
					<p class='"+(pStats.score >= (5000*(pStats.skip+1)))+"' onclick='\
						if (pStats.score >= (5000*(pStats.skip+1))) {\
							pStats.score -= (5000*(++pStats.skip));\
							pStats.depth = (pStats.skip*10);\
							saveGame();\
							showShop();\
						}\
					' title='Skip to floor "+((pStats.skip+1)*10)+" (costs "+(5000*(pStats.skip+1))+" score)'>[->"+((pStats.skip+1)*10)+"]</p>\
					<p class='"+(pStats.score >= 500000)+"' onclick='\
						if (pStats.score >= 500000) {\
							pStats.score -= 500000;\
							pStats.stickyKeys = !pStats.stickyKeys;\
							saveGame();\
							showShop();\
						}\
					' title='"+((pStats.stickyKeys&&'')||'re')+"move repeatedly "+((pStats.stickyKeys&&'')||'moving ')+"when holding arrow keys (costs "+(500000)+" score)'>[>>>]</p>";
};
var showBoard = function () {
	var html = "<h1>Leaderboard</h1>";
	var scores = [];
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == 4) {
	        var allStats = JSON.parse(this.response);
	        for (var name in allStats) {
				if (allStats.hasOwnProperty(name)) {
	    			scores[scores.length] = {"name":name,"score":allStats[name]};
				}
			}
			scores.sort(function (b,a) {
				return a.score - b.score;
			});
			for (var i = 0; i < scores.length; i++) {
				html += "<p>" + (i + 1) + ") " + scores[i].name + ": " + scores[i].score + "</p>";
			}
			info.innerHTML = html;
		}
	}
	xhr.open('GET', "/allStats", true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send(null);
};
var showHints = function () {
	info.innerHTML = "<h1>Hints</h1>\
					  <h3>Basic:</h3>\
					  <p>If you just wanna see the tutorial again, click <span onclick='menu.innerHTML=\"\";intro(1);'>[here]</span>.</p>\
					  <p>To attack an enemy, just walk into it.</p>\
					  <p>You sink, but you also swim. If you move off of a water block\
					  <br>within a fraction of a second, you won't be hurt.</p>\
					  <p>To move twice as fast try using the wasd and arrow keys at the same time</p>\
					  <p>Your hero level is determined by the amount of enemies you kill, so keep fighting.</p>\
					  <p>Your highScore updates when you trade in your score for a MaxHP boost,\
					  <br>so to keep track of a record, trade it in!</p>\
					  <p>Not sure what something is/does? Try hovering the mouse over it.</p>\
					  <p>The game saves your stats upon death or reach of a checkpoint floor.</p>\
					  <p>Music getting annoying? Press 'm' in game to mute! Or click <span onclick='mute();'>[here!]</span>\
					  <h3>Advanced:</h3>\
					  <p>You attack first, so if you can kill an enemy in one shot, it won't hurt you.</p>\
					  <p>Your damage is equal to your level added to the damage from your weapon.</p>\
					  <p>The maximum number of enemies is 40, ensuring at most 5 of each type of enemy.\
					  <br>Enemy colors loop through the rainbow,\
					  <br>so at depth 41 a single red is the strongest enemy.</p>\
					  <p>The Max HP boost earned by pressing 't' is equal to\
					  <br>100 plus the square root of your highest recorded score.\
					  <br>If you press 't' and your score is not greater than your highest score recorded,\
					  <br>you will receive no bonus and lose your score.</p>\
					  <p>The query string paramter 'size' will change the size of the map.\
					  <br>(Game quality not guaranteed)</p>\
					  <p onclick='pStats.achievements[0] = true;'>I don't think anyone even reads these things...</p>";
};
var showQuests = function () {
	info.innerHTML = "<p>Quests coming in the next version...</p><p>There will also be more achievements and items in the shop!</p>";
};
var showMenu = function () {
	map.innerHTML = "";
	stats.innerHTML = "";
	menu.innerHTML = "<pre>Press:<br>     <span onclick='showInfo();'>'i' for info</span><br>     <span onclick='showAchievements();'>'a' for achievements</span><br>     <span onclick='showShop();'>'s' for shop</span><br>     <span onclick='showData();'>'d' for player data</span><br>     <span onclick='showQuests();'>'q' for quests</span><br>     <span onclick='showBoard();'>'l' for leaderboard</span><br>     <span onclick='showHints();'>'h' for hints</span><br><br><span onclick='menu.innerHTML=\"\";restart();'>'r' to restart</span><br><span onclick='menu.innerHTML=\"\";restart(1);'>'t' to trade score for Max HP boost</span><br><br><span onclick='changeUser();'>'u' to change user</span><br><span onclick='mute();'>'m' to mute/unmute music</span></pre>";
	document.onkeydown = function (e) {
		if (e.keyCode == 73) {
			showInfo();
		} else if (e.keyCode == 65) {
			showAchievements();
		} else if (e.keyCode == 83) {
			showShop();
		} else if (e.keyCode == 68) {
			showData();
		} else if (e.keyCode == 76) {
			showBoard();
		} else if (e.keyCode == 81) {
			showQuests();
		} else if (e.keyCode == 72) {
			showHints();
		} else if (e.keyCode == 82) {
			menu.innerHTML = "";
			restart();
		} else if (e.keyCode == 84) {
			menu.innerHTML = "";
			restart(1);
		} else if (e.keyCode == 85) {
			changeUser();
		} else if (e.keyCode == 77) {
			mute();
		}
	}
};
var intro = function (menu) {
	info.innerHTML = "<h1>Welcome to The Game</h1>\
					  <p>Here is a quick breakdown of everything:<br>\
					  "+player+" is your hero, it's the first letter of your name, "+pStats.name+".<br>\
					  (Not you? Click <span onclick='changeUser();'>[here]<span> or press 'u' to switch user)<br>\
					  "+path+" is the path you can walk on.<br>\
					  "+wall+" is a wall, blocking the way.<br>\
					  "+water+" is water-- caution though, you sink!<br>\
					  "+weapon+" is a weapon, pick them up for a damage boost.<br>\
					  <span class='type1'>"+enemy+"</span> is an enemy. They come in many colors.<br>\
					  "+exit+" is the hole you fall to the next floor through.<br>\
					  "+start+" marks where you descended from the previous floor.<br>\
					  You can use the arrow keys or wasd keys to move.<br>\
					  Press 'p' to pause the game.<br>\
					  Press 'm' to mute/unmute the music.<br>\
					  <br>\
					  Your hero level allows you to do more damage to enemies.<br>\
					  Level up by battling foes!<br>\
					  But also be sure to watch your health points (HP).<br>\
					  Try to go deep, get a high score, and get all the weapons!</p>\
					  <p>Press any key to start your legacy.<br>\
					  Or click <span onclick='restart();'>[here]</span></p>";
	document.onkeydown = function (e) {
		if (e.keyCode == 85) {
			changeUser();
		} else if (e.keyCode == 77) {
			mute();
		} else {
			if (menu) {
				showMenu();
				showHints();
			} else {
				restart();
			}
		}
	}
};
var login = function (name, pass) {
	if (name && pass) {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
	 		if (xhr.readyState == 4) {
	 			if (this.response != "newUser") {
		 			pStats = JSON.parse(this.response);
		 		} else {
		 			pStats = newUser(name, pass);
		 		}
		 		if (document.getElementById('remember').checked) {
					localStorage.user = pStats.name;
					localStorage.pass = pStats.pass;
				}
				player = "<span title='player' class='player'>" + pStats.name[0] + "</span>";
				intro();
	 		}
	 	}
		xhr.open('POST', "/changeUser", true);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		sendstring = "user=" + (name) + "&pass=" + (pass);
		xhr.send(sendstring);
	}
};
var changeUser = function () {
	document.onkeydown = function (e) {
		if (e.keyCode == 13) {
			login(document.getElementById('user').value, document.getElementById('pass').value);
		}
	};
	menu.innerHTML = "";
	info.innerHTML = "<p>Enter your username and password:<br>\
					  <input type='text' id='user' autofocus><br>\
					  <input type='password' id='pass'><br>\
					  Remember Me <input type='checkbox' id='remember' checked>\
					  <span onclick='login(document.getElementById('user').value, document.getElementById('pass').value);'>[Submit]</span></p>\
					  <h6>Note: If you do not yet have an account, this form will create an account for you.</h6>";
};
var saveGame = function () {
	var name = pStats.name;
	var xhr = new XMLHttpRequest();
	xhr.open('POST', "/saveGame", true);
	xhr.onreadystatechange = function() {
 		if (xhr.readyState == 4) {
 			if (this.response == "update") {
	 			window.location.href = window.location.origin+'/update';
	 		}
 		}
 	}
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	sendstring = "pStats=" + JSON.stringify(pStats);
	xhr.send(sendstring);
	localStorage.prevLogin = JSON.stringify(pStats);
};
var letUsBegin = function () {
	if (localStorage.user && localStorage.pass) {
		login(localStorage.user, localStorage.pass);
		pStats.v = 2.5;
	} else {
		intro();
	}
}();