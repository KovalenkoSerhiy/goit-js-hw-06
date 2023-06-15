const categoriesEl = document.querySelectorAll("li.item");
console.log("Namber of Categories:", categoriesEl.length);
categoriesEl.forEach( function (params) {
    console.log("Category:", params.querySelector("h2").textContent);
    console.log("Elements:",  params.querySelectorAll("li").length);
});