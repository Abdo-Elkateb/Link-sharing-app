//  js

let selecetField = document.querySelector(".selecetfield");
let mocialMedia = document.getElementById("selecet-Social-media");
let options = document.getElementsByClassName("options");
let hide = document.querySelector(".hide");
let arrowIcon = document.querySelector(".arrowIcon");
let chosePic = document.getElementById("file-image");
let choseFile = document.getElementById("chose-file");
let choseLink = document.querySelector(".chose-link");
let save = document.getElementById("save");
let update = document.querySelector(".update");
let remove = document.querySelector(".remove");
let formMain = document.querySelector(".form-main");
let numberLink = document.querySelector(".number-link");
let dataPro = [];
let newDate = []
let addNewLink = document.querySelector(".add-new-link");

//  Add active class to navbar element when clicked
function activeClickNavigation() {
    let links = document.querySelectorAll(".our");

    if (links.length) {
        links.forEach((link) => {
            link.addEventListener("click", () => {
                links.forEach((link) => {
                    link.classList.remove("active");
                });
                // e.preventDefault();
                link.classList.add("active");
            });
        });
    }
}
activeClickNavigation();

// function dataLink() {
//     newDate = {
//         title: choseLink
//     }
//     dataLink.push()

// }

//  Create  a new link
function Createlinks() {
    for (let i = 0; i <= dataPro.length; i++) {
        formMain.innerHTML += `
  
           <div class="first-link">
                    <div class="selector">
                        <div class="linkes-main">
                            <div>
                                <i class="fa-solid fa-grip-lines  update" id="drag"></i>
                                <h4 class="number-link">link #1</h4>

                            </div>
                            <div>
                                <p class="remove">remove</p>
                            </div>
                        </div>
                        <span>platform</span>

                    </div>
                    <div id="selecetfield" class="selecetfield">
                        <img src="images/icon-github.svg" alt>
                        <p id="selecet-Social-media">GitHub</p>
                                <img id="arrowIcon"class="arrowIcon"  src="images/icon-chevron-down.svg" alt>
                    </div>
                    <ul  class="hide">
                        <li class="options">
                            <img src="images/icon-youtube.svg" alt>
                            <p>youtube</p>
                        </li>
                        <li class="options">
                            <img src="images/icon-linkedin.svg" alt>
                            <p>linkedin</p>
                        </li>
                            <li class="options">
                                <img src="images/icon-github.svg" alt>
                                <p>GitHub</p>
                            </li>
                    </ul>
                    <span>link</span>
                    <input id="chose-link" class="chose-link" type="text" id="link"
                        placeholder="https://www.GitHub.com">
                </div>
        `
    }


}


// selecetField fun
let body = document.getElementById("body");
body.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-new-link")) {
        // let item = e.target;
        Createlinks();
        // let id = item.getAttribute("data-id");
        // let storage = getDateFromLocal();
        // let newDate = storage.filter(function (item) {
        //     return item.id != id
        // })
        // localStorage.setItem("product", JSON.stringify(newDate))
        // item.parentElement.parentElement.remove()
    }
    if (e.target.classList.contains("selecetfield")) {
        selecetFieldAll();

        // let item = e.target
        // let taskes = item.parentElement.previousElementSibling.textContent
        // product.value = taskes
        // submit.value = "UPDATE";
        // submit.style.background = "rgba(8, 248, 8, 0.829)";
        // submit.style.border = "none",
        //     submit.style.color = "#fff";
        // status = item.getAttribute("data-id");
    }
    if (e.target.classList.contains("update")) {
        updateLink();
        // if
        //  (datePro.length > 0) {
        //     datePro.splice(0);
        //     localStorage.clear();
    }

});

//

function selecetFieldAll() {

    hide.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
    loopItemFromSelecetfield();
};
//
//  loopItemFromSelecetfield()

function loopItemFromSelecetfield() {
    for (option of options) {
        option.onclick = function () {
            mocialMedia.textContent = this.textContent;
            hide.classList.toggle("hide");
            arrowIcon.classList.toggle("rotate");
            let edite = `https://www.${this.textContent}.com`;
            edite = edite.replace(/\s+/g, "");
            choseLink.placeholder = edite
        };
       
        
    }
    alert("here we go")
}

//  update
function updateLink() {
    const dis = document.getElementById("dis");

    dis.style.display = "none";
    //  addNewLink.style.background = "green";
    save.value = "change";
}

// chose image
function choseYourImage() {
    choseFile.addEventListener("change", () => {
        const changeImage = document.querySelector("change-image-main");
        chosePic.src = URL.createObjectURL(choseFile.files[0]);
        changeImage.textContent = "";
    });
}
choseYourImage();
