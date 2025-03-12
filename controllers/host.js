const Home=require('../models/home');
exports.getHome=(req,res,next)=>{
    Home.Fatchall((cardata)=>{
        return res.render("host/host-home-list",{Vehicle_Added:cardata});
    })
    
}
exports.getCarUpdate=(req,res,next)=>{
    const Carid=req.params.carid;
    // console.log(Carid);
    const editing=req.query.editing==='true';
    // console.log(editing);
    Home.FindById(Carid,(findcar)=>{
        // console.log(findcar);
        return res.render("host/Add_Vehicle",{findcar:findcar,editing});
    })
    
}