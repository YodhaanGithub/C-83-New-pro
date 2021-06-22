
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var width_of_screen = screen.width;

    var height= screen.height - 90;
    var width= screen.width - 300;

    if(width_of_screen < 992){
      document.getElementById("myCanvas").width =width;
      document.getElementById("myCanvas").height= height;
      document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
       last_postiton_of_x = e.touches[0].clientX - canvas.offsetLeft;
       last_postion_of_y= e.touches[0].clientY - canvas.offsetTop;
       console.log("my_touchstart");
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.clientY - canvas.offsetTop;

      
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

