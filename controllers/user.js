const Home=require('../models/home');
exports.getHome=(req,res,next)=>{
    Home.Fatchall((cardata)=>{
        // console.log(cardata);
        return res.render("user/Home",{Vehicle_Added:cardata});
    })
    
}
exports.getContectus=(req,res,next)=>{
    return res.render("user/Contact");
}
exports.getAddVechicals=(req,res,next)=>{
    return res.render("host/Add_Vehicle",{editing:false});
}
exports.postAddVechicals=(req,res,next)=>{
    // console.log(req.body);
    const {vehicle_type, vehicle_color, vehicle_number, rate_per_day, owner_name, owner_contact, owner_address}=req.body;
    const home=new Home(vehicle_type, vehicle_color, vehicle_number, rate_per_day, owner_name, owner_contact, owner_address);
    // console.log(home);
    home.save();
    return res.redirect('/');
}
exports.postUpdateVachicals=(req,res,next)=>{
    // console.log(req.body);
    const {vehicle_type,id, vehicle_color, vehicle_number, rate_per_day, owner_name, owner_contact, owner_address}=req.body;
    const home=new Home(vehicle_type, vehicle_color, vehicle_number, rate_per_day, owner_name, owner_contact, owner_address,id);
    home.save();
    return res.redirect('/home');
}