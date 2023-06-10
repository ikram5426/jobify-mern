import express from 'express'
const router=express.Router()

import {createJob,updateJob,deleteJob,getAllJobs,showStats} from '../controller/jobsController.js'

router.route('/').post(createJob).get(getAllJobs)
router.route('/state').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router