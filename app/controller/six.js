'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
  await ctx.render("six.html");
  }
  async return(){
    const { ctx } = this;
    await ctx.render("five.html");
  }
}

module.exports = HomeController;