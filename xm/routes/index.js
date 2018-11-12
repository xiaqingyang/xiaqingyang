const express=require("express");
const router=express.Router();
const pool=require("../pool");

//index/
router.get("/index",(req,res)=>{
  var sql=`SELECT img FROM qiche_index_carousel`;
  pool.query(sql,[],(err,result)=>{
    if(err)
      console.log(err);
    res.send(result);
  })
})

module.exports=router;