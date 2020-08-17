
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//Scroller
const next = document.querySelector('#next');
        const prev = document.querySelector('#prev');

        function handleScrollNext(direction){
            const cards = document.querySelector('.con-cards');
            cards.scrollLeft = cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100
        }

        function handleScrollPrev(direction){
            const cards = document.querySelector('.con-cards');
            cards.scrollLeft = cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100
        }
        next.addEventListener('click', handleScrollNext)
        prev.addEventListener('click', handleScrollPrev)