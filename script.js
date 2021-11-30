var arr=[102,98,29,39,18,289,1,678];
 var largest=[0];
function max (){ 
 //find the largest num;
 for(var i=0;i<arr.length;i++){
   var comp=(arr[i]-largest[0])>0;
      if(comp){
	  largest =[];
	  largest.push(arr[i]);
	  }
 }
 alert("The largest number in the array is: " +largest );
 alert("The  array of numbers are : "+arr)
}
 