
var app = new Vue({
  el: '#app',
  data: {
    message: 'Vue JS',
    pros: 'The Progressive JavaScript Framework : Approachable, Versatile, Performant'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el:'#app-3',
  data:{
    seen: true,
    message: 'HTML5'
  }
})

var todos = [
  { text: 'Learn JavaScript'},
  {text : 'learn Vue'},
  { text: 'Use Bootstrap'}
];


var app4 = new Vue({
  el: '#app-4',
  data : {
    todos,
    message: 'ToDO'
  }


})
