'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.z3);
  router.get('/z2', controller.home.index);
  router.get('/z3', controller.home.z2);
  router.get('/z4', controller.home.z3);
  router.get('/z5', controller.home.z4);
  // router.get('/landing', controller.landing.landing);
  // router.get('/registered', controller.registered.registered);
};
