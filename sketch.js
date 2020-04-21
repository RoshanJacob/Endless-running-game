var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,tt,ttt,tttt,ru;



 function setup () {
 a = createSprite(136, 90,5,100);
 b = createSprite(320, 150,100,5);
 c = createSprite(241, 320,5,100);
 d = createSprite(80, 252,100,5);
 e = createSprite(63, 42,150,5);
 f = createSprite(32, 253,5,90);
 g = createSprite(32, 179,150,5);
 h = createSprite(132, 249,5,150);
 tt = createSprite(14, 66,20,20);
 ttt = createSprite(60, 194,20,20);
 i = createSprite(81,332,5,100);
 j = createSprite(160, 250,5,100);
 k = createSprite(49, 89,100,5);
 l = createSprite(85, 115,100,5);
 m = createSprite(200, 205,5,310);
 n = createSprite(241, 153,5,100);
 O = createSprite(308, 232,150,5);
 p = createSprite(290, 315,100,5);
 q = createSprite(160, 120,5,100);
 r = createSprite(315, 189,5,81);
 s = createSprite(137, 356,60,5);
 t = createSprite(13, 340,5,100);
 u = createSprite(295, 105,5,90);
 v = createSprite(342, 105,5,90);
 tttt = createSprite(343, 366,20,20);

 ru = createSprite(32, 17,10,10);
}

function draw() {
  background("yellow");
  text("Hit this at the end to win",260,342);
  text("1",35,64);
  text("2",79,192);
  text("Push all the boxes out of the screen to win!",120,27);
if (keyWentDown(UP_ARROW)) {
    ru.velocityY = -6;
    ru.velocityX = 0;
  }
if (keyWentDown(DOWN_ARROW)) {
      ru.velocityY = 6;
      ru.velocityX = 0;
    }
if (keyWentDown(LEFT_ARROW)) {
    ru.velocityY = 0;
    ru.velocityX = -6;
        }
if (keyWentDown(RIGHT_ARROW)) {
      ru.velocityY = 0;
      ru.velocityX = 6;
                }

                                
if (ru.x<0 || ru.y<0 || ru.x>400 || ru.y>400) {
   ru.velocityX = 0;
   ru.velocityY = 0;
  text("YOU LOSE!Press space to restart",204,49);
  if(keyWentDown("space")){
       ru.x = 32;
       ru.y = 17;
     tt.x = 14;
     tt.y = 66;
     tt.velocityX = 0;
     tt.velocityY =  0;
     ttt.x =60;
     ttt.y =194;
     ttt.velocityY = 0;
     ttt.velocityX = 0;
     tttt.x = 343;
     tttt.y = 366;
     tttt.velocityX = 0;
     tttt.velocityY = 0;
  }
}
  if(tt.x <0 || tt.y<0 || tt.x>400 || tt.y >400){
     text("Good Job!",28,109); 
    } 
    if(ttt.x <0 || ttt.y<0 || ttt.x>400 || ttt.y >400){
      text("Great Work!",49,214);
    }

if (tttt.x>400 || tttt.x<0 || tttt.y>400 || tttt.y<0  && ttt.x <0 || ttt.y<0 || ttt.x>400 || ttt.y >400 && tt.x <0 || tt.y<0 || tt.x>400 || tt.y >400) {
    text("YOU WIN!!!",186,383);  
    }   
        
         if(keyWentDown("space")){
         gameState = "serve";
       
       }
ru.bounce(tt);
ru.bounce(ttt);
ru.bounce(tttt);
ru.bounceOff(a);
ru.bounceOff(b);
ru.bounceOff(c);
ru.bounceOff(d);
ru.bounceOff(e);
ru.bounceOff(f);
ru.bounceOff(g);
ru.bounceOff(h);
ru.bounceOff(i);
ru.bounceOff(j);
ru.bounceOff(k);
ru.bounceOff(l);    
ru.bounceOff(m);    
ru.bounceOff(n);
ru.bounceOff(O);
ru.bounceOff(p);
ru.bounceOff(q); 
ru.bounceOff(r); 
ru.bounceOff(s); 
ru.bounceOff(t); 
ru.bounceOff(u); 
ru.bounceOff(v);


tt.bounceOff(a);
tt.bounceOff(b);
tt.bounceOff(c);
tt.bounceOff(d);
tt.bounceOff(e);
tt.bounceOff(f);
tt.bounceOff(g);
tt.bounceOff(h);
tt.bounceOff(i);
tt.bounceOff(j);
tt.bounceOff(k);
tt.bounceOff(l);    
tt.bounceOff(m);    
tt.bounceOff(n);
tt.bounceOff(O);
tt.bounceOff(p);
tt.bounceOff(q); 
tt.bounceOff(r); 
tt.bounceOff(s); 
tt.bounceOff(t); 
tt.bounceOff(u); 
tt.bounceOff(v);  
 

ttt.bounceOff(a);
ttt.bounceOff(b);
ttt.bounceOff(c);
ttt.bounceOff(d);
ttt.bounceOff(e);
ttt.bounceOff(f);
ttt.bounceOff(g);
ttt.bounceOff(h);
ttt.bounceOff(i);
ttt.bounceOff(j);
ttt.bounceOff(k);
ttt.bounceOff(l);    
ttt.bounceOff(m);    
ttt.bounceOff(n);
ttt.bounceOff(O);
ttt.bounceOff(p);
ttt.bounceOff(q); 
ttt.bounceOff(r); 
ttt.bounceOff(s); 
ttt.bounceOff(t); 
ttt.bounceOff(u); 
ttt.bounceOff(v); 
 

tttt.bounceOff(a);
tttt.bounceOff(b);
tttt.bounceOff(c);
tttt.bounceOff(d);
tttt.bounceOff(e);
tttt.bounceOff(f);
tttt.bounceOff(g);
tttt.bounceOff(h);
tttt.bounceOff(i);
tttt.bounceOff(j);
tttt.bounceOff(k);
tttt.bounceOff(l);    
tttt.bounceOff(m);    
tttt.bounceOff(n);
tttt.bounceOff(O);
tttt.bounceOff(p);
tttt.bounceOff(q); 
tttt.bounceOff(r); 
tttt.bounceOff(s); 
tttt.bounceOff(t); 
tttt.bounceOff(u); 
tttt.bounceOff(v);  
 
 drawSprites(); 

}

