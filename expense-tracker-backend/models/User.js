import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Expense' }]
});

export default mongoose.model('User', userSchema);
