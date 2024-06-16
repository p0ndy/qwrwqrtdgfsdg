const divs = document.querySelectorAll('.highlightable');

divs.forEach(div => {
    const checkbox = div.querySelector('.real-checkbox');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            div.setAttribute("style", "background-color: #3737886b");
        } else {
            div.setAttribute("style", "background-color: unset");
        }
    });
});