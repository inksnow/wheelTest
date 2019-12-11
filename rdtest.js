


 $(document).ready(function(){
	 rdInit()
	
 })


  var isRdAnimate = false;
  
 function rdInit(){
	 var imgArray = new Array("bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg");
	// alert("你好，我是一个警告框！init");
	 var imgNumber = 5;
		 //当前展示的图片
	 var imgIndex = 0;
	 var imgViewArray = new Array();	 
	 var combination= document.getElementById("rd_wheel_combination");
	 var gallery= document.getElementById("rd_gallery");
	 var o = document.getElementById("rd_display_area");
	 var img0 = document.getElementById("rd_img0");
	 var img1 = document.getElementById("rd_img1");
	 var img2 = document.getElementById("rd_img2");
	 var img3 = document.getElementById("rd_img3");
	 var img4 = document.getElementById("rd_img4");
	 imgViewArray[0] = img0;
	 imgViewArray[1] = img1;
	 imgViewArray[2] = img2;
	 imgViewArray[3] = img3;
	 imgViewArray[4] = img4;
	 //获取显示区域的高度，设置圆点，文字，及左右按键的位置
	 var viewHeight = img0.offsetHeight;
	 combination.style.height = viewHeight+"px";
	 
	 //设置左右按钮的位置
	 var buttonLeft = document.getElementById("rd_button_left");
	 var buttonRight = document.getElementById("rd_button_right");
	 
	
	 
	 buttonLeft.style.top = (viewHeight-parseFloat(buttonLeft.offsetHeight))/2+"px";
	 buttonRight.style.top = (viewHeight-parseFloat(buttonRight.offsetHeight))/2+"px";	

	 buttonLeft.onclick = function () { 
		 imgViewArray[1].style.zIndex="3";
		 imgViewArray[2].style.zIndex="2";
		 imgViewArray[3].style.zIndex="1";
		 animate(25);
	 }
	 buttonRight.onclick = function () { 
		 imgViewArray[1].style.zIndex="1";
		 imgViewArray[2].style.zIndex="2";
		 imgViewArray[3].style.zIndex="3";
		 animate(-25);
		 
	 }
	 
	
	 
	 var leftImgIndex = imgIndex-1;
	 if(leftImgIndex<0){
		 //当前显示的是第一张，则当前显示的左边显示最后一张
		 leftImgIndex = imgNumber-1;
	 }
	 var leftImgIndex2 = leftImgIndex-1;
	 if(leftImgIndex2<0){
		 //当前显示的是第一张，则当前显示的左边显示最后一张
		 leftImgIndex2 = imgNumber-1;
	 }
	 
	 var midImgIndex = imgIndex;
	 var rightImgIndex = imgIndex+1;
	 if(rightImgIndex>(imgNumber-1)){
		 //当前显示的是最后一张，则右边显示第一张
		 rightImgIndex = 0;
	 }
	 var rightImgIndex2 = rightImgIndex+1;
	 if(rightImgIndex2>(imgNumber-1)){
		 //当前显示的是最后一张，则右边显示第一张
		 rightImgIndex2 = 0;
	 }
	 
	 imgViewArray[0] .src="../../images/"+imgArray[leftImgIndex2];
	 imgViewArray[1] .src="../../images/"+imgArray[leftImgIndex];
	 imgViewArray[2] .src="../../images/"+imgArray[midImgIndex];
	 imgViewArray[3] .src="../../images/"+imgArray[rightImgIndex];
	 imgViewArray[4] .src="../../images/"+imgArray[rightImgIndex2];
	 
	 var oneWidth =  o.clientWidth||o.offsetWidth;
	 imgViewArray[0].style.left="-25%";
	 imgViewArray[1].style.left="0%";
	 imgViewArray[2].style.left="25%";
	 imgViewArray[3].style.left="50%";
	 imgViewArray[4].style.left="75%";
	 
	 
	 imgViewArray[0].style.zIndex="1";
	 imgViewArray[1].style.zIndex="2";
	 imgViewArray[2].style.zIndex="3";
	 imgViewArray[3].style.zIndex="2";
	 imgViewArray[4].style.zIndex="1";

	 
	 imgViewArray[0].style.transform = "scale(1)";
	 imgViewArray[1].style.transform = "scale(1 )";
	 imgViewArray[2].style.transform = "scale(1.4)";
	 imgViewArray[3].style.transform = "scale(1)";
	 imgViewArray[4].style.transform = "scale(1)";
	 
	 imgViewArray[0].style.MozTransform = "scale(1)";
	 imgViewArray[1].style.MozTransform = "scale(1 )";
	 imgViewArray[2].style.MozTransform = "scale(1.4)";
	 imgViewArray[3].style.MozTransform = "scale(1)";
	 imgViewArray[4].style.MozTransform = "scale(1)";
	 
	 imgViewArray[0].style.WebkitTransform = "scale(1)";
	 imgViewArray[1].style.WebkitTransform = "scale(1 )";
	 imgViewArray[2].style.WebkitTransform = "scale(1.4)";
	 imgViewArray[3].style.WebkitTransform = "scale(1)";
	 imgViewArray[4].style.WebkitTransform = "scale(1)";
//	 
	 imgViewArray[0].style.opacity = "0.6";
	 imgViewArray[1].style.opacity = "0.8";
	 imgViewArray[2].style.opacity = "1";
	 imgViewArray[3].style.opacity = "0.8";
	 imgViewArray[4].style.opacity = "0.6";
	 
	
	 //每次移动间隔
	 var interval=10;
	 //总时间
	 var times = 400;
	 //每次缩放值
	 var scaleFactor = 0.4/(400/10);
	 //每次透明度值
	 var opacityFactor = 0.2/(400/10);
	 
	 //移动动画    width左移或右移量-50 或50
	 function animate(width){
//		 alert("animate"+width);
		 if(!isRdAnimate){
			 isRdAnimate = true;
			 //每次移动距离
			 var speed=width/(times/interval);
			 //剩余需要移动的量
			 var offset = width;
			 
			 var offTimes = 1;
			 
			 go();
			 function go(){
				 if(offset!=0){
					 if(Math.abs(offset -speed)<Math.abs(speed)){
						 //最后一次移动
						 speed = offset;
					 }else{
						 speed=width/(times/interval); 
					 }
					 offTimes++;
					 imgViewArray[0].style.left=parseFloat(imgViewArray[0].style.left)+speed+"%";//每次位移的值
					 imgViewArray[1].style.left=parseFloat(imgViewArray[1].style.left)+speed+"%";//每次位移的值
					 imgViewArray[2].style.left=parseFloat(imgViewArray[2].style.left)+speed+"%";//每次位移的值
					 imgViewArray[3].style.left=parseFloat(imgViewArray[3].style.left)+speed+"%";//每次位移的值
					 imgViewArray[4].style.left=parseFloat(imgViewArray[4].style.left)+speed+"%";//每次位移的值
					 
					 if(width>0){
						 //右移
						 imgViewArray[1].style.transform = "scale("+(1.0+scaleFactor*offTimes)+")";
						 imgViewArray[2].style.transform = "scale("+(1.4-scaleFactor*offTimes)+")";
						 imgViewArray[1].style.MozTransform = "scale("+(1.0+scaleFactor*offTimes)+")";
						 imgViewArray[2].style.MozTransform = "scale("+(1.4-scaleFactor*offTimes)+")";
						 imgViewArray[1].style.WebkitTransform = "scale("+(1.0+scaleFactor*offTimes)+")";
						 imgViewArray[2].style.WebkitTransform = "scale("+(1.4-scaleFactor*offTimes)+")";
						 imgViewArray[1].style.opacity = ""+(0.8+opacityFactor*offTimes)+"";
						 imgViewArray[2].style.opacity = ""+( 1+opacityFactor*offTimes)+"";
						 
					 }else{
						//左移
						 imgViewArray[2].style.transform = "scale("+(1.4-scaleFactor*offTimes)+")";
						 imgViewArray[3].style.transform = "scale("+(1.0+scaleFactor*offTimes)+")";
						 imgViewArray[2].style.MozTransform = "scale("+(1.4-scaleFactor*offTimes)+")";
						 imgViewArray[3].style.MozTransform = "scale("+(1.0+scaleFactor*offTimes)+")";
						 imgViewArray[2].style.WebkitTransform = "scale("+(1.4-scaleFactor*offTimes)+")";
						 imgViewArray[3].style.WebkitTransform = "scale("+(1.0+scaleFactor*offTimes)+")";
						 imgViewArray[2].style.opacity =  ""+(1+opacityFactor*offTimes)+"";
						 imgViewArray[3].style.opacity = ""+(0.8+opacityFactor*offTimes)+"";
						 
					 }
					 
					
					 offset = offset -speed; 
					 setTimeout(go,interval);
				 }else{					 
					 //动画结束
				
					 if(width>0){
						 //右移
						 imgIndex--;
						 if(imgIndex<0){
							 imgIndex = imgNumber-1;
						 }
						 
						 var f = imgViewArray[4];
						 imgViewArray[4] = imgViewArray[3];
						 imgViewArray[3] = imgViewArray[2];
						 imgViewArray[2] = imgViewArray[1];
						 imgViewArray[1] = imgViewArray[0];
						 imgViewArray[0] = f;
	
					 }else{
						 //左移
						 imgIndex++;
						 if(imgIndex==imgNumber){
							 imgIndex = 0;
						 }
						 var f = imgViewArray[0];
						 imgViewArray[0] = imgViewArray[1];
						 imgViewArray[1] = imgViewArray[2];
						 imgViewArray[2] = imgViewArray[3];
						 imgViewArray[3] = imgViewArray[4];
						 imgViewArray[4] = f;
				
						
					 }
					 imgViewArray[0].style.left="-25%";
					 imgViewArray[1].style.left="0%";
					 imgViewArray[2].style.left="25%";
					 imgViewArray[3].style.left="50%";
					 imgViewArray[4].style.left="75%";					 
					 
					 imgViewArray[0].style.zIndex="1";
					 imgViewArray[1].style.zIndex="2";
					 imgViewArray[2].style.zIndex="3";
					 imgViewArray[3].style.zIndex="2";
					 imgViewArray[4].style.zIndex="1";

					 
					 imgViewArray[0].style.transform = "scale(1)";
					 imgViewArray[1].style.transform = "scale(1 )";
					 imgViewArray[2].style.transform = "scale(1.4)";
					 imgViewArray[3].style.transform = "scale(1)";
					 imgViewArray[4].style.transform = "scale(1)";
					 
					 imgViewArray[0].style.MozTransform = "scale(1)";
					 imgViewArray[1].style.MozTransform = "scale(1 )";
					 imgViewArray[2].style.MozTransform = "scale(1.4)";
					 imgViewArray[3].style.MozTransform = "scale(1)";
					 imgViewArray[4].style.MozTransform = "scale(1)";
					 
					 imgViewArray[0].style.WebkitTransform = "scale(1)";
					 imgViewArray[1].style.WebkitTransform = "scale(1 )";
					 imgViewArray[2].style.WebkitTransform = "scale(1.4)";
					 imgViewArray[3].style.WebkitTransform = "scale(1)";
					 imgViewArray[4].style.WebkitTransform = "scale(1)";
					 
					 imgViewArray[0].style.opacity = "0.6";
					 imgViewArray[1].style.opacity = "0.8";
					 imgViewArray[2].style.opacity = "1";
					 imgViewArray[3].style.opacity = "0.8";
					 imgViewArray[4].style.opacity = "0.6";
					 
					  leftImgIndex = imgIndex-1;
					 if(leftImgIndex<0){
						 //当前显示的是第一张，则当前显示的左边显示最后一张
						 leftImgIndex = imgNumber-1;
					 }
					  leftImgIndex2 = leftImgIndex-1;
					 if(leftImgIndex2<0){
						 //当前显示的是第一张，则当前显示的左边显示最后一张
						 leftImgIndex2 = imgNumber-1;
					 }
					 
					  midImgIndex = imgIndex;
					  rightImgIndex = imgIndex+1;
					 if(rightImgIndex>(imgNumber-1)){
						 //当前显示的是最后一张，则右边显示第一张
						 rightImgIndex = 0;
					 }
					  rightImgIndex2 = rightImgIndex+1;
					 if(rightImgIndex2>(imgNumber-1)){
						 //当前显示的是最后一张，则右边显示第一张
						 rightImgIndex2 = 0;
					 }
					 imgViewArray[0] .src="../../images/"+imgArray[leftImgIndex2];
					 imgViewArray[1] .src="../../images/"+imgArray[leftImgIndex];
					 //imgViewArray[2] .src="../../images/"+imgArray[midImgIndex];
					 imgViewArray[3] .src="../../images/"+imgArray[rightImgIndex];
					 imgViewArray[4] .src="../../images/"+imgArray[rightImgIndex2];
					 
					 
					 isRdAnimate = false;
			
				  }
			 }
		 }
		 
	 }


	 $(window).resize(function(){ 
		  var wHeight = $(window).height();
		  var wWidth = $(window).width();
		  //获取显示区域的高度，设置圆点，文字，及左右按键的位置
		var viewHeight = img0.offsetHeight;
		 buttonLeft.style.top = (viewHeight-parseFloat(buttonLeft.offsetHeight))/2+"px";
		 buttonRight.style.top = (viewHeight-parseFloat(buttonRight.offsetHeight))/2+"px";
		 combination.style.height = viewHeight+"px";
		})

 }
 

 

 
 
 