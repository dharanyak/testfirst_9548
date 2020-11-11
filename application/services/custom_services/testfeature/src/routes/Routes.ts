import { Request, Response, NextFunction } from "express";
import { TestFirstEntityController } from '../controller/TestFirstEntityController';


export class Routes {
    private TestFirstEntity: TestFirstEntityController = new TestFirstEntityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/TestFirstEntity/get/search').get(this.TestFirstEntity.GpSearch);
app.route('/TestFirstEntity/:id').delete(this.TestFirstEntity.GpDelete);
app.route('/TestFirstEntity').post(this.TestFirstEntity.GpCreate);
app.route('/TestFirstEntity/:id').get(this.TestFirstEntity.GpGetNounById);
     }

}