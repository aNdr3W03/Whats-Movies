import $ from 'jquery';
const baseURL = 'https://api.themoviedb.org/3/';
const imgURL = 'https://image.tmdb.org/t/p/w500/';
const APIkey = 'fc0457189ab4c918829ce33e35abedfe';

const main = () => {
  const search = () => {
    $('.movie-list').html('');
    $.ajax({
      url: `${baseURL}search/movie?`,
      type: 'GET',
      dataType: 'json',
      data: {
        'api_key': APIkey,
        'query': $('#search').val()
      },
      success: (data) => {
        if (data.results.length === 0 || $('#search').val() === '') {
          $('.search-list').html(`
            <h2 class="text-center text-light mb-3 mt-3">Showing 0 movies: "${$('#search').val()}"</h2>
            <hr>
            <p class="search-error text-secondary">Oops! Looks like the movie you're looking for doesn't exist :(</p>`
          );
        }
        else {
          let i = 1;
          data.results.forEach(data => {
            $('.search-list').html(`<h2 class="text-center text-light mb-3 pt-5">Showing ${i++} movies: "${$('#search').val()}"</h2><hr>`);
  
            $('.movie-list').append(`
              <div class="col-sm mb-4">
                <div class="card h-100 movie-card">
                  <img src="${imgURL + data.poster_path}" class="card-img-top see-detail" alt="${data.title}" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">

                  <div class="card-body see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">
                    <h5 class="card-title see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">${data.title}</h5>
                  </div>
                  
                  <div class="card-footer see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">
                    <small class="text-muted see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">${data.release_date}</small>
                  </div>
                </div>
              </div>`
            )
          });
          $('#search').val();
        };
      }
    });

    $('.movie-list').on('click', '.see-detail', () => {
      modal();
    });
  };

  const playing = () => {
    $('.now-playing-list').html('');
    $.ajax({
      url: `${baseURL}movie/now_playing?`,
      type: 'GET',
      dataType: 'json',
      data: {
        'api_key': APIkey,
        'language': 'en-US'
      },
      success: (data) => {
        data.results.forEach(data => {
          $('.playing-list').append(`
            <div class="col-sm mb-4">
              <div class="card h-100 movie-card">
                <img src="${imgURL + data.poster_path}" class="card-img-top see-detail" alt="${data.title}" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">

                <div class="card-body see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">
                  <h5 class="card-title see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">${data.title}</h5>
                </div>
                
                <div class="card-footer see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">
                  <small class="text-muted see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">${data.release_date}</small>
                </div>
              </div>
            </div>`
          )
        });
      }
    });

    $('.playing-list').on('click', '.see-detail', () => {
      modal();
    });
  };

  const upcoming = () => {
    $('.upcoming-list').html('');
    $.ajax({
      url: `${baseURL}movie/upcoming?`,
      type: 'GET',
      dataType: 'json',
      data: {
        'api_key': APIkey,
        'language': 'en-US'
      },
      success: (data) => {
        data.results.forEach(data => {
          $('.upcoming-list').append(`
            <div class="col-sm mb-4">
              <div class="card h-100 movie-card">
                <img src="${imgURL + data.poster_path}" class="card-img-top see-detail" alt="${data.title}" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">

                <div class="card-body see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">
                  <h5 class="card-title see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">${data.title}</h5>
                </div>
                
                <div class="card-footer see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">
                  <small class="text-muted see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">${data.release_date}</small>
                </div>
              </div>
            </div>`
          )
        });
      }
    });

    $('.upcoming-list').on('click', '.see-detail', () => {
      modal();
    });
  };

  const popular = () => {
    $('.popular-list').html('');
    $.ajax({
      url: `${baseURL}movie/popular?`,
      type: 'GET',
      dataType: 'json',
      data: {
        'api_key': APIkey,
        'language': 'en-US'
      },
      success: (data) => {
        data.results.forEach(data => {
          $('.popular-list').append(`
            <div class="col-sm mb-4">
              <div class="card h-100 movie-card">
                <img src="${imgURL + data.poster_path}" class="card-img-top see-detail" alt="${data.title}" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">

                <div class="card-body see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">
                  <h5 class="card-title see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">${data.title}</h5>
                </div>
                
                <div class="card-footer see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">
                  <small class="text-muted see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">${data.release_date}</small>
                </div>
              </div>
            </div>`
          )
        });
      }
    });

    $('.popular-list').on('click', '.see-detail', () => {
      modal();
    });
  };

  const topRated = () => {
    $('.top-list').html('');
    $.ajax({
      url: `${baseURL}movie/top_rated?`,
      type: 'GET',
      dataType: 'json',
      data: {
        'api_key': APIkey,
        'language': 'en-US'
      },
      success: (data) => {
        data.results.forEach(data => {
          $('.top-list').append(`
            <div class="col-sm mb-4">
              <div class="card h-100 movie-card">
                <img src="${imgURL + data.poster_path}" class="card-img-top see-detail" alt="${data.title}" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">

                <div class="card-body see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">
                  <h5 class="card-title see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">${data.title}</h5>
                </div>
                
                <div class="card-footer see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">
                  <small class="text-muted see-detail" data-toggle="modal" data-target="#movieDetails" data-id="${data.id}">${data.release_date}</small>
                </div>
              </div>
            </div>`
          );
        });
      }
    });

    $('.top-list').on('click', '.see-detail', () => {
      modal();
    });
  };

  const modal = () => {
    const id = $(event.target).data('id');
    $.ajax({
      url: `${baseURL}movie/${id}?`,
      type: 'GET',
      dataType: 'json',
      data: {
        'api_key': APIkey
      },
      success: (data) => {
        $('.modal-title').html(`${data.original_title} <span style="color: silver; font-size: 16px">(${data.release_date})</span>`);
        
        $('.modal-body').html(`
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${imgURL + data.poster_path}" class="img-fluid" alt="${data.title}">
              </div>

              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4><b>${data.title}</b></h4></li>
                  <li class="list-group-item">${data.overview}</li>
                  <li class="list-group-item"><b>Production Company:</b><br>${data.production_companies[0].name}</li>
                  <li class="list-group-item"><b>Popularity:</b> ${data.popularity}</li>
                  <li class="list-group-item"><b>Vote Average:</b> ${data.vote_average}</li>
                  <li class="list-group-item"><b>Vote Count:</b> ${data.vote_count}</li>
                </ul>
              </div>
            </div>
          </div>`
        );
      }
    });
  };

  $('#searchButton').on('click', () => {
    search();
  });

  $('#search').on('keyup', (event) => {
    if (event.keyCode === 13) { // Enter Key
      search();
    };
  });

  $('.nav-link').on('click', (event) => {
    $('.nav-link').removeClass('active');
    $(event.target).addClass('active');
  });

  $('.navbar-brand').on('click', () => {
    location.reload();
  })

  playing();
  upcoming();
  popular();
  topRated();
};

export default main;
