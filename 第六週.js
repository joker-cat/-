let loremContent = document.querySelector('.lorem-content');
let openBtn = document.querySelector('.open-btn');
let openShow = document.querySelector('.open-show');
let closeBtn = document.querySelector('.close-btn');
let question01 = document.querySelector('.question-01');
let bool = false;
function lightBox(e) {
    e.target.className === "open-btn" ? lightboxOpen(e) : lightboxClose(e);
}
loremContent.addEventListener('click', lightBox);
function lightboxOpen(e) {
    openShow.classList.toggle("display-control");
    loremContent.classList.toggle("background-control");
    question01.classList.toggle("scroll-control");
    bool = true;
}
function lightboxClose(e) {
    !e.target.classList.contains("open-show") && bool ?
        close() :
        console.log('點錯地方');
    function close() {
        openShow.classList.toggle("display-control");
        loremContent.classList.toggle("background-control");
        question01.classList.toggle("scroll-control");
        bool = false;
    }
}

//----------------------------------------------------------------

let userInput = document.querySelector('.user-input');
let booksList = document.querySelector('.books-list');
let keyPoint = document.querySelector('.key-point');
let books = [{
    id: 0,
    name: "Harry Potter - content 01"
}, {
    id: 1,
    name: "Old Man And Sea - content 02"
}, {
    id: 2,
    name: "Hello World - content 03"
}];
userInput.addEventListener('keyup', filterBooks);
function filterBooks(event) {
    if (/^[a-zA-Z0-9]$/.test(event.key) || event.key === "Backspace") {
        if (userInput.value.trim() === "") {
            showBooks(books);
            return;
        }
        let value = userInput.value.toLowerCase();
        let isFilter = books.filter(book => book.name.toLowerCase().includes(value));
        console.log(isFilter);
        isFilter.length === 0 ? showBooks(books) : filterKeyPoint(isFilter);
    }
}
function filterKeyPoint(arr) {
    if (userInput.value === "") {
        keyPoint.innerHTML = "";
        return
    }
    keyPoint.innerHTML = "";
    arr.forEach((e, idx) => {
        let createLi = document.createElement('li');
        let coverDiv = document.createElement('div');
        coverDiv.textContent = e.name;
        coverDiv.addEventListener('click', () => {
            iWant(coverDiv.textContent);
        });
        createLi.appendChild(coverDiv);
        keyPoint.appendChild(createLi);
    })
}
function iWant(e) {
    booksList.innerHTML = e;
    return;
}

function showBooks(arr) {
    booksList.innerHTML = "";
    keyPoint.innerHTML = "";
    arr.forEach((e) => {
        let createLi = document.createElement('li');
        createLi.textContent = e.name
        booksList.appendChild(createLi);
    })
}

window.onload = showBooks(books);

//------------------------------------------------------------

let imgCount = document.querySelector('.img-count');
let imgStart = document.querySelector('.img-start');
let imageGallery = document.querySelector('.image-gallery');
let previousImage = document.querySelector('.previous-image');
let nextImage = document.querySelector('.next-image');
previousImage.addEventListener('click', settingCount);
nextImage.addEventListener('click', settingCount);
imgCount.addEventListener('keyup', continueRun);
imgStart.addEventListener('keyup', continueRun);
settingCount();
function settingCount(e) {
    e === undefined ? continueRun() : whichBtn(e);
    function whichBtn(e) {
        console.log(e);
        let e_target = e.target.classList[0];
        let mathValue = parseInt(parseInt(imgStart.value));
        e_target === "next-image" ? previous(mathValue) : next(mathValue);
        console.log(parseInt(imgStart.value));
    }

    function previous(mathValue) {
        console.log(parseInt(imgStart.value), parseInt(imgCount.value));
        if (parseInt(imgStart.value) < parseInt(imgCount.value)) {
            imgStart.value = (mathValue += 1);
            continueRun();
        } else {
            console.log("超過");
        }
    }
    function next(mathValue) {
        mathValue > 1 ? imgStart.value = (mathValue -= 1) : '';
        continueRun();
    }
}

function continueRun() {
    parseInt(imgCount.value) < parseInt(imgStart.value) ? imgStart.value = 1 : null;
    let str = '';
    if (parseInt(imgCount.value) >= 1) {
        imageGallery.innerHTML = "";

        let newArray = Array.from({ length: parseInt(imgCount.value) - 0 }, (_, index) => ({
            "id": index,
            "src": `https://picsum.photos/id/${index * 10}/150/150`,
            "name": `Person #${(index + 1 <= 9) ? "0" + (index + 1) : +index + 1}`,
            "depiction": `lorem picture ${index + 1}`
        }));
        for (let i = +parseInt(imgStart.value); i <= +parseInt(imgStart.value) + 1; i++) {
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

//----------------------------------------------------------------

let formPage = 0;
let inputRegex = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    psd: /[a-zA-Z0-9]{6,10}/,
    address: /^.+$/,
    city: /^.+$/,
    name: /^.+$/,
    phone: /[0-9]{10}/
}
let memory = {};
let contentAll = document.querySelectorAll('.content');
let nextPage = document.querySelectorAll('.next-page');
let previousPage = document.querySelectorAll('.previous-page');
zeroIndex();
contentAll[formPage].style.zIndex = 1;

nextPage.forEach((page, idx) => {
    page.addEventListener('click', e => {
        controlZindex(idx);
    })
})

function controlZindex(idx) {
    let isError = 0;
    let value = document.querySelectorAll(`.content:nth-of-type(${idx + 1}) input`);
    value.forEach(e => {
        let regex = inputRegex[e.name];
        (regex.test(e.value)) ? e.style.border = "2px solid #FFF" : e.style.border = "2px solid red";
        if (regex.test(e.value) === false) {
            isError += 1;
        } else {
            memory[e.name] = e.value;
        }
    })
    if (isError === 0 && formPage <= 2) {
        zeroIndex();
        contentAll[formPage += 1].style.zIndex = 2;
        if (formPage === 2) {
            console.log(memory);
        }
    }
}
function zeroIndex() {
    contentAll.forEach(e => e.style.zIndex = -1);
}

//----------------------------------------------------------------

let startTest = document.querySelector('.start-test');
let questionSet = document.querySelector('.question-set');
let introduceContent = document.querySelector('.introduce-content');
let radioSet = document.querySelectorAll('.qs input[type=radio]');
let finishBtn = document.querySelector('.finish-btn');
let againBtn = document.querySelector('.again-btn');
let userName = document.querySelector('.user-name');
let show = document.querySelector('.show');
let textC = document.querySelector('.text-content');
let nowQS = 0;
let score = {};
startTest.addEventListener('click', nextQs);
finishBtn.addEventListener('click', (e) => {
    if (userName.value !== "") {
        score.name = userName.value;
        textC.textContent = `${score.name} 測試的結果為 : html:${score.html}, css:${score.css}, js:${score.js}`;
        nowQS += 1;
        nextQs(e);
    }
});
againBtn.addEventListener('click', () => {
    score = {};
    nowQS = 0;
    radioSet.forEach(function (button) {
        button.checked = false;
    });
    questionSet.style.transform = `translateY(${-250 * nowQS}px)`;
})
radioSet.forEach(r => {
    r.addEventListener('change', calcScord);
})
function calcScord(e) {
    let turnJson = JSON.parse(e.target.value);
    score[turnJson.thing] = turnJson.score;
    nowQS += 1;
    nextQs(e);
}
function nextQs(e) {
    e.target.className === "start-test" ?
        introduceContent.style.display = "none" :
        questionSet.style.transform = `translateY(${-250 * nowQS}px)`;
}