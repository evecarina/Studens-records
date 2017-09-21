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
  configuration:function(){

    let name= prompt("Please enter your name");
    let TechPoints =prompt("Please enter your TechPoints");
    TechPoints=parseInt (TechPoints);
    let LifePoints =prompt("Please enter your LifePoints");
    LifePoints=parseInt (LifePoints);
    let s= new app.data(name,TechPoints,LifePoints,'activite');
    app.arr_students.push(s);

    app.show(app.arr_students[app.arr_students.length-1]);
  },

  show:function(a){
    if(a){
    		$("#data").empty();
    		$("#data").append(`<p>${a.name}</p>
          <p>TechPoints: ${a.TechPoints}%</p>
          <p>LifePoints: ${a.LifePoints}%</p>
          <p>status: ${a.status}</p></div>`);
    	}

  },
  prints:function(students){
    students.map(e=>{
      $("#data").empty();
      $('#data1').append(`<p>${e.name}</p>
        <p>TechPoints: ${e.TechPoints}%</p>
        <p>LifePoints: ${e.LifePoints}%</p>
        <p>status: ${e.status}</p></div>`);
    })
  },
  update:function(){
    $("#data1").empty();
    let update=app.arr_students.filter(function (c) {
    return c.TechPoints >70
  })
  app.prints(update);
},
  run:function(){
    $("#data1").empty();
    let run=app.arr_students.filter(function (c) {
    return c.TechPoints >70
  })
  app.prints(run);
},
  clik:function(){
    $('#btn_add').click(app.configuration);
    $('#btn_print').click(()=>app.prints(app.arr_students));
    $('#btn_update').click(app.update);
    $('#btn_run').click(app.run);
  }
}
$(document).ready(app.init );
console.log(app.arr_students);
