// what for each do is takes one value from
// array at a time and assigns it( the value, its' index as secod parameter and whole its array as the thord parameter)
// to a function as a parameter and passing an argument gets us the access of the value

faqs = document.querySelectorAll(".faq");
faqs.forEach((name, index, array) => {
  name.addEventListener("click", () => {
    var disVar=  document.querySelectorAll(".disable")[index];
    disVar.classList.toggle("dis");
    disVar.classList.toggle("answer");
    document.querySelectorAll(".ad")[index].classList.toggle("add");
    document.querySelectorAll(".cl")[index].classList.toggle("close");



});
})
// name argument in for-each loop is like this that returns the exact value that is selected of an array
//next() in jquery returns the next element is the same DOM tree
// when using display none for accordion do not use display: block in another class of same element as it will override
