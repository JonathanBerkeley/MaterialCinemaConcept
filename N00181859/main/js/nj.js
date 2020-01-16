//Custom scripts for the site
//Modal div control scripts:
function login(){
    working_element = document.getElementById("loginbox");
    working_element.style.display="block";
    window.onclick = function(event) {
        if (event.target == working_element) {
            working_element.style.display = "none";
        }
    }
}
function signup(){
    working_element = document.getElementById("signup");
    working_element.style.display="block";
    window.onclick = function(event) {
        if (event.target == working_element) {
            working_element.style.display = "none";
        }
    }
}
function booking(){
    working_element = document.getElementById("bookingbox");
    working_element.style.display="block";
    window.onclick = function(event) {
        if (event.target == working_element) {
            working_element.style.display = "none";
        }
    }
}
function fclear(){
    working_element.style.display = "none";
}
//Movie horizontal button
function movieAction(){
    alert("This feature is not yet implemented");
}