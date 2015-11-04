'use strict';

import express from 'express';
import controller from './user.controller';
import auth from '../../auth/auth.service';

var router = express.Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);

//  for updating user location on login
router.post('/me/location', auth.isAuthenticated(), controller.updateUserLocation)

module.exports = router;
