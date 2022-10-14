# Task

## Operations

### taskcreated

```http
POST /createtask
```

taskcreated

### deletEtask

```http
DELETE /deletetask/{questionid}
```

deletetask

### gettask

```http
GET /gettask
```

Gettask

### updatetask

```http
PUT /Updatetask/{questionid}
```

Updatetask

## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
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
```
