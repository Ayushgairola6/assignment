const Image_container = document.querySelector(".container")
const Images = document.querySelectorAll('.img')


Image_container.addEventListener("click", (e) => {
    // increase the dimensions of the image
    Images.forEach((elem) => {
        if (e.target === elem) {
            elem.classList.remove('normal-size')
            elem.classList.add('expand')
            
            //  resize the previous image

        } else {
            !elem.classList.add('normal-size')
            !elem.classList.remove('expand')
            
        }
    })

})
// icon appears
Images.forEach((image)=>{
    image.addEventListener("mouseover",()=>{
        image.nextElementSibling.classList.remove('hide')
        image.nextElementSibling.classList.add('icons')
    })
})

// icons hides
Images.forEach((image)=>{
    image.addEventListener("mouseout",()=>{
        image.nextElementSibling.classList.remove('icons')
        image.nextElementSibling.classList.add('hide')
    })
})