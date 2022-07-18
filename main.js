   /*로그인 성공시 로그인 입력 박스 div 내에
   id 회원님 반갑습니다. 이런 메세지 출력하기. div변수.innerHTML = "태그"*/

   var log_id;
   var log_pw;
   var welcome;

   window.onload=function(){

      log_id=document.getElementById("log_id");
      log_pw=document.getElementById("log_pw");
      welcome=document.getElementById("welcome_info");

   }

   function submit(){
      
      var id=log_id.value;
      var pw=log_pw.value;

      if(id=="1"&&pw=="1"){
         alert("로그인 성공");
         welcome.innerHTML = id+"님 반갑습니다.";
      }
      else {
         alert("로그인 실패");
         welcome.innerHTML ="다시 입력해주세요";
      }
      
   }