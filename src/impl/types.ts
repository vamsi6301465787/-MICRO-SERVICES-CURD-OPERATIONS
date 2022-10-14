import { taskApiImpl } from "./user/types";
import { ApiImplementation } from "../../dict/types";



export class serviceApiimpl implements ApiImplementation {
    task:taskApiImpl=new taskApiImpl
}
