import express from 'express'
import  {createTicket, getTickets, nextTicket,clearList}  from '../controller/TicketController.js';
import { setTicket } from '../services/TicketService.js';

const router = express.Router();

router.get('/create',createTicket)

router.get('/next',nextTicket)
router.get('/clear',clearList)
router.get('',getTickets)
router.post('', setTicket)


export default router;