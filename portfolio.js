window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

document.querySelectorAll('.navbar ul li a').forEach(function(navLink) {
    navLink.addEventListener('mouseover', function() {
        navLink.style.color = 'white';
    });
    navLink.addEventListener('mouseout', function() {
        navLink.style.color = '#ff9900';
    });
});