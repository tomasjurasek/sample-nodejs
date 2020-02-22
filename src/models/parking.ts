import mongoose from 'mongoose';
const {Schema} = mongoose;

const parkingSchema = new Schema({
    id: String,
    user: String,
    from: Date,
    to: Date
});

export const Parking = mongoose.model('parking', parkingSchema);