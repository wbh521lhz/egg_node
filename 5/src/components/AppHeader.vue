<template>
    <div id="app_header">
        <div class="nav_01">
            <img src="./images/nav.gif" alt="">
        </div>
        <div class="nav_02">
            <span class="enroll">添加保险箱</span>
        </div>
        <div class="clear"></div>
    </div>
</template>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .clear{
        clear: both;
    }
    #app_header{
        width: 7.5rem;
        height: 1.28rem;
        margin: 0 auto;
    }
    .nav_01{
        width: 7.5rem;
        height: 0.4rem;
    }
    .nav_01 img{
        width: 7.5rem;
        height: 0.39rem;
        float: left;
    }
    .nav_02{
        width: 7.50rem;
        height: 0.88rem;
        background-color: black;
        float: left;
    }
    .enroll{
        color: aliceblue;
        font-size: 0.3rem;
        margin-left: 3rem;
        padding-top: 0.26rem;
        float: left;
    }
</style>
