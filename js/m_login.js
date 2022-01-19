/* tab 버튼 */
const tabList = document.querySelectorAll('.login_tab_menu .tab_list li');
  
  for(var i = 0; i < tabList.length; i++){
    tabList[i].querySelector('.btn').addEventListener('click', function(e){
      e.preventDefault();
      for(var j = 0; j < tabList.length; j++){
        tabList[j].classList.remove('is_on');
      }
      this.parentNode.classList.add('is_on');
    });
  }

/* 로그인 페이지 */
function userLogin(){
  let checkId = document.getElementById("user_id").value;
  if(checkId == ""){
    alert("아이디를 입력하세요.");
    return;
  }
  let checkPw = document.getElementById("user_pwd").value;
  if(checkPw == ""){
    alert("비밀번호를 입력하세요.");
    return;
  }
  alert("로그인 되었습니다.")
}

/* 비회원 로그인 */
function nonMemberLogin(){
  let reservNum = document.getElementById("resno").value;
  if(reservNum == ""){
    alert("예약번호를 입력하세요.");
    return;
  }
  let userName = document.getElementById("user_nm").value;
  if(userName == ""){
    alert("이름을 입력하세요.");
    return;
  }
  let phoneNum2 = document.getElementById("user_tel2").value;
  if(phoneNum2 == ""){
    alert("휴대폰 가운데자리 번호를 입력하세요.");
    return;
  }
  let phoneNum3 = document.getElementById("user_tel3").value;
  if(phoneNum3 == ""){
    alert("휴대폰 끝자리 번호를 입력하세요.");
    return;
  }
  alert("예약 내역을 조회합니다.");
}

/* 회원가입 버튼 */
function joinUs(){
  alert("회원가입 페이지는 준비중입니다.")
}