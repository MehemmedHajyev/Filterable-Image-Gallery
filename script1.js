const item = document.querySelectorAll(".item");
const items = document.querySelector(".items");
const image = document.querySelectorAll(".image");



for(let i=0;i<item.length;i++){
    item[i].addEventListener('click',()=>{
        items.querySelector('.active').classList.remove('active')
        item[i].classList.add('active')
        let filterName=item[i].getAttribute('data-name');
        for(let i=0;i<image.length;i++){
            let filterImage=image[i].getAttribute('data-name')
            if(filterName===filterImage || filterName==='all'){
                image[i].classList.add('show')
                image[i].classList.remove('hide')
            }else{
                image[i].classList.add('hide')
                image[i].classList.remove('show')
            }
        }
    })
}