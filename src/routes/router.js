import express from 'express'
import  {createTicket, getTickets, nextTicket,clearList}  from '../controller/TicketController.js';

const router = express.Router();

router.get('/create',createTicket)

router.get('/next',nextTicket)
router.get('/clear',clearList)
router.get('',getTickets)

export default router;