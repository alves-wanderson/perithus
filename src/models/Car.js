import { Schema, model } from 'mongoose';

const CarSchema = new Schema({
	thumbnail: String,
	brand: String,
	model: String,
	year: Number,
	price: Number,
	status: Boolean,
	user:{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
}, {
	toJSON: {
		virtuals: true
	}
});

CarSchema.virtual('thumbnail_url').get(function(){
	return `http://localhost:3333/files/${this.thumbnail}`;
})

export default model('Car', CarSchema);
