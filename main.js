var inp1 = document.getElementById("inp1");
var sp = document.getElementById("sp");
var but = document.getElementById("but");
function btn(){
    if(inp1.value == ""){
        sp.innerText = "Iltimos Nomerni Kiriting";
    }
    else if(inp1.value.length < 13){
        sp.innerText = "(+998901234567) nomer shunday kiritilsin";
    }
    else{
        localStorage.setItem("Nomer", inp1.value);
        but.setAttribute("data-bs-dismiss", "modal");
        but.setAttribute("aria-label", "Close");
    }
}