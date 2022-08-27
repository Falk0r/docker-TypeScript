"use strict";
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = { firstName: "Bob", lastName: "Sponge" };
greeter(user);
