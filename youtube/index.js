// api: https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyAMpcxatLAcb2aQgXR3BSSDZ6c0GV65MJo

$(function () {
    "use strict";

    var Youtube = {
        init: function () {
            this.fetchData()
        },
        fetchData: function () {
            var query = $('input')[0].value;
            console.log(query)
            var getData = $.ajax({
                url: 'https://www.googleapis.com/youtube/v3/search',
                type: 'GET',
                data: {
                    "q": query,
                    "part": 'snippet',
                    "type": 'video',
                    "key": "AIzaSyAMpcxatLAcb2aQgXR3BSSDZ6c0GV65MJo"
                },
                dataType: 'JSONP',
                success: function (response) {
                    Youtube.displayData(response.items);
                }
            });
        },
        displayData: function (response) {
            console.log(response[0].id.videoId);
            $('#youtube').html('<iframe id="ytplayer" type="text/html" width="640" height="390" src="https://www.youtube.com/embed/' + response[0].id.videoId + '?autoplay=1&origin=http://example.com" frameborder="0"></iframe>')
            for (var i = 0; i < response.length; i++) {

                var url = 'https://www.youtube.com/watch?v=' + response[i].id.videoId;
                $('#youtube')
                    .append(
                    ''
                    );
            }

        }
    };
    $('button').on('click', Youtube.init.bind(Youtube))
} ()
);

