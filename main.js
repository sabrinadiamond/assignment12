$(document).ready(function(){
	var weather;
	var temp = data.list[0].main.temp;

	$.ajax({
	url:"http://api.openweathermap.org/data/2.5/group?",
	type:"GET",
	dataType:"JSON",
	data:{
		q:"",
		units:"imperial",
		appid:"085d16e5a61343b4cf6fec8e6cd7a62d"
	});

success:function(data){
		console.log(data);
		console.log(data.list[0].main.temp);
		$("button").html("The temp is" + data.list[0].main.temp);
	});

	$("#newYork").onclick(){
		$("#nycimage").toggle();
	});


	$(function(){
		$('#switchImage').on("change",function(){
			$("#image").attr("src", $(this).find(":selected").attr("data-src"));

		});
	});

	// var imageList = Array();
	// for (var i=1; i<=3; i++){
	// 	imageList[i] = new image(50%, 50%);
	// 	imageList[i].src = "images/" + i + ".jpg";
	// }

	// function switchImage(){
	// 	var selectedImage = document.list.switch.option[document.list.selectedIndex].value;
	// 	document.myImage.src=imageList[selectedImage].src;

	// }


	// var pictures = [
	// 	"images/newyork.jpg/1",
	// 	"images/boston.jpg/2",
	// 	"images/losangeles.jpg/3",
	// 	"images/chicago.jpg/4",];

	// $("#dropdown").change(function(){
	// 	var val = parseInt($("#dropdown").val());
	// 	$("img").attr("src",pictures[val]);
	// });

	});