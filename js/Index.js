var card = [
  {
    title: 'bufalo',
    deac: 'bufalo',
    img: '/img/bufalo.jpg',
    price: 80000
  },
  {
    title: 'malake',
    deac: 'malake',
    img: '/img/malake.jpg',
    price: 70000
  },
  {
    title: 'gisom',
    deac: 'gisom',
    img: '/img/gisom.jpg',
    price: 90000
  },
  {
    title: 'deerakhtgerdo',
    deac: 'deerakhtgerdo',
    img: '/img/deerakhtgerdo.jpg',
    price: 80000
  },
  {
    title: 'garib',
    deac: 'garib',
    img: '/img/garib.jpg',
    price: 80000
  },


]






function FillCard() {
  var card = "";
  for (var i = 0; i < card.length; i++) {
    card += `<div class="row" style="background-color:goldenrod" id="cards">
    <div class="col-md-4 col-lg-3 col-sm-12 cards">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${card[i].img}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${card[i].title}</h5>
          <p class="card-text">${card[i].deac}</p>
          <h3 class="Card-text">${card[i].price}</h3>
          <a href="" class="btn btn-primary">خرید بلیت</a>
        </div>
      </div>
    </div>`


  }
  document.getElementById('cards').innerHTML = htmlcard;
}







