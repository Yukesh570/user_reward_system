import express from 'express'
import { userRoute } from './userRoute';
import { rewardRoute } from './rewardRoute';
// import { rewardLogRoute } from './rewardLogRoute';
// import { transactionLogRoute } from './transactionLogRoute';
import { rewardLogRoute } from './rewardLogRoute';
import { authRoute } from './auth/auth';
// import { rewardRoute } from './rewardRoute';

const router= express.Router();

router.use('/reward',rewardRoute())
router.use('/rewardLog',rewardLogRoute())
// router.get('transactionLog',transactionLogRoute())
router.use('/user',userRoute())
router.use('/auth',authRoute())


export{
    router
}