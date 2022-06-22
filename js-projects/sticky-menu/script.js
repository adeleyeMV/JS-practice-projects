window.addEventListener('scroll', function(){

    let navbar = document.getElementById('menu-bar');

    if(this.window.scrollY >= 190){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
});