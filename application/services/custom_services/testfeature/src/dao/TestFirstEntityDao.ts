import * as mongoose from 'mongoose';
import TestFirstEntityModel from '../models/TestFirstEntity';
import { CustomLogger } from '../config/Logger'


export class TestFirstEntityDao {
    private TestFirstEntity = TestFirstEntityModel;
    constructor() { }
public GpSearch(TestFirstEntityData, callback){
new CustomLogger().showLogger('info', 'Enter into TestFirstEntityDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(TestFirstEntityData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.TestFirstEntity.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from TestFirstEntityDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(TestFirstEntityId, callback){
new CustomLogger().showLogger('info', 'Enter into TestFirstEntityDao.ts: GpDelete')

this.TestFirstEntity.findByIdAndRemove(TestFirstEntityId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from TestFirstEntityDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(TestFirstEntityData, callback){
new CustomLogger().showLogger('info', 'Enter into TestFirstEntityDao.ts: GpCreate')
let temp = new TestFirstEntityModel(TestFirstEntityData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from TestFirstEntityDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetNounById(TestFirstEntityId, callback){
new CustomLogger().showLogger('info', 'Enter into TestFirstEntityDao.ts: GpGetNounById')

this.TestFirstEntity.findById(TestFirstEntityId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from TestFirstEntityDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}


}