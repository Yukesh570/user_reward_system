import express from 'express'
import { userRoute } from './userRoute';
// import { transactionLogRoute } from './transactionLogRoute';
// import { rewardLogRoute } from './rewardLogRoute';
// import { rewardRoute } from './rewardRoute';

const router= express.Router();

// router.get('reward',rewardRoute())
// router.get('rewardLog',rewardLogRoute())
// router.get('transactionLog',transactionLogRoute())
router.use('/user',userRoute())


export{
    router
}