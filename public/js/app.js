/*function obterFotos() {
  let listaObjetos = [];
  let caixaPai = document.querySelector("#caixa-pai")
  fetch(`https://rickandmortyapi.com/api/character/?page=21`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results)
        for(let i = 0; i < data.results.lenght; i++){
          caixaPai.appendChild(`
          <div class="carousel-item activate">
            <img src="${imagem.image[i]}" class="d-block w-100 h-50" alt="...">
          </div>`) 
        }    
    });
}
obterFotos();*/

function renderCarousel(url) {
  //obtendo elemento pai do carousel
  let carouselBox = document.querySelector("#boxCarousel");

  //criando novas tags div e img
  let carouselNew = document.createElement("div");
  let imageSlide = document.createElement("img");

  //adicionando classe bootstrap as divs criadas
  carouselNew.classList.add("carousel-item", "active");
  imageSlide.classList.add("d-block", "w-100");

  //atribuindo valor ao atributo src da tag img
  imageSlide.setAttribute("src", url);

  //adicionando a tag img na tag div
  carouselNew.append(imageSlide);

  //adicionando a tag divCarousel na div pai
  carouselBox.append(carouselNew);
}
renderCarousel(
  "https://img.elo7.com.br/product/zoom/338BB23/painel-de-festa-paisagem-natureza-3x2-festa-infantil.jpg"
);
