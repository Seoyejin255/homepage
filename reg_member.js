var reg_id, reg_pw, reg_pwr, reg_name, reg_email, reg_sex;//html에서 객체형식으로 받아 올 변수
var id, pw, pwr, name1, email, sex;// 폼 태그의 입력 값을 가져 올 변수.

window.onload = function () {
    reg_id = document.getElementById("reg_id");
    reg_pw = document.getElementById("reg_pw");
    reg_pwr = document.getElementById("reg_pwr");
    reg_name = document.getElementById("reg_name");
    reg_email = document.getElementById("reg_email");
    reg_sex = document.getElementsByName("reg_sex");
}
//alert(sex[0].value);-> 남자 alert(sex[1].value); -> 여자
//아이디, 암호, 암호재입력, 이름,이메일

function register() { // 버튼이 클릭되고 나서 실행할 것들.
    input();
    check();
}


function check() {//글자 수 확인 할 함수
    if (id.length < 4 || id.length > 12) {
        alert("id를 4글자 이상 12글자 이하로 작성해주세요");
    } else if (pw.length < 4 || pw.length > 12) {
        alert("비밀번호를 4글자 이상 12글자 이하로 작성해주세요");
    } else if (pwr.length < 4 || pwr.length > 12) {
        alert("비밀번호 확인을 다시 해주세요.");
    } else if (name1.length < 2 || name.length > 20) {
        alert("이름을 2글자 이상 20글자 이하로 작성해주세요");
    } else if (email.length < 2 || email.length > 20) {
        alert("이메일을 2글자 이상 20글자 이하로 작성해주세요");
    } else {
        alert("회원가입 성공 ^^");
        PwdCheck();
        info()
    }
}

function info() {//입력한 값들을 팝업에 출력하는 함수.
    alert("id : " + id + "\npw : " + pw + "\npwr : " + pwr + "\nname1 : " + name1 + "\nemail : " + email + "\nsex : " + sex);
}

function input() {//변수에 값을 넣는 함수.
    id = reg_id.value;
    pw = reg_pw.value;
    pwr = reg_pwr.value;
    name1 = reg_name.value;
    email = reg_email.value;
    for (var i = 0; i < reg_sex.length; i++) {
        if (reg_sex[i].checked == true) {
            sex = reg_sex[i].value;
        }
    }
}
function PwdCheck() {// 비밀번호와 비밀번호 재확인이 일치하는지 확인하고 콘솔에 기록을 남기는 함수.
    if (pw == pwr) {
        console.log("로그인을 성공했습니다.");
    }
    else console.log("로그인을 실패했습니다.");
}