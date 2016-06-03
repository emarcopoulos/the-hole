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
- delete enemies on pause
- Say how many kills to next level
- make the enemies stop running into walls forever
- add Title attr for everything
- leaderboard position in player data
- allow clicking menu options
- Shop
	- strong enemies
- Achievements
	- Make shadow killer achievement
	- Death by shadow
	- Dying a lot achievement

###################################
## UPDATES ADDED TO THE GAME ######
###################################
### The Past ######################
###################################
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

###################################
### 6/2/2016 ######################
###################################
- Deployed the game to heroku
- Updated site title to 'The Hole'
- Designed and added a favicon 
- Created this README

###################################
### 6/3/2016 ######################
###################################
- Fixed formatting on README.md