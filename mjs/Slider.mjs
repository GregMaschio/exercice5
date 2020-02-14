export class Slider {
    constructor(elmMonSlider, config_slider){
        this.elmMonSlider = elmMonSlider;
        this.list_slide = config_slider.list_slide;
        console.log('slider')

    }

    creerSlider() {

        console.log(this.elmMonSlider.tagName)
        console.log(this.list_slide)
        let elmSlider = document.createElement('div')
        elmSlider.classList.add('slider')
        let elmSlides = document.createElement('div')
        elmSlides.classList.add('slides')
        let k=1
        for (let unSlide of this.list_slide){
            let elmSlide = document.createElement('div')
            let titreSlide = document.createElement('p')
            let sousTitreSlide = document.createElement('p')
            let imageSlide = document.createElement('img')
            let boutonSlide = document.createElement('a')

            elmSlide.id = 'slides-' + k
            k++

            elmSlides.appendChild(elmSlide)
            elmSlide.appendChild(titreSlide).innerHTML = unSlide.titre;
            elmSlide.appendChild(sousTitreSlide).innerHTML = unSlide.sousTitre;
            elmSlide.appendChild(imageSlide).src = unSlide.img;
            elmSlide.appendChild(boutonSlide).href = '#' + elmSlide.id;
            elmSlider.appendChild(boutonSlide).innerHTML = k -1;
        }
        elmSlider.appendChild(elmSlides)
        this.elmMonSlider.appendChild(elmSlider)

    }


}