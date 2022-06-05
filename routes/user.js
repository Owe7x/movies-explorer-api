const userRouter = require('express').Router();
const { userInfoValidation } = require('../middlewares/validation');
const { getUserMe, updateProfileUser } = require('../controllers/user');

userRouter.get('/me', getUserMe);
userRouter.patch('/me', userInfoValidation, updateProfileUser);

module.exports = userRouter;
