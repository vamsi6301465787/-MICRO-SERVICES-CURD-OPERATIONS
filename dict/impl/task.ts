import * as t from '../api/task/types'
import { Api } from '../models'

async function taskcreated(request: Api.BODYDATA | undefined): Promise<t.TaskcreatedResponse> {
	throw 'Unimplemented'
}

async function deletEtask(questionid: string): Promise<t.DeletEtaskResponse> {
	throw 'Unimplemented'
}

async function gettask(): Promise<t.GettaskResponse> {
	throw 'Unimplemented'
}

async function updatetask(questionid: string, request: Api.BODYDATA | undefined): Promise<t.UpdatetaskResponse> {
	throw 'Unimplemented'
}


const api: t.TaskApi = {
	taskcreated,
	deletEtask,
	gettask,
	updatetask,
}

export default api
