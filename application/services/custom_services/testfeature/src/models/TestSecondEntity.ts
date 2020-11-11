
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TestSecondEntitySchema = new Schema({
   TestAttribute1: String,
   TestAttribute2: Date
})

const TestSecondEntityModel = mongoose.model('TestSecondEntity', TestSecondEntitySchema, 'TestSecondEntity');
export default TestSecondEntityModel;
