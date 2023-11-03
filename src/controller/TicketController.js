import {  createTicket as create, getAllTickets as getAll,nextTicket as next, clear, setTicket as set} from "../services/TicketService.js"
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
    const response = clear();
    res.status(200).send(response)
  }
  
  export const setTicket = (req,res) => {
    
    //const response = set(ticketId)
    const ticketId = req.body.id
    const response = set(ticketId)
    res.status(200).send(response)
  }

