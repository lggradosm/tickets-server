import {  createTicket as create, getAllTickets as getAll,nextTicket as next, clear} from "../services/TicketService.js"
  export const createTicket = (req,res) => {
    const response = create(req)
    res.send(response)
  }

  export const getTickets = (req,res)=>{
    const response = getAll()
    res.send(response)
  }

  export const nextTicket = (req,res) =>{
    const response = next();
    res.send(response)
  }

  export const clearList = (req,res) => {
    clear();
  }

