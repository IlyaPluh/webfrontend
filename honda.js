/*let font = tech.getElementsByClassName('fon');
  for (let fon of font){
    let bg = getComputedStyle(fon)
    if (bg.background !== null)
    alert(fon.innerText)
  }*/

  let trs = tech.getElementsByTagName('tr');
  let a = 245;
  for (let tr of trs) {
    tr.style.background = `rgb(${a}, ${a}, ${a})`
    a -= 5;
  };

  /*let imgs = document.getElementsByClassName('img');
  for (let i = 2; i < imgs.length; i+=4){
    imgs[i].insertAdjacentHTML('afterend', imgs[i].outerHTML)
  }*/

  let imgs2 = document.getElementsByClassName('img2');
  for (let i = 0; i < imgs2.length; i++){
  imgs2[i].insertAdjacentHTML('beforeend', '<div><a href="javascript:void(0)">👍</a><a href="javascript:void(0)">⤴</a></div>')
  }

  let imgs3 = document.getElementsByClassName('color');
  let cena = 7500;
  
  function bord(cena, attr){
    alert(`Вы выбрали модель ${attr} за ${cena}, в ближайшее время с вами свяжется наш менеджер, спасибо.`)
    let bor2 = document.getElementsByClassName('border')
    for (let border of bor2){
      border.classList.remove('border')
    }}
  
    for (let i = 0; i < imgs3.length; i++){
    imgs3[i].insertAdjacentHTML('beforeend', `<p>Цена $${cena} <input class="btnClick" value="Купить" type="button"></p>`)
    cena -= (cena * 0.05).toFixed(2)
  }
  
  document.addEventListener('click', (e) => {
    if(e.target.classList.contains('btnClick')){
      let cena = e.target.parentElement.innerText
      let attr = e.target.parentElement.parentElement.childNodes[1].innerText
      bord(cena, attr)
      let bor = e.target.parentElement.parentElement.childNodes[0]
      bor.classList.add('border')
    };
  })
  
  