const search_section = document.querySelector(".search-section");
const add_section = document.querySelector(".add-meeting");

const add_section_btn = document.querySelector(".add-meeting-btn");
const search_section_btn = document.querySelector(".flter-btn");

add_section_btn.addEventListener("click", ()=> {
    if (add_section.classList.contains("hide")) {
        add_section.classList.remove("hide");
        search_section_btn.classList.remove("active");

        search_section.classList.add("hide");
        add_section_btn.classList.add("active");
    }
})

search_section_btn.addEventListener("click", ()=> {
    if (search_section.classList.contains("hide")) {
        search_section.classList.remove("hide");
        add_section_btn.classList.remove("active");

        add_section.classList.add("hide");
        search_section_btn.classList.add("active");
    }
})