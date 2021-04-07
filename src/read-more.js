const charCount = 384;

function onloadHideText(textElement, hideBtn) {
    let text = textElement.innerHTML.split("<")[0];
    if (text.length > charCount) {
        let limitedText = text.slice(0, charCount);
        let hiddenText = text.slice(charCount, -1);
        hideBtn.innerText = "Читать дальше";
        textElement.innerHTML = `${limitedText} ... <span class="reviews__hidden">${hiddenText}</span>${hideBtn.outerHTML}`;
        textElement
            .querySelector(".reviews__link")
            .addEventListener("click", showText, true);
    }
}

function hideText() {
    textElement = this.parentElement;
    let text = textElement.innerHTML.split("<")[0];
    if (text.length > charCount) {
        let limitedText = text.slice(0, charCount);
        let hiddenText = text.slice(charCount, -1);
        this.innerText = "Читать дальше";
        textElement.innerHTML = `${limitedText} ... <span class="reviews__hidden">${hiddenText}</span>${this.outerHTML}`;
        textElement
            .querySelector(".reviews__link")
            .addEventListener("click", showText, true);
    }
}

function showText() {
    textElement = this.parentElement;
    hiddenText = textElement.querySelector(".reviews__hidden").innerHTML;
    text = textElement.innerHTML.split(" ... ")[0] + hiddenText;
    if (text.length > charCount) {
        this.innerText = "Скрыть";
        textElement.innerHTML = `${text}${this.outerHTML}`;
        textElement
            .querySelector(".reviews__link")
            .addEventListener("click", hideText, true);
    }
}

let textElements = document.querySelectorAll(".reviews__text");
textElements.forEach((textElement) => {
    let readMoreBtn = textElement.querySelector(".reviews__link");
    onloadHideText(textElement, readMoreBtn);
});