
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TestFirstEntitySchema = new Schema({
   TestField1: String,
   TestField2: Boolean
})

const TestFirstEntityModel = mongoose.model('TestFirstEntity', TestFirstEntitySchema, 'TestFirstEntity');
export default TestFirstEntityModel;
