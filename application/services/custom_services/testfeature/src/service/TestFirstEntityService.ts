import { Request, Response } from 'express';
import {TestFirstEntityDao} from '../dao/TestFirstEntityDao';
import { CustomLogger } from '../config/Logger'
let TestFirstEntity = new TestFirstEntityDao();

export class TestFirstEntityService {
    
    constructor() { }
    
    public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into TestFirstEntityService.ts: GpSearch')
     const  TestFirstEntityData = req.query;
     TestFirstEntity.GpSearch(TestFirstEntityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from TestFirstEntityService.ts: GpSearch')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into TestFirstEntityService.ts: GpDelete')
     const  TestFirstEntityId = req.params.id;
     TestFirstEntity.GpDelete(TestFirstEntityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from TestFirstEntityService.ts: GpDelete')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into TestFirstEntityService.ts: GpCreate')
     const  TestFirstEntityData = req.body;
     TestFirstEntity.GpCreate(TestFirstEntityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from TestFirstEntityService.ts: GpCreate')
         callback(response);
         });
    }
public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into TestFirstEntityService.ts: GpGetNounById')
     const  TestFirstEntityId = req.params.id;
     TestFirstEntity.GpGetNounById(TestFirstEntityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from TestFirstEntityService.ts: GpGetNounById')
         callback(response);
         });
    }


}