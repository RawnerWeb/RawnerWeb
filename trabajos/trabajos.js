document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const menu = dropdown.querySelector('.dropdown_menu');
        const caret = dropdown.querySelector('.caret');
        const options = dropdown.querySelectorAll('.dropdown_menu li');
        const selected = dropdown.querySelector('.selected');
    
        select.addEventListener('click', () => {
            select.classList.toggle('selected-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        });
    
        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText;
                select.classList.remove('selected-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');
    
                options.forEach(option => {
                    option.classList.remove('active');
                });
    
                option.classList.add('active');
            });
        });
    });
});
