import banner1 from '../../image/banner-theater.jpg';
import banner2 from '../../image/banner-film.jpg';
import banner3 from '../../image/banner-movie.jpg';

class CarouselLabel extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="carouselCaptions" class="carousel slide carousel-fade" data-ride="false">
        <ol class="carousel-indicators">
          <li type="button" data-target="#carouselCaptions" data-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></li>

          <li type="button" data-target="#carouselCaptions" data-slide-to="1" aria-label="Slide 2"></li>

          <li type="button" data-target="#carouselCaptions" data-slide-to="2" aria-label="Slide 3"></li>
        </ol>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${banner1}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Welcome to What's Movies</h5>
              <p>What's Movies is a web application to find your movie</p>
            </div>
          </div>

          <div class="carousel-item">
            <img src="${banner2}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Movies!!!</h5>
              <p>Find out currently showing and upcoming movies, popular and best rated movies</p>
            </div>
          </div>

          <div class="carousel-item">
            <img src="${banner3}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Looking for a Movie?</h5>
              <p>Now you can easily search for your favorite movies</p>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-target="#carouselCaptions" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>

        <button class="carousel-control-next" type="button" data-target="#carouselCaptions" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    `;
  }
}

customElements.define("carousel-label", CarouselLabel);
