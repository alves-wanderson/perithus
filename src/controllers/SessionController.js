import User from '../models/User';

class SessionController{

	async store(req, res){
		const { email, senha } = req.body;

		let user = await User.findOne({ email, senha })

		if(!user){
			user = await User.create({ email, senha });
		}

		return res.json(user)
	}

}

export default new SessionController();
