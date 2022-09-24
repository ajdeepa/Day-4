var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
   // console.log(result);
    
   for(var i=0;i<result.length;i++){ 
        console.log(result[i].flag);
        //console.log(result[0].name);
       // console.log("SI No" + "/" + "Country name" + "/"+ "region" + "/" + "subregion" + "/" + "population")
        //console.log(+[i]+1,result[i].name + "/"+result[i].region + "/" + result[i].subregion+ "/" + result[i].population);
}}