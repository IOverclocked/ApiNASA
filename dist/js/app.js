"use strict";

var urlAPI = "https://api.nasa.gov/planetary/apod?api_key=zUhhKsrSuJSGHV7pjsWlq0BCMYHd1MMazuQ9ZMlP";
var urlImagesApi = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2018-04-15&api_key=zUhhKsrSuJSGHV7pjsWlq0BCMYHd1MMazuQ9ZMlP";

$(function () {

    loadGallery(urlImagesApi);

    /*$('button').on('click', e => {
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
    })*/
});

var loadGallery = function loadGallery(url) {

    $.ajax({
        url: url
    }).done(function (res) {

        console.log(res.photos[0].img_src);

        $("body").css({
            background: "url(" + res.photos[0].img_src + ") no-repeat center/cover fixed"
        });
    }).fail(function (err) {
        console.log(err);
    });
};

/*
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
*/
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJ1cmxBUEkiLCJ1cmxJbWFnZXNBcGkiLCIkIiwibG9hZEdhbGxlcnkiLCJhamF4IiwidXJsIiwiZG9uZSIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJwaG90b3MiLCJpbWdfc3JjIiwiY3NzIiwiYmFja2dyb3VuZCIsImZhaWwiLCJlcnIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsU0FBUyxzRkFBZjtBQUNBLElBQU1DLGVBQWUsd0lBQXJCOztBQUVBQyxFQUFFLFlBQU07O0FBRUpDLGdCQUFZRixZQUFaOztBQUVBOzs7Ozs7Ozs7Ozs7O0FBcUJILENBekJEOztBQTJCQSxJQUFNRSxjQUFjLFNBQWRBLFdBQWMsTUFBTzs7QUFFdkJELE1BQUVFLElBQUYsQ0FBTztBQUNIQyxhQUFLQTtBQURGLEtBQVAsRUFFR0MsSUFGSCxDQUVRLGVBQU87O0FBR1hDLGdCQUFRQyxHQUFSLENBQVlDLElBQUlDLE1BQUosQ0FBVyxDQUFYLEVBQWNDLE9BQTFCOztBQUVBVCxVQUFFLE1BQUYsRUFBVVUsR0FBVixDQUFjO0FBQ1ZDLGlDQUFtQkosSUFBSUMsTUFBSixDQUFXLENBQVgsRUFBY0MsT0FBakM7QUFEVSxTQUFkO0FBSUgsS0FYRCxFQVdHRyxJQVhILENBV1EsZUFBTztBQUNYUCxnQkFBUUMsR0FBUixDQUFZTyxHQUFaO0FBQ0gsS0FiRDtBQWVILENBakJEOztBQW1CQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1cmxBUEkgPSBcImh0dHBzOi8vYXBpLm5hc2EuZ292L3BsYW5ldGFyeS9hcG9kP2FwaV9rZXk9elVoaEtzclN1SlNHSFY3cGpzV2xxMEJDTVlIZDFNTWF6dVE5Wk1sUFwiXHJcbmNvbnN0IHVybEltYWdlc0FwaSA9IFwiaHR0cHM6Ly9hcGkubmFzYS5nb3YvbWFycy1waG90b3MvYXBpL3YxL3JvdmVycy9jdXJpb3NpdHkvcGhvdG9zP2VhcnRoX2RhdGU9MjAxOC0wNC0xNSZhcGlfa2V5PXpVaGhLc3JTdUpTR0hWN3Bqc1dscTBCQ01ZSGQxTU1henVROVpNbFBcIlxyXG5cclxuJCgoKSA9PiB7XHJcblxyXG4gICAgbG9hZEdhbGxlcnkodXJsSW1hZ2VzQXBpKTtcclxuXHJcbiAgICAvKiQoJ2J1dHRvbicpLm9uKCdjbGljaycsIGUgPT4ge1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IHVybEltYWdlc0FwaVxyXG4gICAgICAgIH0pLmRvbmUocmVzID0+IHtcclxuXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gaW1nOyBpIDwgaW1nKzY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSAoYDxpbWcgc3JjPVwiJHtyZXMucGhvdG9zW2ldLmltZ19zcmN9XCIgYWx0PVwiaW1nXCIvPmApO1xyXG4gICAgICAgICAgICAgICAgJCgnc2VjdGlvbicpLmFwcGVuZChodG1sKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1nICs9IDY7XHJcblxyXG4gICAgICAgIH0pLmZhaWwoZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KSovXHJcblxyXG5cclxuXHJcbn0pXHJcblxyXG5jb25zdCBsb2FkR2FsbGVyeSA9IHVybCA9PiB7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IHVybFxyXG4gICAgfSkuZG9uZShyZXMgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnBob3Rvc1swXS5pbWdfc3JjKTtcclxuXHJcbiAgICAgICAgJChcImJvZHlcIikuY3NzKHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybCgke3Jlcy5waG90b3NbMF0uaW1nX3NyY30pIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWRgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KS5mYWlsKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG4vKlxyXG5jb25zdCByYW5kTG9hZEltZyA9ICgpID0+IHtcclxuICAgIGxldCBucklNRyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo4NTYrMSk7XHJcblxyXG4gICAgcmV0dXJuIG5ySU1HO1xyXG59XHJcblxyXG5jb25zdCBsb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgJChkb2N1bWVudCkuYWpheFN0YXJ0KCgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGVsSDIgPSAoJzxoMj48L2gyPicpO1xyXG4gICAgICAgICQoJ2hlYWRlcicpLmFwcGVuZChlbEgyKTtcclxuICAgICAgICAkKCdidXR0b24nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICAgICAgJCgnaDInKS5hZGRDbGFzcygnc3Bpbm5lci1sb2FkZXInKTtcclxuXHJcbiAgICB9KVxyXG5cclxuICAgICQoZG9jdW1lbnQpLmFqYXhDb21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgJCgnYnV0dG9uJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgJCgnaDInKS5yZW1vdmUoKTtcclxuICAgIH0pXHJcbn1cclxuKi9cclxuIl19
