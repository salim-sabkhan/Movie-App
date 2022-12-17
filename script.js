// https://api.themoviedb.org/3/movie/550?api_key=f44106bcd6b905da4235cf713cce00d9
// /discover/movie?sort_by=popularity.desc


 let url="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f44106bcd6b905da4235cf713cce00d9"

 let imgUrl="https://image.tmdb.org/t/p/w1280"

 let searchUrl="https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=f44106bcd6b905da4235cf713cce00d9"

// Get Movies

 async function getMovieData(url){
    let data=await fetch(url)
    let res=await data.json()
    console.log(res)
    console.log(res.results)
    showMovies(res.results)
 }
 getMovieData(url)

 var mainMovieDiv=document.getElementById('mainMovieDiv')

 function showMovies(movies){
    mainMovieDiv.innerHTML=""
    movies.map((element)=>{
        var movieDiv=document.createElement('div')
        movieDiv.classList.add('col','movie')


        movieDiv.innerHTML=`
        <div class="card h-100">
                <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jMvGpTF4_OQEvlMZVGRJX5CD8azdz4gvOA&usqp=CAU" class="card-img-top" alt="...">--!>
                <img src=${imgUrl+element.backdrop_path} class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h6 class="  w-100 me-3 card-title">${element.original_title} </h6>
                        <h6 class=" p-1 w-auto"><span class='${getClassByRate(element.vote_average)}'>${element.vote_average}</span></h6>
                    </div>

                    <!-- For Overview -->
                    <div class="card card-header overview">
                        <p>Overview</p>
                        <p>${element.overview}
                        </p>
                    </div>
                 
                  <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
                </div>
              </div>
        `
        mainMovieDiv.append(movieDiv)
    })
 }

 // Search

 const form=document.getElementById('form')
 const search=document.getElementById('search')

 form.addEventListener('submit',(e)=>{
    e.preventDefault()
    searchTerm=search.value
    console.log(searchTerm)
    console.log(searchUrl+searchTerm)
    if (searchTerm && searchTerm.value!==""){
        getMovieData(searchUrl+searchTerm)
    }else{
        window.location.reload()
    }
    
 })

 // Rating

 //function 

function getClassByRate(vote){
    if(vote>8){
        return "green"
    }
    else if(vote>=5){
        return "orange"
    }
    else{
        return "red"
    }
}