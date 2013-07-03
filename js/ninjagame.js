function init(){
			 
	var p1score = document.getElementById('p1score');
	var p2score = document.getElementById('p2score');

    var wstar1 = document.getElementById('w_star1');   
    var wstar2 = document.getElementById('w_star2');   

    var nbhita = document.getElementById('ninjaboya');
    var nbhitb = document.getElementById('ninjaboyb');   

    var nchita = document.getElementById('ninjacata');
    var nchitb = document.getElementById('ninjacatb'); 
  
     nbhita.addEventListener('click', throwStar1, false); 
     nbhitb.addEventListener('click', throwBomb1, false);

     nchita.addEventListener('click', throwStar2, false); 
     nchitb.addEventListener('click', throwBomb2, false);

}   	
	
	function Player(){
			this.name;
			this.life = 1000;
			this.attack = function attack(opponent){
				opponent.life -= 10;
			}
			this.ninjabomb = function bomb(opponent){
				opponent.life -= 980;}	
	}
	
	
	Player.prototype.score = function score(getScore){
		return getScore.life;
	}
	
	/*	Player.prototype.star = function star(targetPlayer){
			targetPlayer.life -=25;
	}; */
		
    		
	var p1 = new Player();
	var p2 = new Player();
	
	p1.name = 'Ninja Boy';
	p2.name = 'Ninja Cat';

	
    //p1.attack(p2);
    //alert(p2.life);
    
    

    
	function resetthrowStar1(){
		var wstar1 = document.getElementById('w_star1');  
		var ninja2 = document.getElementById('ninja2');
		var bubble2 = document.getElementById('bubble2');
		var talkshit20 =  document.getElementById('talkshit-20');		
		var talkshit21 =  document.getElementById('talkshit-21');	
		var talkshit22 =  document.getElementById('talkshit-22');		
		var gameover = document.getElementById('gameover');
		var winner = document.getElementById('winner');	
		wstar1.style.left = '175px';
		wstar1.style.bottom = '100px';      
		wstar1.style.webkitAnimation = 'spin 0s infinite linear';  
		wstar1.style.mozAnimation = 'spin 0s infinite linear';
		wstar1.style.msAnimation = 'spin 0s infinite linear';           
		wstar1.style.animation = 'spin 0s infinite linear';           
		var p2score = document.getElementById('p2score');
		p2score.value = p2.life;
			if(p2.life <= 900){
				ninja2.src = 'images/ninja2/ninja2cut.png';	
				bubble2.style.display = 'block';
				talkshit20.style.display = 'block';
				}
			if(p2.life <= 700){
				ninja2.src = 'images/ninja2/ninja2quarter.png';
				bubble2.style.display = 'none';
				talkshit20.style.display = 'none';
				}
			if(p2.life <= 600){
				ninja2.src = 'images/ninja2/ninja2half.png';
				bubble2.style.display = 'block';
				talkshit21.style.display = 'block';								
				}	
			if(p2.life <= 400){
				bubble2.style.display = 'none';
				talkshit21.style.display = 'none';			
				}
			if(p2.life <= 300){
				ninja2.src = 'images/ninja2/ninja2almost.png';
				bubble2.style.display = 'block';
				talkshit22.style.display = 'block';					
				}	
			if(p2.life <= 0){
				ninja2.src = 'images/ninja2/ninja2dead.png';
				bubble2.style.display = 'none';
				talkshit22.style.display = 'none';				
				gameover.style.display = 'block';
				ninja2.style.top = '290px';
				winner.innerHTML = 'Ninja Boy';
				p1score.value = 1000;
				p2score.value = 1000;
				
			}	
	}
      
    function throwStar1(){
		var wstar1 = document.getElementById('w_star1');  
		wstar1.style.display = 'block'; 
		wstar1.style.webkitAnimation = 'spin 1s infinite linear';  
		wstar1.style.mozAnimation = 'spin 1s infinite linear';
		wstar1.style.msAnimation = 'spin 1s infinite linear';           
		wstar1.style.animation = 'spin 1s infinite linear';            
		wstar1.style.bottom = 0;   
		wstar1.style.left = '600px';
		p1.attack(p2);
		setTimeout('resetthrowStar1()', 300);       
	}
	
  function throwBomb1(){
        	var wbomb1 = document.getElementById('w_bomb1');  
    }
    
       
    function resetthrowStar2(){
		var wstar2 = document.getElementById('w_star2');  
		var ninja1 = document.getElementById('ninja1');
		var bubble1 = document.getElementById('bubble1');	
		var talkshit10 =  document.getElementById('talkshit-10');	
		var talkshit11 =  document.getElementById('talkshit-11');	
		var talkshit12 =  document.getElementById('talkshit-12');		
		var gameover = document.getElementById('gameover');
		var winner = document.getElementById('winner');	
		wstar2.style.left = '160px';
		wstar2.style.bottom = 0;      
		wstar2.style.webkitAnimation = 'spin 0s infinite linear';  
		wstar2.style.mozAnimation = 'spin 0s infinite linear';
		wstar2.style.msAnimation = 'spin 0s infinite linear';           
		wstar2.style.animation = 'spin 0s infinite linear';           
		var p1score = document.getElementById('p1score');
		p1score.value = p1.life;
			if(p1.life <= 900){
				ninja1.src = 'images/ninja1/ninja1cut.png';
				bubble1.style.display = 'block';
				talkshit10.style.display = 'block';
				}
			if(p1.life <= 700){
				ninja1.src = 'images/ninja1/ninja1quarter.png';
				bubble1.style.display = 'none';
				talkshit10.style.display = 'none';
				}
			if(p1.life <= 600){
				ninja1.src = 'images/ninja1/ninja1half.png';
				bubble1.style.display = 'block';
				talkshit11.style.display = 'block';			
				
				}	
			if(p1.life <= 400){
				ninja1.src = 'images/ninja1/ninja1almost.png';
				bubble1.style.display = 'none';
				talkshit11.style.display = 'none';			

				}	
			if(p1.life <= 300){
				ninja1.src = 'images/ninja1/ninja1almost.png';
				bubble1.style.display = 'block';
				talkshit12.style.display = 'block';				
				}							
			if(p1.life <= 0){
			   ninja1.src = 'images/ninja1/ninja1dead.png';		
				bubble1.style.display = 'none';
				talkshit12.style.display = 'none';		
				gameover.style.display = 'block';
				winner.innerHTML = 'Ninja Cat';
				p1score.value = 1000;
				p2score.value = 1000;	
			}			
	}

    function throwStar2(){
		var wstar2 = document.getElementById('w_star2');  
		wstar2.style.display = 'block'; 
		wstar2.style.webkitAnimation = 'spin 1s infinite linear';  
		wstar2.style.mozAnimation = 'spin 1s infinite linear';
		wstar2.style.msAnimation = 'spin 1s infinite linear';           
		wstar2.style.animation = 'spin 1s infinite linear';            
		wstar2.style.bottom = '180px';   
		wstar2.style.left = '-320px';
		p2.attack(p1);
		setTimeout('resetthrowStar2()', 300);    
	}
	
	function resetBomb2(){
		var p1score = document.getElementById('p1score');	
		var wbomb2 = document.getElementById('w_bomb2'); 	
		var ninja1 = document.getElementById('ninja1');	
		var gameover = document.getElementById('gameover');
		var winner = document.getElementById('winner');	
 		wbomb2.style.left = '-300px';
		wbomb2.style.bottom = '330px';   
		wbomb2.style.zIndex = 888;   		
		wbomb2.style.webkitAnimation = 'spin 0s infinite linear';  
		wbomb2.style.mozAnimation = 'spin 0s infinite linear';
		wbomb2.style.msAnimation = 'spin 0s infinite linear';           
		wbomb2.style.animation = 'spin 0s infinite linear';           
  
		wbomb2.style.transition = 'background 6.0s linear 6.0s';
		wbomb2.src = 'images/weapons/explode.png';

		p1score.value = p1.life;
			
			if(p1.life <= 0){
			ninja1.src = 'images/ninja1/ninja1dead.png';		
			}
	}
	
	
    function throwBomb2(){
        	var wbomb2 = document.getElementById('w_bomb2');  
			wbomb2.style.display = 'block'; 
			wbomb2.style.webkitAnimation = 'spin 1s infinite linear';  
			wbomb2.style.mozAnimation = 'spin 1s infinite linear';
			wbomb2.style.msAnimation = 'spin 1s infinite linear';           
			wbomb2.style.animation = 'spin 1s infinite linear';            
			wbomb2.style.bottom = '200px';   
			wbomb2.style.left = '-150px';
			p2.ninjabomb(p1);
			setTimeout('resetBomb2()', 2000);    
			
    }
    

         

window.onload = init;