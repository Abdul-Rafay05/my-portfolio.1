$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');

    }
})

const toggle = document.getElementById('toggle');
const ul = document.querySelector('ul');
toggle.addEventListener('click', () => {
    ul.classList.toggle('toggle_active');
})

// let output = UserName;

// // console.log(output);


// let add = document.getElementById('btn_third');

// output.addEventListener('click', function(){
//     console.log(output)
// })