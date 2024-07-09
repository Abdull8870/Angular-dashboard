export interface Ticket{
    title:string;
    request:string;
    id:number;
    status:'open'|'closed';
}