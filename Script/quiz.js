var sTime=0;
	/*this function use to start delay and call countDown function.*/
	function timmer() {
		document.getElementById("quiz1").className="vis";
		document.getElementById("quiz2").className="vis";
  		countDown();
  		setTimeout(function(){
			  document.getElementById("arlet").innerHTML= ("Time's Out."),alert("Times up !!!!!!!!"
			  );
		quiz2.style.display="none";
		quiz1.style.display="none";
		time.style.display="none";
		intro.style.display="none";
		start.style.display="none";
		down.style.display="none";
		but2.style.display="none";}, 61000);
		
	}

	var toShow;
	var t=0;
/*this function is to count countdown*/
	function countDown() {
  		for (var i=0;i<60;i++){
        t=t+1000;
     	toShow = setTimeout(timeShow, t);
  		}
	}
	var r=60;
/*this function use to shows countdown*/
	function timeShow() {
  		r--;
  		sTime++
  		if (r>=10){
    		document.getElementById("time").innerHTML=("00:"+r);
  		}
  		else{
  			document.getElementById("time").innerHTML=("00:0"+r);
  		}
  	}
/*this function use to do corrections*/
	function getRadioValue(){
		var cor1=0,cor2=0,cor3=0,cor4=0,cor5=0,cor6=0,cor7=0,cor8=0,cor9=0,cor10=0;
		var wro1=0,wro2=0,wro3=0,wro4=0,wro5=0,wro6=0,wro7=0,wro8=0,wro9=0,wro10=0;
		var result=document.getElementById("result");
		var quiz1=document.getElementById("quiz1");
		var quiz2=document.getElementById("quiz2");
		var ques1 = document.quiz1.question1.value;
		var ques2 = document.quiz1.question2.value;
		var ques3 = document.quiz1.question3.value;
		var ques4 = document.quiz1.question4.value;
		var ques5 = document.quiz1.question5.value;
		var ques6 = document.quiz2.question6.value;
		var ques7 = document.quiz2.question7.value;
		var ques8 = document.quiz2.question8.value;
		var ques9 = document.quiz2.question9.value;
		var ques10 = document.quiz2.question10.value;
		if (ques1=="Babarakanda Ella") {
			cor1=cor1+2;
			document.getElementById("corrections").innerHTML+=("Question 01 ✅ <br>");
		}
		else{
			wro1=wro1-1;
			document.getElementById("corrections").innerHTML+=("Question 01 ✘<br>");
		}
		if (ques2=="Mahaweli") {
			cor2=cor2+2;
			document.getElementById("corrections").innerHTML+=("Question 02 ✅<br>");
		}
		else{
			wro2=wro2-1;
			document.getElementById("corrections").innerHTML+=("Question 02 ✘<br>");
		}
		if (ques3=="Hambanthota Distric") {
			cor3=cor3+2;
			document.getElementById("corrections").innerHTML+=("Question 03 ✅<br>");
		}
		else{
			wro3 = wro3-1;
			document.getElementById("corrections").innerHTML+=("Question 03 ✘<br>");
		}
		if (ques4=="Ruppies") {
			cor4=cor4+2;
			document.getElementById("corrections").innerHTML+=("Question 04 ✅<br>");
		}
		else{
			wro4 = wro4-1;
			document.getElementById("corrections").innerHTML+=("Question 04 ✘<br>");
		}
		if (ques5=="25") {
			cor5=cor5+2;
			document.getElementById("corrections").innerHTML+=("Question 05 ✅<br>");
		}
		else{
			wro5 = wro5-1;
			document.getElementById("corrections").innerHTML+=("Question 05  ✘<br>");
		}
		if (ques6=="Sinharaja Forest") {
			cor6=cor6+2;
			document.getElementById("corrections").innerHTML+=("Question 06 ✅<br>");
		}
		else{
			wro6 = wro6-1;
			document.getElementById("corrections").innerHTML+=("Question 06  ✘<br>");
		}
		if (ques7=="Jayawardanepura Kotte") {
			cor7=cor7+2;
			document.getElementById("corrections").innerHTML+=("Question 07  ✅<br>");
		}
		else{
			wro7 = wro7-1;
			document.getElementById("corrections").innerHTML+=("Question 07  ✘<br>");
		}
		if (ques8=="United Kingdom") {
			cor8=cor8+2;
			document.getElementById("corrections").innerHTML+=("Question 08  ✅<br>");
		}
		else{
			wro8 = wro8-1;
			document.getElementById("corrections").innerHTML+=("Question 08  ✘<br>");
		}
		if (ques9=="Petroleum") {
			cor9=cor9+2;
			document.getElementById("corrections").innerHTML+=("Question 09 ✅<br>");
		}
		else{
			wro9 = wro9-1;
			document.getElementById("corrections").innerHTML+=("Question 09 ✘<br>");
		}
		if (ques10=="Buddhism") {
			cor10=cor10+2;
			document.getElementById("corrections").innerHTML+=("Question 10 ✅<br>");
		}
		else{
			wro10 = wro10-1;
			document.getElementById("corrections").innerHTML+=("Question 10 ✘<br>");
		}
		var total = cor1+wro1+cor2+wro2+cor3+wro3+cor4+wro4+cor5+wro5+cor6+wro6+cor7+wro7+cor8+wro8+cor9+wro9+cor10+wro10;
		
		alert("Quiz submit now.");
		

/*show corrections,marks,used time and background colour*/		
		if (total>15) {
			document.getElementById("divr").classList.add("highlightWin1");
			document.getElementById("topic").innerHTML=("RESULTS :");
			document.getElementById("result").innerHTML=("Your mark is  "+total+" & Very Good");
			document.getElementById("timeShow").innerHTML=("You got "+sTime+" seconds to complete.");
		}
		else if (total>10) {
			document.getElementById("divr").classList.add("highlightWin2");
			document.getElementById("topic").innerHTML=("RESULTS :");
			document.getElementById("result").innerHTML=("Your mark is  "+total+" & Good");
			document.getElementById("timeShow").innerHTML=("You got "+sTime+" seconds to complete.");
		}
		else if (total>5){
			document.getElementById("divr").classList.add("highlightWin3");
			document.getElementById("topic").innerHTML=("RESULTS :");
			document.getElementById("result").innerHTML=("Your mark is  "+total+" & Not Bad");
			document.getElementById("timeShow").innerHTML=("You got "+sTime+" seconds to complete.");
		}
		else if (total>=0){
			document.getElementById("divr").classList.add("highlightWin4");
			document.getElementById("topic").innerHTML=("RESULTS :");
			document.getElementById("result").innerHTML=("Your mark is  "+total+" & Try Again");
			document.getElementById("timeShow").innerHTML=("You got "+sTime+" seconds to complete.");
		}
		else{
			document.getElementById("divr").classList.add("highlightWin4");
			document.getElementById("topic").innerHTML=("RESULTS :");
			document.getElementById("result").innerHTML=("Your mark is "+total+" & Poor Knowladge");
			document.getElementById("timeShow").innerHTML=("You got "+sTime+" seconds to complete.");
		}
		fote.style.visibility="visible";
		divright.style.display="none";
		divleft.style.display="none";
		bdy.style.height="950px";
		time.style.display="none";
		intro.style.display="none";
		start.style.display="none";
		down.style.display="none";
		but2.style.display="none";
		but1.style.display="none";
		arlet.style.display="none";
		foot.style.display="none";
		divr.style.visibility="visible";
		document.getElementById( 'top' ).scrollIntoView();

	}