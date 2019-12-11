<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<link href="rdtest.css" rel="stylesheet">
<script type="text/javascript" src="../../jquery/jquery-3.3.1.js"></script>
<title>rd</title>
</head>
<!-- style="overflow-x:hidden " -->
<body  >

<!-- 整个轮播控件，图片加小圆点加左右键加文字 -->
<div class = "rd_wheel_combination" id="rd_wheel_combination">  
    <!--     显示区域 -->
 	<div class = "rd_display_area" id="rd_display_area"> 
        <!--  	三张img水平画廊,宽度应该为三张图片的宽度 -->
 	     <div class = "rd_gallery" id= "rd_gallery"  >
 	      	<img class = "rd_gallery_img" style="left: 0px;" id= "rd_img0" src="../../images/bg1.jpg"/>
 	 		<img class = "rd_gallery_img" style="left: 0px;" id= "rd_img1" src="../../images/bg2.jpg"/>
 	 		<img class = "rd_gallery_img" style="left: 0px;"id= "rd_img2" src="../../images/bg3.jpg"/>
 	 			<img class = "rd_gallery_img" style="left: 0px;" id= "rd_img3" src="../../images/bg4.jpg"/>
 	 		<img class = "rd_gallery_img" style="left: 0px;"id= "rd_img4" src="../../images/bg5.jpg"/>
 	     </div>
 	</div>
 	<!--     显示区域end -->
 	
 	 	<button class="rd_button_left_right" onclick="leftClick()"  id="rd_button_left" style="left:20px"><img class = "rd_button_left_right_img" src="../../images/left_img.png"/></button>
 	    <button class="rd_button_left_right" onclick="rightClick()" id="rd_button_right" style="right:20px"><img class = "rd_button_left_right_img" src="../../images/right_img.png"/></button>
 	
</div>
<!-- 整个轮播控件end -->



</body>

<script type="text/javascript" src="rdtest.js"></script>

</html>
