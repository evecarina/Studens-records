const app={
  arr_students:[ ],
  iniciar:function(){
    app.ejecutar();
  },
  ejecutar:function(){
   $('#btn_add').app.añadir();
 },
 añadir:function(){
   let name= prompt("Please enter your name");
   let TechPoints =prompt("Please enter your TechPoints");
   TechPoints=parseInt (TechPoints);
   let LifePoints =prompt("Please enter your LifePoints");
   LifePoints=parseInt (LifePoints);
  //  let s= new app.data(name,TechPoints,LifePoints,'activite');
   arr_students.push(s);
   $('#data').empty();
    for(var i=0; i<arr_students.length;i++){
      $('#data').append('<p>Name: '+arr_students[i].name+'</p>'+'<p>TechPoints: '+arr_students[i].TechPoints+'</p>'+
       '<p>LifePoints: '+arr_students[i].LifePoints+'</p>'+'<p>status: '+arr_students[i].status+'</p>');
     }
 }
}
$(document).ready( app.iniciar );
