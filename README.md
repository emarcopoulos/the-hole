#README for Down the Hole we all Go

##'Down the Hole we all Go', or 'The Hole', is a JavaScript game in which a hero descends through increasingly difficult levels with a simple goal: _go deep_.

#####ALGORITHM FOR GENERATION OF RANDOM FLOORS:
1. Generate a map filled with walls
2. Create a room at the players position
3. Build a maximum of rooms equal to a fifth of the height of the map
4. Connect each of those rooms to the start room
5. Build a room and put the exit inside
6. Connect the last generated empty room to the exit room
7. Place a weapon, with a decreasing 1/n probability of occurence
8. Place enemies, up to 40, of increasing difficulty based on player depth

###Things to be implemented:
- Quests
- Prayer
- create better tutorial
- make the enemies stop running into walls forever
- add Title attr for everything
- leaderboard position in player data
- Shop
	- strong enemies
	- change enemy interval
- Achievements
	- Make shadow killer achievement
	- Death by shadow
- Update system for database on index.js
- fix bugs with kills

#####################################
## UPDATES ADDED TO THE GAME ########
#####################################
### The Past ########################
#####################################
- Started building The Game
- Displayed maps correctly:
  - Walls
  - Player
  - Paths
  - Water
- Allowed the player to move
- CSS styling:
  - monospace font
  - colorful maps
- Added enemies which move
- Added battling enemies
- Placed weapons
- Kept track of player statistics
- Added colorful enemies
- Added Shadow enemies
- Added a menu screen with:
  - Achievements:
    - Kills
    - Time played
	- Score
	- Weapon pickups
	- Colors killed
	- Depth reached
  - Shop:
	- Damage multipliers
	- Shields
	- Skip initial floors
  - Hints:
	- Basic and Advanced
  - Info Section
- Added instructions on first play
- Added royalty free music
- CSS made responsive

#####################################
### 6/2/2016 ########################
#####################################
- Deployed the game to heroku
- Updated site title to 'The Hole'
- Designed and added a favicon 
- Created this README

#####################################
### 6/3/2016 ########################
#####################################
- Fixed formatting on README.md

#####################################
### 6/4/2016 ########################
#####################################
- Made the game work on mobile

#####################################
### 6/5/2016 ########################
#####################################
- Added MongoDB storage for users
  - post methods for:
  	- logging in
  	- saving game
  - get method for:
  	- retrieving high scores
- Added useer global accounts
  - each player has:
	- username
	- password
  - leaderboard is now global
- disable user zoom on mobile
- better position mobile controls

#####################################
### 6/6/2016 ########################
#####################################
- death count stats and achievement
- no longer can hold down keys
- removed enemy speed up after pause
- display kills to next level

#####################################
### 6/7/2016 ########################
#####################################
- added shop item:
  - allow switch for move key holding
- can now click on menu items
- added mobile pause button
- allow reaccess to intro
- changed lvlUp mechanic

#####################################
### 6/10/2016 #######################
#####################################
- changed lvlUp mechanic
- added smileyBoss level

#####################################
### 6/11/2016 #######################
#####################################
- added health packs
- added forced update mechanic

#####################################
### 6/12/2016 #######################
#####################################
- added rainbowBoss
- added bcrypt password encryption