
$( function(){

    var $prev=$("#qiche>img:first-child");
    var $next=$("#qiche>img:last-child");
    var moved=0,LIWIDTH=320;
    var $ul=$prev.next().children();
    $next.click(function(){
        var $next=$(this);
        if(!$next.is(".disabled")){
            moved++;
            $ul.css("marginLeft",-LIWIDTH*moved)
            $prev.removeClass("disabled");
            if($ul.children().length-3==moved){
                $next.addClass("disabled");
            }
        }
    })
    $prev.click(function(){
        var $prev=$(this);
        if(!$prev.is(".disabled")){
            moved--;
            $ul.css("marginLeft",-LIWIDTH*moved);
            $next.removeClass("disabled");
            if( moved==0){
                $prev.addClass("disabled");
            }
        }
    })
})


  new Vue({
    el:"#lunbotu>div",
    data:{ 
      res:[
        {img:""},
        {img:""},
        {img:""},
        {img:""},
        {img:""},
        {img:""}
      ]
    },
    created(){
      (async function(self){
        var res=await axios.get(
          "http://localhost:3000/index/index"
        );
        self.res=res.data;
      })(this)
    }

  })
    

