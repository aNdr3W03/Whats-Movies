class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-sm-8">
            <h1 class="text-center mb-5 text-light">Search Your Movies Here!</h1>
            
            <div class="input-group">
              <input class="form-control form-control-lg bg-dark text-light me-2" id="search" type="text" placeholder="Search Title" required>
              <button class="btn btn-secondary" id="searchButton" type="button"><i class="fa fa-search fa-lg"></i></button>
            </div>
          </div>
        </div>
      </div
    `;
  }
}

customElements.define("search-bar", SearchBar);
