
(function  (){
    

    let game ={
   
    squares: {
        1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""
    },
    currentPlayer: "X",

    turns:[],

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
    },
    bindEvents: function(){
        this.$button.on('click',this.addSquare.bind(this));
        this.$reset.on('click',this.resetGame.bind(this));
    },
    render: function(){
        var curData = { 
            game:this.squares,
        };
        //do a for loop to fill up all button's with curData
        this.displayPlayer();
    },
    addSquare: function(event){
        let $add = $(event.target).closest('button');
        let numb = $add.attr('id');
        if( this.squares[numb]=="" ){
        if (this.turns.length == 0 || this.turns.length ==2 || this.turns.length ==4 || this.turns.length ==6|| this.turns.length == 8)
        {   document.getElementById(numb).innerHTML = "X";
            this.squares[numb] = "X";
            this.turns.push(null);
         }
        else if (this.turns.length == 1 || this.turns.length == 3 || this.turns.length == 5 || this.turns.length ==7)
        { document.getElementById(numb).innerHTML = "O";
        this.squares[numb] = "O";
        this.turns.push(null); }
       
        
        
        this.checkConditionsX();
        this.checkConditionsY();
        this.render();
        }
    },

    displayPlayer: function(){
        if (this.turns.length == 0 || this.turns.length ==2 || this.turns.length ==4 || this.turns.length ==6|| this.turns.length == 8)
        {   document.getElementById("displayTurn").innerHTML = "Current Player: X";}
        else if (this.turns.length == 1 || this.turns.length == 3 || this.turns.length == 5 || this.turns.length ==7)
        { document.getElementById("displayTurn").innerHTML = "Current Player: O";}
    },

    checkConditionsX: function()
    {   let X = "X"
        if(this.squares[1]== X && this.squares[2]== X && this.squares[3]== X )
        { modal.style.display = "block"; this.turns.push(null,null,null,null)}
        else if (this.squares[4]== X && this.squares[5]== X && this.squares[6]== X )
        { modal.style.display = "block"; this.turns.push(null,null,null,null)}
        else if (this.squares[7]== X && this.squares[8]== X && this.squares[9]== X )
        { modal.style.display = "block"; this.turns.push(null,null,null,null)}
        else if (this.squares[1]== X && this.squares[4]== X && this.squares[7]== X )
        { modal.style.display = "block"; this.turns.push(null,null,null,null)}
        else if (this.squares[2]== X && this.squares[5]== X && this.squares[8]== X )
        { modal.style.display = "block"; this.turns.push(null,null,null,null)}
        else if (this.squares[3]== X && this.squares[6]== X && this.squares[9]== X )
        { modal.style.display = "block"; this.turns.push(null,null,null,null)}
        else if (this.squares[3]== X && this.squares[5]== X && this.squares[7]== X )
        { modal.style.display = "block"; this.turns.push(null,null,null,null)}
        else if (this.squares[1]== X && this.squares[5]== X && this.squares[9]== X )
        { modal.style.display = "block"; this.turns.push(null,null,null,null)}
    },
    checkConditionsY: function()
    {
        let X = "O"
        if(this.squares[1]== X && this.squares[2]== X && this.squares[3]== X )
        { modal2.style.display = "block";this.turns.push(null,null,null,null)}
        else if (this.squares[4]== X && this.squares[5]== X && this.squares[6]== X )
        { modal2.style.display = "block"; this.turns.push(null,null,null,null)}
        else if (this.squares[7]== X && this.squares[8]== X && this.squares[9]== X )
        { modal2.style.display = "block"; this.turns.push(null,null,null,null)}
        else if (this.squares[1]== X && this.squares[4]== X && this.squares[7]== X )
        { modal2.style.display = "block"; this.turns.push(null,null,null,null)}
        else if (this.squares[2]== X && this.squares[5]== X && this.squares[8]== X )
        { modal2.style.display = "block"; this.turns.push(null,null,null,null)}
        else if (this.squares[3]== X && this.squares[6]== X && this.squares[9]== X )
        { modal2.style.display = "block"; this.turns.push(null,null,null,null)}
        else if (this.squares[3]== X && this.squares[5]== X && this.squares[7]== X )
        { modal2.style.display = "block"; this.turns.push(null,null,null,null)}
        else if (this.squares[1]== X && this.squares[5]== X && this.squares[9]== X )
        { modal2.style.display = "block"; this.turns.push(null,null,null,null)}
    },
    
    resetGame: function()
    {
        this.turns.splice(0, this.turns.length);
        for (let i =1; i <=9; i++)
        {document.getElementById(i).innerHTML = "";
            this.squares[i]="";
        }
    this.displayPlayer();

    },


    };

    game.init();

})();


var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
span.onclick = function() {
    modal.style.display = "none";
  }
span2.onclick = function() {
    modal2.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal|| event.target == modal2) {
      modal.style.display = "none";
      modal2.style.display = "none";
    }
  }