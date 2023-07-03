const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    return cats.push("Ralph");
};
function destructivelyPrependCat() {
    return cats.unshift("Bob");
};
function destructivelyRemoveLastCat() {
    return cats.pop();
};

function destructivelyRemoveFirstCat() {
    return cats.shift();
};

function appendCat() {
    const lastCats = [...cats, "Broom"]
    return lastCats;
};
function prependCat() {
    const firstCats = ["Arnold", ...cats]
    return firstCats;
};
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
};

function removeFirstCat() {
    return cats.slice(1);
};


// append cat
// prepend cat
// remove last cat
// remove first cat