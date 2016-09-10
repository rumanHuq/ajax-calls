var quote = {
    init: function(){
        this.fetchUrl();
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
                $('#div').hide().html(response.quote).slideDown(500);
                $('a').attr('href', 'https://twitter.com/intent/tweet?text='+ response.quote)
            }

        });
    }
    
};

var btn =$('#btn');
btn.on('click',function(){
    quote.init()
})