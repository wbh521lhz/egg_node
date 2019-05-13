<template>
        <div class="header">
            <div class="StatusBar">
                <img src="./images/状态栏_01.jpg" alt="">
            </div>
            <div class="nav">
                <div class="MenuBar">
                    <img class="return" src="./images/Return.png" alt="">
                    <span class="enroll">忘记密码</span>
                </div>
                <div class="clear"></div>
            </div>
        </div>
</template>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        font-family: '黑体';
    }
    .clear{
        clear: both;
    }
    .header{
        width: 7.5rem;
        height: 1.28rem;
        position: absolute;
        left: 0;
        top: 0;
    }
    .StatusBar{
        width: 7.5rem;
        height: 0.39rem;
    }
    .StatusBar img{
        width: 7.5rem;
        height: 0.39rem;
        float: left;
    }
    .nav{
        height: 0.88rem;
        width: 7.5rem;
    }
    .return{
        padding-top: 0.26rem;
        margin-left: 0.29rem;
        float: left;
    }
    .MenuBar{
        width: 7.50rem;
        height: 0.88rem;
        background-color: black;
        float: left;
    }
    .enroll{
        color: aliceblue;
        font-size: 0.3rem;
        margin-left: 2.7rem;
        padding-top: 0.26rem;
        float: left;
    }
</style>