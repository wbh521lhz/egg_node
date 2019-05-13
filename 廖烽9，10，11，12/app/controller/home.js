'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("z1.html",{
            dj1:'../public/img/fase1.png',
            dj2:'../public/img/Opendoor1.png',
            dj3:'../public/img/Callthepolice2.png',
            dj4:'../public/img/Relation1.png',
        })
        
    }
    async z2(){
        const {ctx}=this;
        await ctx.render("z2.html",{
            dj1:'../public/img/fase1.png',
            dj2:'../public/img/Opendoor1.png',
            dj3:'../public/img/Callthepolice1.png',
            dj4:'../public/img/Relation2.png',
        });
    }
    async z3(){
        const {ctx}=this;
        await ctx.render("z3.html",{
            dj1:'../public/img/fase2.png',
            dj2:'../public/img/Opendoor1.png',
            dj3:'../public/img/Callthepolice1.png',
            dj4:'../public/img/Relation1.png',
        })
    }
    async z4(){
        const {ctx}=this;
        await ctx.render("z4.html",{
            dj1:'../public/img/fase1.png',
            dj2:'../public/img/Opendoor2.png',
            dj3:'../public/img/Callthepolice1.png',
            dj4:'../public/img/Relation1.png',
        })
    }
    async z5(){
        const {ctx}=this;
        await ctx.render("z5.html")
    }
}

module.exports = HomeController;