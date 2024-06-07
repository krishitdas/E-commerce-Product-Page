document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    let currentIndex = 0;

    function updateMainImage(index) {
        mainImage.src = thumbnails[index].dataset.large;
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateMainImage(index);
        });
    });

    document.getElementById('next-button').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        updateMainImage(currentIndex);
    });

    document.getElementById('prev-button').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        updateMainImage(currentIndex);
    });
});