"use strict";

const output = {
    home:(req,res) =>{
        res.render("home/index");
    },
    login:(req,res) => {
        res.render("home/login");

    },
};

const user ={
    id:['김팅장','김성훈'],
    pwd:['1234','12345'],
}

const process = {
    login:(req,res) => {
       const id = req.body.id,
          pwd = req.body.pwd;
      if(user.id.includes(id)){
          const idx =user.id.indexOf(id);
          if(user.pwd[idx] === pwd) {
              return res.json({
                  success:true,
              });
          }
      }

      return  res.json({
          success:false,
          msg:"로그인에 실패하셨습니다",
      })
    }
}


module.exports ={output,process};