let found = document.querySelector('.found');
found.addEventListener('click', function(){

	random(0, 89);
})



function random(min, max) {
	let flip = min + Math.random() * (max + 1 - min);
	flip = Math.floor(flip);
	let hero = document.querySelectorAll('.hero');
	for (var i = 0; i < hero.length; i++) {
		if(flip === i){
			hero[i].className ='active';
			document.querySelector('.retry').style.display = 'block';
			let nik = hero[i].innerHTML;
			let name = document.querySelector('.need');
			name.innerHTML = 'Ваш герой:' + nik;
		}
	}
}

function hidd(){
	document.querySelector('.retry').style.display = 'none';
}