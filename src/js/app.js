
const setDate = () => {

    let date = new Date();
    let day = date.getDate()-3;
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? "0" + month : month;

    return `${year}-${month}-${day}`;

}

let urlApi = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${setDate()}&api_key=zUhhKsrSuJSGHV7pjsWlq0BCMYHd1MMazuQ9ZMlP`;

const loadMoreImgToGallery = (url) => {

    let amountImg = 0;

    $('button').on('click', (e) => {

        e.preventDefault();

        let date = "";

        $('input').val() !== "" ? date = $('input').val() : date = setDate();
        url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=zUhhKsrSuJSGHV7pjsWlq0BCMYHd1MMazuQ9ZMlP`;
        $.ajax({
            url: url
        }).done(res => {

            for (let i = amountImg; i < amountImg + 6; i++) {

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

const randomImgWith = (nr) => Math.floor(Math.random() * nr + 1);

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

$(() => {

    preLoader();
    loadImgToGallery(urlApi);
    loadMoreImgToGallery(urlApi);
    preLoader();

})
