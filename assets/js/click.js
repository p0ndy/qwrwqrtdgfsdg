function show1(){
    document.getElementById('table1').style.display = "block";
    document.getElementById('table2').style.display = "none";
    document.getElementById('table3').style.display = "none";
    
    $("#a1").addClass("active-panel");
    $("#a2").removeClass("active-panel");
    $("#a3").removeClass("active-panel");
}
function show2(){
    document.getElementById('table1').style.display = "none";
    document.getElementById('table2').style.display = "block";
    document.getElementById('table3').style.display = "none";
    
    $("#a1").removeClass("active-panel");
    $("#a2").addClass("active-panel");
    $("#a3").removeClass("active-panel");
}
function show3(){
    document.getElementById('table1').style.display = "none";
    document.getElementById('table2').style.display = "none";
    document.getElementById('table3').style.display = "block";
    
    $("#a1").removeClass("active-panel");
    $("#a2").removeClass("active-panel");
    $("#a3").addClass("active-panel");
}