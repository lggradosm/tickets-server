import express from 'express'
import  {createTicket, getTickets, nextTicket,clearList, setTicket}  from '../controller/TicketController.js';

const router = express.Router();

router.get('/create',createTicket)

router.get('/next',nextTicket)
router.get('/clear',clearList)
router.get('',getTickets)
router.post('',setTicket)


export default router;