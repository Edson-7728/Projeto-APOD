function vaipage (){
    var vaipage = '';
    vaipage = 'index-1.html';
    window.location.href = vaipage;
}

let botao = $ ('#btnDeBusca').click(function () {
         
    let data = $ ('#ddMMAAAA').val ();
   
  
    $.ajax ({
        url: `https://api.nasa.gov/planetary/apod?api_key=EITyOD4rcZcFcz6Vn6KBc6iHdJ176LVrOuhMojeH&date=${data}`,
        type: "GET",
        success: function(retorna){
            if (retorna.media_type=='video'){
                $(`#filme`).html(`<iframe id='videoLink' src="${retorna.url}"></iframe>`);
                $(`.divfoto`).css('display', 'none');
            } else {
                $(`#imagem`).html(`<img src="${retorna.url}">`);
                $(`.divvideo`).css('display', 'none');
            }
            console.log(retorna);                    
        $('#mensDescricao').text(retorna.explanation);
        $('#imagem').attr("src", retorna.url);
        $('#filme').attr("src", retorna.url);
        $('#mensTitulo').text(retorna.title);                
        },
        error: function(error) {
            console.log(error);
        }
    })
})
