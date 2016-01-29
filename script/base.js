window.onload=function(){
var da=document.getElementById('da');
var poker=document.getElementsByClassName('poker');
var pokera=document.getElementsByClassName('pokera');
var pokerb=document.getElementsByClassName('pokerb');
var pokerc=document.getElementsByClassName('pokerc');
for(var i=0;i<7;i++){
	for(var j=0;j<i+1;j++){
		var poker=document.createElement('div');
		poker.setAttribute('class','poker');
		poker.setAttribute('id',i+'_'+j);
		poker.style.top=50*i+'px';
		poker.style.left=(6-i)*80+j*160+'px';
		da.appendChild(poker);
	}
}

var num={A:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',J:'11',Q:'12'};
var pokera=document.createElement('div');
pokera.setAttribute('class','pokera')
da.appendChild(pokera);
for(var i=0;i<24;i++){
	var pokerc=document.createElement('div')
	pokerc.setAttribute('class','pokerc');
	pokera.appendChild(pokerc);
	// console.log(pokerc);
}
var pokerb=document.createElement('div');
pokerb.setAttribute('class','pokerb')
da.appendChild(pokerb);
// next   again
var next=document.createElement('div');
next.setAttribute('class','btn');
next.innerHTML='next';
next.style.top='570px';
da.appendChild(next);
var again=document.createElement('div');
again.setAttribute('class','btn');
again.style.top='650px';
again.innerHTML='Try again';
da.appendChild(again);

var previous=null,index=0;
da.onclick=function(e){
	var el=e.target;
	// console.log(el.parentElement);
	el.style.cursor='pointer';
	// console.log(el.innerHTML);
	if(el.getAttribute('id')){
		var x=Number(el.getAttribute('id').split('_')[0]),
		    y=Number(el.getAttribute('id').split('_')[1]);
	}
	join=function(x,y){
		return x+'_'+y;
	};
	$=function(id){
		return document.getElementById(id);
	};
	if($(join(x+1,y))||$(join(x+1,y+1))){return;}
	if(el==this) return;

	if(previous!=null){
		previous.style.boxShadow='1px 2px 6px black';
		if(Number(num[el.innerHTML])+Number(num[previous.innerHTML])==13){
			el.parentElement.removeChild(el);
			previous.parentElement.removeChild(previous);
		}
	}
	el.style.boxShadow='1px 0 15px #F0BF42 inset';
	if(el.innerHTML=='K'){
		el.parentElement.removeChild(el);
	}
	previous=el;
	if(el.innerHTML=='next'){
		pokerb.style.display='block';
		el.style.boxShadow='1px 1px 5px black';
		// --------------------------------------
		pokerb.appendChild(pokera.removeChild(pokera.lastElementChild));

	}
	if(!pokera.lastElementChild){
		pokera.style.display='none';
	}
	if(el.innerHTML=='Try again'){
		pokera.style.display='block';
		pokerb.style.display='none';
		while(pokerb.lastElementChild){
			pokera.appendChild(pokerb.removeChild(pokerb.lastElementChild));
		}
		index++;
	}
	if(index>3){
		alert('game over!');
		location.reload()
	}
	if(poker&&pokera&&pokerc==null){
		alert('haha ');
		location.reload();
	}
	e.preventDefault();

};
da.onmousedown = function(e){e.preventDefault();};

var dict={1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K'};
var color=['ht','bk','fk','mh'];
var fn=function(){
	var pokers=[],num,colors,pai;
	var zidian={};
	while(pokers.length!=52){
		colors=color[(Math.floor(Math.random()*4))];
		num=dict[(Math.floor(Math.random()*13+1))];
		pai={huase:colors,number:num};
		if(!zidian[colors+num]){
			pokers.push(pai);
			zidian[colors+num]=true;
		}
	}
	return pokers;
};
// console.table(fn1());
var pokers=fn();
var poker=document.getElementsByClassName('poker');
var pokerc=document.getElementsByClassName('pokerc');
	// pokerc=poker.slice(-24);
	// poker.length=28;
for(var i=0;i<poker.length;i++){
	poker[i].innerHTML=pokers[i].number;
	if(pokers[i].huase=='ht'){
		poker[i].style.backgroundImage='url(./images/poker-ht.jpg)';
	}
	if(pokers[i].huase=='bk'){
		poker[i].style.backgroundImage='url(./images/poker-bk.jpg)';
	}
	if(pokers[i].huase=='fk'){
		poker[i].style.backgroundImage='url(./images/poker-fk.jpg)';
	}
	if(pokers[i].huase=='mh'){
		poker[i].style.backgroundImage='url(./images/poker-mh.jpg)';
	}
}
for(var i=0;i<pokerc.length;i++){
	pokerc[i].innerHTML=pokers[i].number;
	if(pokers[i].huase=='ht'){
		pokerc[i].style.backgroundImage='url(./images/poker-ht.jpg)';
	}
	if(pokers[i].huase=='bk'){
		pokerc[i].style.backgroundImage='url(./images/poker-bk.jpg)';
	}
	if(pokers[i].huase=='fk'){
		pokerc[i].style.backgroundImage='url(./images/poker-fk.jpg)';
	}
	if(pokers[i].huase=='mh'){
		pokerc[i].style.backgroundImage='url(./images/poker-mh.jpg)';
	}
}












};