import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class TestFirstEntityController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/TestFirstEntity/get/search', this.GpSearch);
this.router.delete('/TestFirstEntity/:id', this.GpDelete);
this.router.post('/TestFirstEntity', this.GpCreate);
this.router.get('/TestFirstEntity/:id', this.GpGetNounById);
    }

public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into TestFirstEntityController.ts: GpSearch');
        new ApiAdaptar().get(Constant.TESTFEATUREURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from TestFirstEntityController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into TestFirstEntityController.ts: GpDelete');
        new ApiAdaptar().delete(Constant.TESTFEATUREURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from TestFirstEntityController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into TestFirstEntityController.ts: GpCreate');
        new ApiAdaptar().post(Constant.TESTFEATUREURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from TestFirstEntityController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into TestFirstEntityController.ts: GpGetNounById');
        new ApiAdaptar().get(Constant.TESTFEATUREURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from TestFirstEntityController.ts: GpGetNounById');
        }).catch(err => {
            res.send(err);
        });
    }




}
