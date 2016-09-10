$(function(){
    setInterval(function(){
        var color= Math.floor(Math.random()*255)+1,
            color2= Math.floor(Math.random()*255)+1,
            color3= Math.floor(Math.random()*255)+1;
        $('body').css('background', 'rgb('+color+','+color2+','+color3+')');
        },3500);
    var quote = {
        init: function(){
            
            this.fetchUrl();
            $('#result').fadeOut();
        },
        fetchUrl: function(){
            $.ajax({
                url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
                type: 'GET',
                datatype: 'json',
                beforeSend: function(xhr){
                    xhr.setRequestHeader("X-Mashape-Authorization",'lGe5oGYs1Omsh1w7hc1L3frQDgMsp10qwMdjsnSFynT44tui70')
                
                },
                success: function(data){
                    var response = JSON.parse(data);
                    $('#result').html('<h2>'+ response.quote + '</h2>').fadeIn();
                    $('a').attr('href', 'https://twitter.com/intent/tweet?text='+ response.quote + '@i_m_ruman')
                }

            });
        }
    
    };
var btn =$('#btn');
btn.on('click',function(){
    quote.init()
});
}());