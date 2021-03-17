
export const accordions = () => {
    const accordions = document.querySelectorAll(".accordion-btn");
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function () {
            const imgIcon = this.querySelector('img');
            imgIcon.classList.toggle('accordion-btn-img--rotate');
            this.classList.toggle("accordion-content--active");
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }


}