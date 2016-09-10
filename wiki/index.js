$(function(){
    $('#submit').on('click', function(e){
        e.preventDefault();
        var term = $('#term')[0].value;
        $.ajax({
            url: "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ term +"&format=json&callback=?",
            type: 'GET',
            async: false,
            dataType: "json",
            success: function(datas){
                datas = datas.splice(1);
                console.log(datas.length)
                for (var i = 0 ; i<datas[1].length; i++){
                    $('#wiki').append(
                        '<ul><li><a href='+datas[2][i]+'><h3>'+datas[0][i]+'</h3><p>'+datas[1][i]+'</p></a></li></ul>'
                        );
                }
            }
        });
        $('#term')[0].value = '';
    });
}());