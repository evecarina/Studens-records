const app={
  arr_students:[],
  data:function(name,TechPoints,LifePoints,status){
    this.name=name,
    this.TechPoints=TechPoints,
    this.LifePoints=LifePoints,
    this.status=status
  },

  init:function(){
    app.clik();
  },
  clik:function(){
    $('#btn_add').click(app.configuration);
    $('#btn_print').click(()=>app.prints(app.arr_students));
    $('#btn_update').click(app.update);
    $('#btn_run').click(app.run);
  },
  configuration:function(){

    let name= prompt("Please enter your name");
    let TechPoints =prompt("Please enter your TechPoints");
    TechPoints=parseInt (TechPoints);
    let LifePoints =prompt("Please enter your LifePoints");
    LifePoints=parseInt (LifePoints);
    let s= new app.data(name,TechPoints,LifePoints,'activite');
    app.arr_students.push(s);
    for(var i=0; i<app.arr_students.length;i++){
      $('#data').empty();
      $('#data').append('<p>Name: '+ app.arr_students[i].name+'</p>'+'<p>TechPoints: '+app.arr_students[i].TechPoints+'</p>'+
       '<p>LifePoints: '+app.arr_students[i].LifePoints+'</p>'+'<p>status: '+app.arr_students[i].status+'</p>');
     }
  },
  prints:function(students){
    alert('ada');
    students.map(e=>{
      $("#data").empty();
      $('#data1').append('<p>Name: '+e.name+'</p>'+'<p>TechPoints: '+e.TechPoints+'</p>'+
       '<p>LifePoints: '+e.LifePoints+'</p>'+'<p>status: '+e.status+'</p>');
    })
  },
  update:function(){
    alert('adas');
    $("#data1").empty();
    let update=app.arr_students.filter(function (c) {
    return c.TechPoints >70
  })
  app.prints(update);
},
  run:function(){
    alert('adas');
    $("#data1").empty();
    let run=app.arr_students.filter(function (c) {
    return c.TechPoints >70
  })
  app.prints(run);
  }
}
$(document).ready(app.init );
console.log(app.arr_students);
