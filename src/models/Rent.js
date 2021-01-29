import { Schema, model } from 'mongoose';

const RentSchema = new Schema({
	date: String,
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	car: {
		type: Schema.Types.ObjectId,
		ref: 'Car'
	}
});

export default model('Rent', RentSchema);
