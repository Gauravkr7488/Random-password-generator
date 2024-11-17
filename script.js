const create = document.getElementsByClassName('create');
const copy = document.getElementsByClassName("copy");
const input = document.getElementById("input");
const length = 12;

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "1234567890";
const sp = "[{]};:',<.>/?!@#$%^&*()_+=-";

let password = "";
function pass() {
    // password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += sp[Math.floor(Math.random() * sp.length)];
}

function createpassword() {
    password = "";
    while (password.length < length) {
        pass();
    }
    input.value = password;

}

function copypassword() {
    input.select();
    document.execCommand("copy");
}
