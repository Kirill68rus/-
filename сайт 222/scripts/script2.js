function check(){
	var state = $("input[name='r']:checked").val();
	if(!state){
		return $("#message").html("<font style='color: red'>Выбирите вариант ответа</font>")
	} else {
		if(state == "1"){
			window.location.href = 'languages/python_test.html';
		}
		if(state == "2"){
			window.location.href = 'test/file8.html';
		}
		if(state == "6"){
			window.location.href = 'languages/python_test.html';
		}
		if(state == "4"){
			window.location.href = 'test/file1.html';
		}
		if(state == "5"){
			window.location.href = 'test/file1.html';
		}
		if(state == "3"){
			window.location.href = 'test/file1.html';
		}
	}
}