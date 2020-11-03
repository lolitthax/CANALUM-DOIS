var newsCarouselOne = document.getElementById('newsCarousel-one');
var newsCarouselOne_buttons = document.querySelectorAll('#newsCarousel-one button');
var newsCarouselOne_carouselNews = document.getElementById('newsCarousel-one-news');
var newsCarouselOne_carouselNewsCount = document.getElementById('newsCarousel-one-news').childElementCount;
var newsCarouselOne_carouselNewsWidth = document.getElementById('newsCarousel-one-news').offsetWidth;
var newsCarouselOne_carouselDivs = document.querySelectorAll('.newsCarousel-one-divs');
var newsCarouselOne_carouselDivsWidth = document.querySelector('.newsCarousel-one-divs').clientWidth;

var translatex = 0;
var index = 1;

var windowSize = window.innerWidth * newsCarouselOne_carouselNewsCount;



// Div size
function divSize()
{
    newsCarouselOne_carouselNews.style.width = windowSize + 'px';
}
divSize()



// Buttons
newsCarouselOne_buttons.forEach(element => {
    element.addEventListener('click', event => {
        if(event.target.id === 'newsCarousel-one-previous'){
            if(index > 1){
                index -= 1;
                translatex += newsCarouselOne_carouselNewsWidth;
            }
            else{
                index = newsCarouselOne_carouselNewsCount;
                translatex = -newsCarouselOne_carouselNewsWidth * (newsCarouselOne_carouselNewsCount-1);
            }
        }
        else{
            if(index < newsCarouselOne_carouselNewsCount){
                index += 1;
                translatex -= newsCarouselOne_carouselNewsWidth;
                console.log('mext');
            }
            else{
                index = 1;
                translatex = 0;
            }
        }

        newsCarouselOne_carouselNews.style.transform = `translateX(${translatex}px)`;
    })
})