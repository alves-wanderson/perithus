import Rent from '../models/Rent';
import User from '../models/User';
import Car from '../models/Car';

class RentController{
	async store(req, res){	
		const { user_id } = req.headers;
		const { car_id } = req.params;
		const { date } = req.body;

		const car = await Car.findById(car_id);
		if(!car){
			return res.status(400).json({ error: 'Esse carro não existe!' });
		}

		if(car.status !== true){
			return res.status(400).json({ error: 'Carro indisponivel!'});
		}

		const user = await User.findById(user_id);
		if(String(user._id) === String(car.user)){
			return res.status(401).json({ error: 'Aluguel não permitido!'});
		}


		const rent = await Rent.create({
			user: user_id,
			car: car_id,
			date,
		});

		await rent.populate('car').populate('user').execPopulate();

		return res.json(rent)
	}

}

export default new RentController();