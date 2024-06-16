function viewAdd(){
    $("#add").fadeIn(350);
};

function hideAdd(){
    $("#add").fadeOut(350);
};

function viewRed(){
    $("#red").fadeIn(350);
};

function hideRed(){
    $("#red").fadeOut(350);
};

function viewDel(){
    $("#del").fadeIn(350);
};

function hideDel(){
    $("#del").fadeOut(350);
};

document.addEventListener('DOMContentLoaded', () => {

    const inputElement = document.querySelector('#datepicker') // ищем наш единственный input
    const maskOptions = { // создаем объект параметров
      mask: '00.00.0000' // задаем единственный параметр mask
    }
    IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами
})