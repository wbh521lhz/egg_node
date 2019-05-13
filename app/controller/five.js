'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async login() {
    const username = this.ctx.request.body.username;
    const password = this.ctx.request.body.password;
    if (username === "123" && password === "456") {
        await this.ctx.redirect("/five")
    } else {
        await this.ctx.redirect("/fail")
    }
}

async fail() {
    await this.ctx.render("fail.html")
}
async success() {
    await this.ctx.render("five.html")
}
}

module.exports = HomeController;