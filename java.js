$("#enviar").click(
    function(){
        var data = $('#data').val();
        $.ajax({
            url: `https://api.nasa.gov/planetary/apod?api_key=q19k8E01ilXg7H0IOjsCP0frGHpervzEqIs3WFlo&date=${data}`,
            type: 'GET',

            success: function(result){
                console.log(result)
                $("#imagem").height("350px")
                $("#imagem").width("650px")
                $('#tituloFoto').text(result.title)
                $('#imagem').attr("src", result.url)
                $('#descricaoFoto').text(result.explanation)
            }
        })
    }
)