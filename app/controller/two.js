'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
  await this.ctx.render("two.html");
  }
  async three(){
  await this.ctx.render("three.html")
  }
  async four(){
    await this.ctx.render("four.html")
  }
}

module.exports = HomeController;