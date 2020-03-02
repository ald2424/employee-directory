 let arr = ["1","2","3","something","something else"];

 let x = "3";

 for(var i = 0; i < arr.length; i++){
     switch(x){
         case arr[i]:
             console.log(arr[i]);
             break;
     }
 }