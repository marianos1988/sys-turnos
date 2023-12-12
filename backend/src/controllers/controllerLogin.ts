import utils from "./utils";

const login = async (req: any 
,res: any) => {

const user = utils.validarLogin(req.body);


console.log(user);
res.send(user);
}

export default {
    login
}