myCanvas = document.getElementById("myCanvas");
ctx = myCanvas.getContext("2d")
width=screen.width;
new_width=screen.width - 70;
new_height=screen.height - 300;

if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";

    myCanvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart(e)
    {
        last_position_of_x = e.touches[0].clientX - myCanvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - myCanvas.offsetTop;
}
myCanvas.addEventListener("touchmove", my_touchmove)
function my_touchmove(e){
    current_pos_touch_x = e.touches[0].clientX - myCanvas.offsetLeft;
    current_pos_touch_y = e.touches[0].clientY - myCanvas.offsetTop;
    console.log(current_pos_touch_x);

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_pos_touch_x, current_pos_touch_y);
    ctx.stroke();
    last_position_of_x = current_pos_touch_x;
    last_position_of_y = current_pos_touch_y;
}
}
var mouseEvent = "";
color = "black";
Width = 2;
var last_pos_of_mouse_X, last_pos_of_mouse_Y; 

myCanvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
mouseEvent="mouseDown";
}
myCanvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_pos_mouse_x = e.clientX - canvas.offsetLeft;
    current_pos_mouse_y = e.clientY - canvas.offsetTop;
    console.log("current position of X ="+current_pos_mouse_x);
    console.log("current position of Y ="+current_pos_mouse_y);

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=Width;
        ctx.moveTo(last_pos_of_mouse_X, last_pos_of_mouse_Y);
        ctx.lineTo(current_pos_mouse_x, current_pos_mouse_y);
        ctx.stroke();
    }
    last_pos_of_mouse_X = current_pos_mouse_x;
    last_pos_of_mouse_Y = current_pos_mouse_y;
}
