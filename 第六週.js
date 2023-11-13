// let loremContent = document.querySelector('.lorem-content');
// let openBtn = document.querySelector('.open-btn');
// let openShow = document.querySelector('.open-show');
// let closeBtn = document.querySelector('.close-btn');
// let question01 = document.querySelector('.question-01');
// let bool = false;
// function lightBox(e) {
//     e.target.className === "open-btn" ? lightboxOpen(e) : lightboxClose(e);
// }
// loremContent.addEventListener('click', lightBox);
// function lightboxOpen(e) {
//     openShow.classList.toggle("display-control");
//     loremContent.classList.toggle("background-control");
//     question01.classList.toggle("scroll-control");
//     bool = true;
// }
// function lightboxClose(e) {
//     !e.target.classList.contains("open-show") && bool ?
//         close() :
//         console.log('點錯地方');
//     function close() {
//         openShow.classList.toggle("display-control");
//         loremContent.classList.toggle("background-control");
//         question01.classList.toggle("scroll-control");
//         bool = false;
//     }
// }
// let userInput = document.querySelector('.user-input');
// let booksList = document.querySelector('.books-list');
// let keyPoint = document.querySelector('.key-point');
// let books = [{
//     id: 0,
//     name: "Harry Potter - content 01"
// }, {
//     id: 1,
//     name: "Old Man And Sea - content 02"
// }, {
//     id: 2,
//     name: "Hello World - content 03"
// }];
// userInput.addEventListener('keyup', filterBooks);
// function filterBooks(event) {
//     if (/^[a-zA-Z0-9]$/.test(event.key) || event.key === "Backspace") {
//         let value = userInput.value.toLowerCase();
//         let isFilter = books.filter(book => book.name.toLowerCase().includes(value));
//         isFilter.length === 0 ? showBooks(books) : filterKeyPoint(isFilter);
//     }
// }
// function filterKeyPoint(arr) {
//     if (userInput.value === "") {
//         keyPoint.innerHTML = "";
//         return
//     }
//     keyPoint.innerHTML = "";
//     arr.forEach((e, idx) => {
//         let createLi = document.createElement('li');
//         let coverDiv = document.createElement('div');
//         coverDiv.textContent = e.name;
//         coverDiv.addEventListener('click', () => {
//             iWant(coverDiv.textContent);
//         });
//         createLi.appendChild(coverDiv);
//         keyPoint.appendChild(createLi);
//     })
// }
// function iWant(e) {
//     booksList.innerHTML = e;
//     return;
// }

// function showBooks(arr) {
//     booksList.innerHTML = "";
//     keyPoint.innerHTML = "";
//     arr.forEach((e) => {
//         let createLi = document.createElement('li');
//         createLi.textContent = e.name
//         booksList.appendChild(createLi);
//     })
// }

// window.onload = showBooks(books);


let imgCount = document.querySelector('.img-count');
let imgStart = document.querySelector('.img-start');
let imageGallery = document.querySelector('.image-gallery');
// let imageContent = document.querySelectorAll('.image-content');
// let cc = document.querySelectorAll('.c1');
imgCount.addEventListener('input', settingCount);
imgStart.addEventListener('input', settingCount);
settingCount();
function settingCount() {
    // https://picsum.photos/200/300
    if (imgCount.value < imgStart.value) return;
    let str = '';
    if (imgCount.value >= 1) {
        imageGallery.innerHTML = "";

        let newArray = Array.from({ length: imgCount.value - 0 }, (_, index) => ({
            "id": index,
            "src": `https://picsum.photos/id/${index*10}/150/150`,
            "name": `Person #${(index + 1 <= 9) ? "0" + (index + 1) : +index + 1}`,
            "depiction": `lorem picture ${index + 1}`
        }));
        console.log(newArray);
        for (let i = +imgStart.value; i <= +imgStart.value + 1; i++) {
            console.log(i > newArray.length);
            if (!(i > newArray.length)) {
                str += `
                <div class="i-create">
                    <img class="i-setimage" src="${newArray[i - 1].src}">
                    <h3>${newArray[i - 1].name}</h3>
                    <p>${newArray[i - 1].depiction}</p>
                </div>`
            }
        }
        imageGallery.innerHTML = str;
    }
}

