//  js 

let selecetField = document.getElementById('selecetfield')
let mocialMedia = document.getElementById('selecet-Social-media')
let options = document.getElementsByClassName('options')
let list = document.getElementById('list')
let arrowIcon = document.getElementById('arrowIcon')

console.log(list)

selecetField.onclick = function () {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}



for (option of options) {
    option.onclick = function() {
        mocialMedia.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
}
console.log(mocialMedia)