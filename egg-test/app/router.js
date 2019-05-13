'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.one.index);
  router.get('/two', controller.two.index);
  router.get('/registered-users', controller.two.three);
  router.get('/forgot-password', controller.two.four);
  router.get('/return2',controller.four.index);


  router.post('/landing', controller.five.login);
  router.get('/fail', controller.five.fail);
  router.get('/five', controller.five.success);


  router.get('/add',controller.six.index)
  router.get('/return3',controller.six.return);
  router.get('/add-safe',controller.seven.index)
  router.get('/add1',controller.seven.add1)
  router.get('/add2',controller.fourteen.index)
  router.get('/return4',controller.fourteen.return1);
  router.get('/jump',controller.seven.jump)
  router.get('/',controller.moban.nine)
  router.get('/ten',controller.moban.ten)
  router.get('/eleven',controller.moban.eleven)
  router.get('/twelve',controller.moban.twelve)
  router.get('/return5',controller.moban.seven)
};
