let load_more = document.querySelector('.load-more'),
    load_boxes = document.querySelectorAll('.ipsum-pharetra'),
    box_loaded = 2;

load_more.addEventListener('click', function () {

    if (load_more.innerHTML === "show less") {
        for (let i = 5; i >= 3; i--) {
            load_boxes[i].style.display = "none";
        }
        load_more.innerHTML = "load more";
    } else {
        if (box_loaded === load_boxes.length - 1) {
            load_more.innerHTML = "show less";
        } else {
            box_loaded++;
        }
        load_boxes[box_loaded].style.display = "flex";

    }
})