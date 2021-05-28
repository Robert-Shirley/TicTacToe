5/17
Started tic tac toe project
This will be great practice for objects and factory functions. After the calculator project, I know that I could do this entire project without factory functions, but I want to make sure to get more practice with them. I also want to see if I can do modules with private and public methods. I'll try to not use many global variables so that I can also focus on scope. Also, I want the code to look pretty and be readable, something I struggle with currently

Today I started the project and added some design layout and UI

5/18
Pretty productive session actually. Surprisingly, I'm almost done with the game. I finished the design, added a popup that shows which player won, set up victory conditions, only allows valid moves, it updates live with the current player's move, added a reset button, added a few transition elements. I formatted all of my code into a module, this allowed me to keep everything pretty clean. I also used some Jquery for the first time. 
Tomorrow, I want to add the AI's to play against. I also need to add a draw condition

5/18 another quick update, I added check tie conditions, added a popup for a tie, and cleaned up the code for checkwin conditions a little bit

5/19 added an AI that randomly chooses. I also added a bit to the initial form. I want to be able to select 1 player (vs ai) or 2 player (human vs human) I also want to be able to add names to the players, will be working on that next. 
I spent some time trying to learn minimax, to make an AI that is impossible to beat. I can't figure out how to add it to how I designed my game. Maybe I'll dive deeper or maybe i'll save that idea for another day. 

5/25
It's been a few days without coding. I got the covid vaccine second dose, and it got me good for a couple of days. Then I had a busy weekend. I'm glad I was able to work on this for a bit, we're inches away from it being done. This session I added an initial form that you can input the players names and select whether its a human v human or human v ai game. Then, I made it so that those options alter the players and gameState objects, so the choices are "sticky". The game type is determined by the choice of hvh or hvai.  
To finish it, I want to add a restart button. This will bring back up the form to select the names and game type. I want to make it so the forms clear out and don't save info. I want to add a cool transition for adding the letters, so it's not instantaneous, especially for the AI player. Currently, the AI's move is instant, and it looks clunky. Finally, I want to add a cool style to make the game have a neon style... Hopefully this is all done by either tomorrow or thursday, Im ready to move on

5/26
Added form validation to the beginning form. I added a restart button. And I added a transition when you click a square and made the computer have a transition as well. Also, depending on if its a hvh or hvAI game, the winning messages will be different.
All that really remains is to add a cool neon theme and we should be done. There are a few other things we could do, like add a tally that keeps track of wins, but I think we'll skip that for now

5/27
Added a neon effect to everything. Looks pretty freakin cool to me! Happy with how this one turned out

Attack plan:

1 - Design (done)

2 - class for the gameboard (done)

3 - add functionality with clicking (done)

4 - first, make it 2 human players (done)

5 - add 1st player (X's) (factory) + (method)  (done)

6 - add 2nd player (O's) and alternate players (factory) + (method)  (done)

7 - only valid moves allowed (method)  (done)
 
8 - victory or draw conditions (method)  (done)

9 - Display curr player (method) (done)

10 - reset button (method)  (done)
 
11 - AI button, w/ 2 difficulties easy and hard (impossible to beat)

12 - AI #1 - Random moves, valid selections only (done)

13 - AI #2 - impossible - ref Odin



14 - add cool styling, I like the neon effect

