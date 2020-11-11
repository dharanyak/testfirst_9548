import { Request, Response } from 'express';
import { TestFirstEntityService } from '../service/TestFirstEntityService';
import { CustomLogger } from '../config/Logger'
let TestFirstEntity = new TestFirstEntityService();

export class TestFirstEntityController {
    
    constructor() { }
    
    public GpSearch(req: Request, res: Response) {
TestFirstEntity.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into TestFirstEntityController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from TestFirstEntityController.ts: GpSearch');
    })}
public GpDelete(req: Request, res: Response) {
TestFirstEntity.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into TestFirstEntityController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from TestFirstEntityController.ts: GpDelete');
    })}
public GpCreate(req: Request, res: Response) {
TestFirstEntity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into TestFirstEntityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from TestFirstEntityController.ts: GpCreate');
    })}
public GpGetNounById(req: Request, res: Response) {
TestFirstEntity.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into TestFirstEntityController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from TestFirstEntityController.ts: GpGetNounById');
    })}


}