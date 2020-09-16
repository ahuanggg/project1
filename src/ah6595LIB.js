(function(){

    let ah6595LIB = {
        getRandomColor(){ //randon color
            // function getByte(){
            //     return 55 + Math.round(Math.random() * 200);
            // }
            const getByte = _ => 55 + Math.round(Math.random() * 200);

            // return "rgba(" + getByte() + "," + getByte() + "," + getByte() + ",.8)";
            return `rgba(${getByte()} , ${getByte()} , ${getByte()} ,.8)`
        },

        getRandomInt(min, max) { //random int
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        drawCircle(ctx,x,y,radius,color){
            ctx.save();
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x,y,radius,0,Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        },

        dtr(degrees){
            return degrees * (Math.PI/180);
        }

        
    };

    if(window){
        window["ah6595LIB"] = ah6595LIB;
    } else {
        throw 'window not defined';
    }

})();