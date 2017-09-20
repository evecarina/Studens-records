let arr_students=[];
function Data(name,TechPoints,LifePoints,status){
  this.name=name,
  this.TechPoints=TechPoints,
  this.LifePoints=LifePoints,
  this.status=status
  };

$('#btn_add').click(function(){
  let name= prompt("Please enter your name");
  let TechPoints =prompt("Please enter your TechPoints");
  TechPoints=parseInt (TechPoints);
  let LifePoints =prompt("Please enter your LifePoints");
  LifePoints=parseInt (LifePoints);
  let s= new Data(name,TechPoints,LifePoints,'activite');
  arr_students.push(s);
   for(var i=0; i<arr_students.length;i++){
     $('#data').append('<p>Name: '+arr_students[i].name+'</p>');
     $('#data').append('<p>TechPoints: '+arr_students[i].TechPoints+'</p>');
     $('#data').append('<p>LifePoints: '+arr_students[i].LifePoints+'</p>');
     $('#data').append('<p>status: '+arr_students[i].status+'</p>');
   }
});

$('#btn_print').click(function(){
  arr_students.map(function(e){
    $("#data").empty();
    $('#data').append('<p>Name: '+e.name+'</p>');
    $('#data').append('<p>TechPoints: '+e.TechPoints+'</p>');
    $('#data').append('<p>LifePoints: '+e.LifePoints+'</p>');
    $('#data').append('<p>status: '+e.status+'</p>');
  })
});


// filtar
$('#btn_update').click(function(){
  var consulta1 = arr_students.filter(function (c) {
  return c.TechPoints >= 70 
});
console.log(consulta1);
});
