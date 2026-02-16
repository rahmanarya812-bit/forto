// Dark Mode
function toggleDark() {
    document.body.classList.toggle("dark");
}

// Simpan preferensi dark mode
if(localStorage.getItem("darkMode") === "enabled"){
    document.body.classList.add("dark");
}

function toggleDark(){
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("darkMode","enabled");
    } else {
        localStorage.setItem("darkMode","disabled");
    }
}