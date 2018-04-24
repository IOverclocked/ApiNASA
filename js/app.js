require('./../sass/main.scss');

const urlAPI = "https://api.nasa.gov/planetary/apod?api_key=zUhhKsrSuJSGHV7pjsWlq0BCMYHd1MMazuQ9ZMlP"
const urlImagesApi = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=zUhhKsrSuJSGHV7pjsWlq0BCMYHd1MMazuQ9ZMlP"


$(() => {

    loadHeader(urlAPI);
    loadGallery(urlImagesApi);

})


const loadHeader = url => {

    $.ajax({
        url: url
    }).done(res => {

        $('header').css({
            'background': "url("+res.url+")"
        });


        console.log(res);

    }).fail(err => {
        console.log(err);
    })

}

const loadGallery = url => {

    $.ajax({
        url: url
    }).done(res => {

        console.log(res.photos);

        for (var i = 0; i < 6; i++) {
            $('img').eq(i).attr('src', res.photos[i].img_src);
        }

    }).fail(err => {
        console.log(err);
    })

}
