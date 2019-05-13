'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
  await ctx.render("fourteen.html");
  }
  async return1(){
    const { ctx } = this;
    await ctx.render("seven.html");
  }
}

module.exports = HomeController;