class DefaultResponse<T>{
    status: number;
    message: string;
    data: T;

    constructor(status:number, string:string, data:T){
        this.status = status;
        this.message = string;
        this.data = data;
    }
}


export {DefaultResponse};

