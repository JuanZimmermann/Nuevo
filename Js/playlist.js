let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);

let playlistwrapper = document.querySelector('.listadereproduccion')

if(recuperoStorage == null  ){

    playlist =[]
    playlistwrapper.innerHTML += '<h1> no hay canciones en la playlist </h1>'
    }
    
    else{
    
        
    playlist.forEach(function(iframe){
    
        buscarYMostrar(iframe)
        
        })
    
    }


    function buscarYMostrar(iframe){

     var proxy = 'https://cors-anywhere.herokuapp.com/'
    
    var url = proxy + 'https://api.deezer.com/track/' + iframe;
    
    fetch(url)
    .then( function(response){
    
    
    
        return response.json();
        
        })
    .then(function(track){
    


            playlistwrapper.innerHTML = '<div> <iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=3000&height=350&color=00e8dc&layout=dark&size=medium&type=tracks&id=' + track.id + '&app_id=1" width="600" height="100"></iframe></div> '
    
    
        
           })
    
    .catch(function(error){
        console.log(error);
        
    })
    
     }
    
     console.log(localStorage)
     
    
    