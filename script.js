function foo(){
   var h4 = document.createElement('h4');
   h4.innerHTML="DOM Manipulation"
   document.body.append(h4)
   var form = document.createElement('form');
   var table = document.createElement('table');
   var thead = document.createElement('thead');
   var tbody = document.createElement('tbody');
   tbody.setAttribute("id","tbody");
   var tr = document.createElement('tr');
   var th1 = document.createElement('th');
   th1.innerHTML= "ID";
   var th2 = document.createElement('th');
   th2.innerHTML="Name";
   var th3 = document.createElement('th');
   th3.innerHTML="Email"

tr.append(th1,th2,th3);
thead.append(tr);
   var req = new XMLHttpRequest();
   req.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true)
   req.send();
   req.onload=function(){
      
      var data = JSON.parse(this.response);
    
   function print(val){
      
      
      if(val==="Last"){
         window.onload=print(10);
      }
      
      if(val==="First"){
         window.onload=print(1);
      }
      
      
      
      
      for(var i = ((val-1)*10);i<val*10;i++){
         
         
         var tr = document.createElement('tr');
         var td1 = document.createElement('td');

         td1.innerHTML= data[i].id;
         var td2 = document.createElement('td');
         td2.innerHTML= data[i].name;
         var td3 = document.createElement('td');
         td3.innerHTML= data[i].email;
         td3.setAttribute("id","td3");
         
         tr.append(td1,td2,td3);
         tbody.appendChild(tr);
         
         
      }
      
    
      
   }
   
   table.append(thead,tbody)
   form.append(table);
   document.body.append(form)
   var temp=[];
  for(var i=0;i<10;i++){
      var a= document.createElement('button');
      a.innerHTML=i+1;
     temp.push(a);
     document.body.appendChild(a);
     
  }
  var first= document.createElement('button');
      first.innerHTML="First";
      temp.push(first)
      document.body.appendChild(first);
      var last= document.createElement('button');
      last.innerHTML="Last";
      temp.push(last)
      document.body.appendChild(last);
      
      
  window.onload=print(1);

  temp.forEach(ele=>{
   
    
     ele.onclick= function(){

        
      document.getElementById('tbody').innerHTML="";
      
      
        print(ele.innerHTML);
        
       
     }

  })
  

  
  

 

 
}

}


