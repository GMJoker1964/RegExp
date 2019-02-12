function isFirstLetterUpperCase(str){
    let regexp = /^[A-Z]/;
    let result = regexp.test(str);
    if (result) {
        alert("String's first character is uppercase");
    } else {
        alert("String's first character is not uppercase");
    }
}