export class Response {
	constructor(status:string= '', cid:string = ''){
        this.status = status;
        this.cid = cid;
    }

    status:string;
    cid:string;
}

export class Data {
	constructor(id:number=0, title:string = '', url:string = '', thumbnailUrl:string = ''){
        this.id = id;
        this.title = title;
        this.url = url;
        this.thumbnailUrl = thumbnailUrl;
    }

    id:number;
    title:string;
    url:string;
    thumbnailUrl:string;
}