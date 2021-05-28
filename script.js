
(function  (){
    

    let game ={
   
    squares: {
        1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""
    },

    //1 = yes, 0 = no. hvh =human vs human, hveAI = human vs easy AI, hvIAI = human vs Impossible AI. Default is hvh. Player 1 is always human
    Player1: {
        name: "",
        human: 1,
        symbol: "X",  
    },
    Player2: {
        name: "",
        human:1,
        symbol: "O",
    },
    gameState:{
        hvh: 0,
        hveAI: 0,
        hvIAI: 0,
    },

    //turn counter
    turns:[],

    //available spaces, after choosing a space, this array gets smaller 
    availableSpaces:[1,2,3,4,5,6,7,8,9],

    init: function () {
        this.cacheDom();
        this.bindEvents();
        this.render();
    },
    cacheDom: function(){
        this.$el = $('#gameModule');
        this.$div = this.$el.find('#game');
        this.$button = this.$div.find('button');
        this.$curPlayer = this.$el.find('#displayTurn');
        this.$reset = this.$el.find('#resetButton');
        this.$P1Name = this.$el.find('#form1');
        this.$P2Name = this.$el.find('#form2');
        this.$choice = this.$el.find('input[name=choice]');
        this.$restart = this.$el.find('#restartButton');
        
        this.$Start = this.$el.find('.front');
        
    },
    bindEvents: function(){
        this.$button.on('click',this.addSquare.bind(this));
        this.$reset.on('click',this.resetGame.bind(this));
        this.$restart.on('click',this.restartGame.bind(this));
        this.$Start.on('click',this.startGame.bind(this));
    },

    checkInputs: function(){
        if(this.$P1Name.val() != "" && this.$P2Name.val() != "" && (this.$choice.filter(":checked").val() === "1" || this.$choice.filter(":checked").val() === "2" )) 
        {InitialForm.style.display = "none";
        this.displayPlayer();}
        else {alert("You need to fill out both names and select and option")}
    },

    startGame: function(){
        this.checkInputs();
        this.Player1.name = this.$P1Name.val();
        this.Player2.name = this.$P2Name.val();
        let checkedValue = this.$choice.filter(":checked").val();
        
       if(checkedValue==="1"){
        this.gameState.hvh = 1;
        this.gameState.hveAI = 0;
        }
        else
        {this.gameState.hvh = 0;
        this.gameState.hveAI =1;
        }
       
        

    },

    render: function(){
        this.displayPlayer();
        if(this.turns.length >=1){
        for (let i = 1; i <=9; i++)
             { 
                if(this.squares[i] != "" && this.gameState.hvh === 1){
                 if(this.squares[i]==="X"){
               document.getElementById(i).innerHTML = this.squares[i];
               setTimeout(function(){document.getElementById(i).classList.add('pre-animation1')},50)
                 }
                 if(this.squares[i]==="O"){
                    document.getElementById(i).innerHTML = this.squares[i];
                    setTimeout(function(){document.getElementById(i).classList.add('pre-animation2')},50)
                 }
                }
                if(this.squares[i] != "" && this.gameState.hvh === 0){
                    if(this.squares[i]==="X"){
                    document.getElementById(i).innerHTML = this.squares[i];
                    setTimeout(function(){document.getElementById(i).classList.add('pre-animation1')},50)}
                    if(this.squares[i]==="O"){
                    document.getElementById(i).innerHTML = this.squares[i];
                    setTimeout(function(){document.getElementById(i).classList.add('pre-animation2')},400)}  
                }    
                     }

             }
         
        
    },



    addSquare: function(event){
        let $add = $(event.target).closest('button');
        let numb = $add.attr('id');
        let inte = parseInt(numb)-1;
        if( this.squares[numb]=="" ){
        if (this.turns.length == 0 || this.turns.length ==2 || this.turns.length ==4 || this.turns.length ==6|| this.turns.length == 8)
        { 
            this.squares[numb] = "X";
            this.turns.push(null);
           this.availableSpaces = this.availableSpaces.filter(inte => inte != numb);
           console.log(this.availableSpaces);
        
        this.checkConditionsX();
        this.render();
           if (this.gameState.hveAI ==1 && (this.turns.length == 1 || this.turns.length == 3 || this.turns.length == 5 || this.turns.length ==7))
           {this.easyAI()}
           else if (this.gameState.hvIAI == 1 && this.turns.length<9)
           {this.impossibleAI();}
         
        }  
        else if (this.gameState.hvh == 1 && (this.turns.length == 1 || this.turns.length == 3 || this.turns.length == 5 || this.turns.length ==7))
        { 
        this.squares[numb] = "O";
        this.turns.push(null);
        this.availableSpaces = this.availableSpaces.filter(inte => inte != numb) }
        
        
        this.render();
        this.checkConditionsO();
        this.checkTie();
        
        }
    },

     
        easyAI: function()
        {   
            let AImove = this.availableSpaces[Math.floor(Math.random() * this.availableSpaces.length)];
            //document.getElementById(AImove).innerHTML = "O";
            this.squares[AImove] = "O";
            this.turns.push(null);
            const index = this.availableSpaces.indexOf(AImove);
                if (index > -1) {
                this.availableSpaces.splice(index, 1);
                }
                this.render();
            
        },

       

    displayPlayer: function(){
        if (this.turns.length == 0 || this.turns.length ==2 || this.turns.length ==4 || this.turns.length ==6|| this.turns.length == 8)
        {   document.getElementById("displayTurn").innerHTML = `Current Player: ${this.Player1.name}` ;}
        else if (this.turns.length == 1 || this.turns.length == 3 || this.turns.length == 5 || this.turns.length ==7)
        { document.getElementById("displayTurn").innerHTML = `Current Player: ${this.Player2.name}` ;}
    },

    //check if X has won
    checkConditionsX: function()
    {   let X = "X"
        if((this.squares[1]== X && this.squares[2]== X && this.squares[3]== X)||(this.squares[4]== X && this.squares[5]== X && this.squares[6]== X )||(this.squares[7]== X && this.squares[8]== X && this.squares[9]== X )||(this.squares[1]== X && this.squares[4]== X && this.squares[7]== X )||(this.squares[2]== X && this.squares[5]== X && this.squares[8]== X )||(this.squares[3]== X && this.squares[6]== X && this.squares[9]== X )||(this.squares[3]== X && this.squares[5]== X && this.squares[7]== X )||(this.squares[1]== X && this.squares[5]== X && this.squares[9]== X ) )
        { 
            
            
        modal.style.display = "block"; 
        if(this.gameState.hvh ===1){
        document.getElementById("Player1").innerHTML = `Good Game! ${this.Player1.name} won the game!!`;}
        else { document.getElementById("Player1").innerHTML = `Good Game! You won!!`;}
        this.turns.push(null,null,null,null,null);
    
    }
    },
    //check if O has won
    checkConditionsO: function()
    {
        let X = "O"
        if((this.squares[1]== X && this.squares[2]== X && this.squares[3]== X)||(this.squares[4]== X && this.squares[5]== X && this.squares[6]== X )||(this.squares[7]== X && this.squares[8]== X && this.squares[9]== X )||(this.squares[1]== X && this.squares[4]== X && this.squares[7]== X )||(this.squares[2]== X && this.squares[5]== X && this.squares[8]== X )||(this.squares[3]== X && this.squares[6]== X && this.squares[9]== X )||(this.squares[3]== X && this.squares[5]== X && this.squares[7]== X )||(this.squares[1]== X && this.squares[5]== X && this.squares[9]== X ) )
        {if(this.gameState.hvh ===1)
        { modal2.style.display = "block";
        document.getElementById("Player2").innerHTML = `Good Game! ${this.Player2.name} won the game!!`;
        this.turns.push(null,null,null,null)}
        
        else{
            modal2.style.display = "block";
        document.getElementById("Player2").innerHTML = `Close one, the computer player, ${this.Player2.name}, won the game!!`;
        this.turns.push(null,null,null,null)}
        }
    },

    checkTie: function(){
    if(this.turns.length == 9)
    { modal3.style.display = "block";}
    else return;
    },
    
    resetGame: function()
    {
        this.turns.splice(0, this.turns.length);
        this.availableSpaces.splice(0,this.availableSpaces.length)
        for (let i =1; i <=9; i++)
        {
        document.getElementById(i).innerHTML = "";
        document.getElementById(i).classList.remove('pre-animation1')
        document.getElementById(i).classList.remove('pre-animation2')
        this.squares[i]="";
        this.availableSpaces.push(i);
        }
    this.displayPlayer();

    },

    restartGame: function()
    {   
        document.getElementById('form1').value = '';
        document.getElementById('form2').value = '';
        document.getElementById('1v1').checked = false;
        document.getElementById('ai').checked = false;
        InitialForm.style.display = "block";
        this.turns.splice(0, this.turns.length);
        this.availableSpaces.splice(0,this.availableSpaces.length)
        for (let i =1; i <=9; i++)
        {
        document.getElementById(i).innerHTML = "";
        document.getElementById(i).classList.remove('pre-animation')
        this.squares[i]="";
        this.availableSpaces.push(i);
        }


    this.displayPlayer();

    },

    //I'm not sure how to do this yet with how I structured the game. I might return to this later
    impossibleAI: function()
    {    
        
        //first turn
        if(this.turns.length == 1){
            //case 1
            if (this.squares[1] == "X"||this.squares[3] == "X"||this.squares[7] == "X"||this.squares[9] == "X")
                this.chooseAI(5);
            if (this.squares[2] == "X"||this.squares[4] == "X"||this.squares[5]=="X")
                this.chooseAI(1);
            if (this.squares[6] == "X"||this.squares[8] == "X")
            this.chooseAI(9);

         }
       
        


    },
        
    

   chooseAI: function(number)
   {   
       this.squares[number] = "O";
       this.turns.push(null);
       const index = this.availableSpaces.indexOf(number);
           if (number > -1) {
           this.availableSpaces.splice(number, 1);
               }
   },
    }
    game.init();
    
})();




//Popup functions

var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
span.onclick = function() {
    modal.style.display = "none";
  }
span2.onclick = function() {
    modal2.style.display = "none";
  }
span3.onclick = function() {
  modal3.style.display = "none";
}
  window.onclick = function(event) {
    if (event.target == modal|| event.target == modal2 || event.target == modal3) {
      modal.style.display = "none";
      modal2.style.display = "none";
      modal3.style.display = "none";
    }
  }

//initial form selector
var InitialForm = document.getElementById("InitialForm");
var span4 = document.getElementsByClassName("front")[0];


window.onload = function()
{
    InitialForm.style.display = "block";
}

