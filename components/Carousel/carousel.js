class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.left = this.carousel.querySelector('.left-btn');
        this.right = this.carousel.querySelector('.right-btn');
        this.images = this.carousel.querySelectorAll('img');
        this.index = 0;
        this.images[this.index].classList.add('active');
        this.left.addEventListener('click', () => this.moveLeft());
        this.right.addEventListener('click', () => this.moveRight());
        this.imgList = Array.from(this.images).map(image => new Slide(image));
    }

    moveLeft() {
            this.images[this.index].classList.remove('active');
            if (this.index === 0) {
                this.index = this.images.length - 1;
            } else {
                this.index--;
            }
            this.images[this.index].classList.add('active');
            this.imgList.forEach((image, index) => {
                if (index !== this.index) {
                    image.inactive();
                }
            });
            this.imgList[this.index].active();
    }

    moveRight() {
        this.images[this.index].classList.remove('active');
        if (this.index === this.images.length - 1) {
            this.index = 0;
        } else {
            this.index++;
        }
        this.images[this.index].classList.add('active');
        this.imgList.forEach((image, index) => {
            if (index !== this.index) {
                image.inactive();
            }
        });
        this.imgList[this.index].active();
    }
}

class Slide {
    constructor(image) {
        this.image = image;
        this.val = this.image.dataset.image;
        this.slide = document.querySelector(`img[data-image="${this.val}"]`);
    }

    active() {
        this.slide.classList.add('active');
    }

    inactive() {
        this.slide.classList.remove('active');
    }
}

const carousel = new Carousel(document.querySelector('.carousel'));