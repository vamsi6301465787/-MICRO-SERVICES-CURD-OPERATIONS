
import { DeletEtaskResponse, GettaskResponse,UpdatetaskResponse, TaskApi, TaskcreatedResponse } from "../../../dict/api/task/types";
import { Api } from "../../../dict/models";
import {collections} from '../../../src/admin/types'


export class taskApiImpl implements TaskApi {
    
    gettask(): Promise<GettaskResponse>  {
        return new Promise<GettaskResponse>((resolve,reject)=>{
            collections.users!.find({}).toArray(function (err: any,result:any){
                if(err) {
                    const response=<GettaskResponse>{
                        status: 400,
                       body:{message: `something went wrong`},
                    }
                    resolve(response)                   
                }
                const response=<GettaskResponse>{
                    status:201,
                    body: result
                }
                resolve(response)    
            })  
        })   
    }

    deletEtask(questionid:string):Promise<DeletEtaskResponse>{
    return new Promise<DeletEtaskResponse>((resolve,reject)=>{
        collections.users!.deleteOne(
            {questionid: questionid},
            function(err: any,result: any){
                if(err){
                    const response=<DeletEtaskResponse>{
                        status:400,
                        body:{message:`someting went wrong`}
                    }
                    resolve(response)
                }
                const response=<DeletEtaskResponse>{
                    status:201,
                    body:{
                        message:`delete User Sucessfully`
                    }
                }
                resolve(response)
            }
        )
        
    })
 }

 updatetask(questionid: string, request: Api.BODYDATA | undefined) : Promise<UpdatetaskResponse>
 {
    return new Promise<UpdatetaskResponse>((resolve,reject)=>{
        collections.users!.updateOne(
            {questionid: questionid},
            {$set:request},
            function(err:any,result: any){
                if(err){
                    const response=<UpdatetaskResponse>{
                        status: 400,
                        body:{message:`Somting Went Wrong`}
                    }
                    resolve(response)
                }
                const response=<UpdatetaskResponse>{
                    status:201,
                    body:{message:`Update User Sucessfully`}
                }
                resolve(response)
               
            }    
        )

    })
 }


 taskcreated(request: Api.BODYDATA | undefined): Promise<TaskcreatedResponse>
 {
    return new Promise<UpdatetaskResponse>((resolve,reject)=>{
        collections.users!.findOne({questionid:request?.questionid},
            function(err:any,result:any){
                if(result){
                    const response=<UpdatetaskResponse>{
                        status:400,
                        body:{message:`User Already Created`}
                    }
                    resolve(response)
                }
                else{
                    collections.users!.insertOne(
                        {questionid:request?.questionid,question:request?.question,topicid:request?.topicid,option1:request?.option1,option2:request?.option2,option3:request?.option3,option4:request?.option4},
                        function(err:any,result:any){
                          if(err){
                            const response=<UpdatetaskResponse>{
                                status:400,
                                body:{message:`Someting Went Wrong`}
                            }
                            resolve(response)
                          }
                          else{
                            const response=<UpdatetaskResponse>{
                                status:201,
                                body:{message:`Create User Sucessfuly`}
                            }
                            resolve(response)
                          }
                            
                        }

                    )
                }
            }
        )
    })
 }
}