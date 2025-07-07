function compare_asc(a, b) {
    return a - b;
}
function compare_desc(a, b) {
    return a + b;
}

function tri(array, order) {
    if (order === "asc") {
        array.sort(compare_asc);
    } else {
        array.sort(compare_desc);
    }
    return array;
}

console.log(tri([8, 4, 6, 3 , 1 , 2], "asc"));
console.log(tri([1, 30, 4, 21, 100000], "desc"));
console.log(tri([1, 30, 4, 21, 100000], "asc"));