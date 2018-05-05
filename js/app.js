require('./../sass/main.scss');

const urlAPI = "https://api.nasa.gov/planetary/apod?api_key=zUhhKsrSuJSGHV7pjsWlq0BCMYHd1MMazuQ9ZMlP"
const urlImagesApi = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=zUhhKsrSuJSGHV7pjsWlq0BCMYHd1MMazuQ9ZMlP"


$(() => {
    loading();
    loadGallery(urlImagesApi);

    let img = 6;

    $('button').on('click', e => {

        $.ajax({
            url: urlImagesApi
        }).done(res => {


            for (let i = img; i < img+6; i++) {
                let html = (`<img src="${res.photos[i].img_src}" alt="img"/>`);
                $('section').append(html);
            }

            img += 6;

        }).fail(err => {
            console.log(err)
        })
    })



})

const loadGallery = url => {

    $.ajax({
        url: url
    }).done(res => {

        if(res == undefined) {
            console.log("loading");
        }
        console.log(res.photos);

        for (var i = 0; i < 6; i++) {
            $('img').eq(i).attr('src', res.photos[i].img_src);
        }

        $("body").css({
            background: `url(${res.photos[randLoadImg()].img_src}) no-repeat center/cover fixed`
        })

        loading();

    }).fail(err => {
        console.log(err);
    })

}

const randLoadImg = () => {
    let nrIMG = Math.floor(Math.random()*856+1);

    return nrIMG;
}

const loading = () => {
    $(document).ajaxStart(() => {

        let elH2 = ('<h2></h2>');
        $('header').append(elH2);
        $('button').attr('disabled', true)
        $('h2').addClass('spinner-loader');

    })

    $(document).ajaxComplete(() => {
        $('button').attr('disabled', false);
        $('h2').remove();
    })
}
