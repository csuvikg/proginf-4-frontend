// 2
const headers = $(".card-header");
// a
console.log($(headers[0]).parent().find(".list-group-item"));

// b
const a = document.getElementsByTagName('a')[0];
console.log(a.parentElement.parentElement.previousElementSibling.innerText)

// c
headers.each((_, el) => {
    const listItems = $(el).parent().find(".list-group-item");
    console.log(`${$(el).text()}: ${listItems.length} item(s)`)
});

// 3
headers.each((_, el) => {
    const listItems = $(el).parent().find(".list-group-item");
    $(el).append(` (${listItems.length})`);
});

const items = $(".list-group-item");
items.each((_, el) => {
    if ($(el).text().trim().length < 5) {
        $(el).css("border", "1px solid red");
    }
});

headers.on("click", _ => {
    const header = $(event.target);
    header.next().toggle();
});

// 4
