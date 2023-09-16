var co='win';
function browser(c,n,i,o,w,m,l){
  var box = document.createElement('div');
  box.classList.add('bb');
  box.addEventListener('click',function(){
    window.open(this.getAttribute(co), "_blank");
  })

  var icon = document.createElement('img');
  icon.classList.add('icon');
  icon.src='img/'+i+'.png';
  box.appendChild(icon);

  var title = document.createElement('span');
  title.classList.add('title');
  title.innerHTML=n;
  box.appendChild(title);

  if (o.includes('w')){box.setAttribute('win',w)}else{box.classList.add('daw')};
  if (o.includes('m')){box.setAttribute('mac',m)}else{box.classList.add('dam')};
  if (o.includes('l')){box.setAttribute('lnx',l)}else{box.classList.add('dal')};

  document.getElementById(c).appendChild(box);
}

function so(o){
  document.querySelector('.osa').classList.remove('osa');
  document.getElementById(o).classList.add('osa');
  document.body.className='';
  document.body.classList.add(o);
  co=o;
}