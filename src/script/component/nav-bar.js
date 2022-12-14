import favicon from '../../image/favicon.png';

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar fixed-top navbar-expand-md navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand align-middle" href="#">
            <img src="${favicon}" alt="Icon" width="36" height="36" class="d-inline-block align-text-top">&nbsp What's Movies
          </a>
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarToggler">
            <ul class="navbar-nav me-auto mt-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="#nowPlaying">Now Playing</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#upcoming">Upcoming</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#popular">Popular</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#topRated">Top Rated</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);
