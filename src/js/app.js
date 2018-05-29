
//Z przykładową datą 2018-04-15
const urlApi = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2018-04-15&api_key=zUhhKsrSuJSGHV7pjsWlq0BCMYHd1MMazuQ9ZMlP"

$(() => {

    preLoader();
    loadImgToGallery(urlApi);
    loadMoreImgToGallery(urlApi);
    preLoader();

})

const loadMoreImgToGallery = (url) => {

    let amountImg = 0;

    $('button').on('click', (e) => {

        e.preventDefault();

        $.ajax({
            url: urlApi
        }).done(res => {

            for (let i = amountImg; i < amountImg+6; i++) {

                let elImg = (`<img src="${res.photos[i].img_src}" alt="img"/>`);
                $('section').append(elImg);
                
            }

            amountImg += 6;

        }).fail(err => {
            console.log(err)
        })
    })

}

const loadImgToGallery = (url) => {

    $.ajax({
        url: url
    }).done(res => {

        $("body").css({
            background: `url(${res.photos[randomImgWith(res.photos.length)].img_src}) no-repeat center/cover fixed`
        })

        for (let i = 0; i < 6; i++) {
            $('img').eq(i).attr('src', `${res.photos[i].img_src}`);
        }

    }).fail(err => {
        console.log(err);
    })

}

const randomImgWith = (nr) => Math.floor(Math.random()*nr+1);

const preLoader = () => {

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
