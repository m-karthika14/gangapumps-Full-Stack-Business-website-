const express = require('express');
const router = express.Router();
const {
  addLead,
  getLeads,
  deleteLead
} = require('../controllers/leadController');

router.post('/', addLead);           // POST /api/leads
router.get('/', getLeads);           // GET /api/leads
router.delete('/:id', deleteLead);   // DELETE /api/leads/:id

module.exports = router;
