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
     $('#data').empty();
     $('#data').append('<p>Name: '+arr_students[i].name+'</p>'+'<p>TechPoints: '+arr_students[i].TechPoints+'</p>'+
      '<p>LifePoints: '+arr_students[i].LifePoints+'</p>'+'<p>status: '+arr_students[i].status+'</p>');
    }
});
$('#btn_print').click(()=>Print(arr_students));

function Print(students){
  students.map(e=>{
    $("#data").empty();
    $("#data1").empty();
    $('#data1').append('<p>Name: '+e.name+'</p>'+'<p>TechPoints: '+e.TechPoints+'</p>'+
     '<p>LifePoints: '+e.LifePoints+'</p>'+'<p>status: '+e.status+'</p>');
  })
}

// filtar
$('#btn_run').click(function(){
  var consulta=arr_students.filter(function (c) {
  return c.TechPoints >70
});
Print(consulta);
console.log(consulta);
});
