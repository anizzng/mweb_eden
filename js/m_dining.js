var selBtn = document.getElementsByClassName("dining_option_con");
var selOpt = document.getElementById("selOpt");
var opened = 0; //열리지 않음

function btnToggle(){
  if (opened == 0) {
    selBtn[0].style.display = "block";
    opened = 1;
    //optBtn.classList.add("is_active");
  } else if (opened == 1) {
    selBtn[0].style.display = "none";
    opened = 0;
    //optBtn.classList.remove("is_active");
  }
  selOpt.classList.toggle("is_active"); // 없으면 넣어주고 있으면 빼준다.
}



