import Car from '../models/Car';
import User from '../models/User';


class CarController{


	async index(req, res){
		const { status } = req.query;

		const cars = await Car.find({ status });

		return res.json(cars)
	}

	async store(req, res){
		const { filename } = req.file;
		const { brand, model, year, price, status } = req.body;
		const { user_id } = req.headers;

		const car = await Car.create({
			user: user_id,
			thumbnail: filename,
			brand,
			model,
			year,
			price,
			status,
		});

		return res.json(car);
	}

	async update(req, res){
		const { filename } = req.file;
		const { car_id } = req.params;
		const { brand, model, year, price, status } = req.body;
		const { user_id } = req.headers; 

		const user = await User.findById(user_id);
		const cars = await Car.findById(car_id);

		if(String(user._id) !== String(cars.user)){
			return res.status(401).json({ error: 'Não autorizado.' })
		}

		await Car.updateOne({ _id: car_id }, {
			user: user_id,
			thumbnail: filename,
			brand,
			model,
			year,
			price,
			status,
		});

		return res.send();
	}

	async destroy(req, res){
		const { car_id } = req.body;
		const { user_id } = req.headers;

		const user = await User.findById(user_id);
		const cars = await Car.findById(car_id);

		if(String(user._id) !== String(car.user)){
			return res.status(401).json({ error: 'Não autorizado.' })
		}

		await Car.findByIdAndDelete({ _id: car_id });

		return res.json({message: "Excluida com sucesso!"});
	}
}

export default new CarController();