<template>
        <div class="APPcontainer">
            <div class="first_txt">
                <span class="txt1">手机</span>
                <span class="txt2">
                    <input class="input_box" type="text" value="请输入手机号码">
                </span>
                <div class="clear"></div>
            </div>
            <div class="second_txt">
                <span class="txt1">验证码</span>
                <span class="txt2">
                    <input type="text" value="请输入验证码" class="input_box2">
                </span>
                <a href=""><span class="getcode">获取验证码</span></a>
                <div class="clear"></div>
            </div>
            <div class="second_txt">
                <span class="txt1">密码</span>
                <span class="txt2">
                    <input type="password" value="请输入密码" class="input_box3">
                </span>
                <div class="clear"></div>
            </div>
            <div class="button">
                <button type="button" class="login">注册</button>
            </div>
        </div>
</template>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .APPcontainer{
        width: 7.5rem;
        float: left;
        position: relative;
        margin-top: 1.26rem;
        left: -0.05rem;
    }
    .first_txt{
        border-top: 0.02rem solid #e6e6e6;
        border-bottom: 0.02rem solid #e6e6e6;
        margin-left: 0.3rem;
        width: 6.9rem;
        height: 0.98rem;
        margin-top: 0.45rem;
    }
    .txt1{
        padding-top: 0.46rem;
        font-size: 0.30rem;
        float: left;
        font-weight: bold
    }
    .txt2{
        float: left;
        margin-top: 0.46rem;
    }
    .input_box{
        color: #c2c2c2;
        caret-color:black;
        font-size: 0.3rem;
        width: 3rem;
        border: none;
        float: left;
        zoom:1;
        outline: medium;
        margin-left: 0.55rem;
    }
    .input_box2{
        color: #c2c2c2;
        caret-color:black;
        font-size: 0.30rem;
        height: px;
        width: 3rem;
        border: none;
        float: left;
        zoom:1;
        outline: medium;
        margin-left: 0.25rem;
    }
    .input_box3{
        color: #c2c2c2;
        caret-color:black;
        font-size: 0.3rem;
        height: px;
        width: 3rem;
        border: none;
        float: left;
        zoom:1;
        outline: medium;
        margin-left: 0.56rem;
    }
    .second_txt{
        border-bottom: 0.02rem solid #e6e6e6;
        margin-left: 0.30rem;
        width: 6.9rem;
        height: 0.98rem;
    }
    .getcode{
        font-size: 0.3rem;
        float: right;
        margin-top: 0.46rem;
        color: #0091ff;
    }
    .button{
        text-align: center;
    }
    .login{
        width:6.91rem;
        height: 0.88rem;
        background-color: #0091ff;
        font-size: 0.3rem;
        color: white;
        border:none;
        border-radius:0.04rem;
        margin-top: 0.35rem;
    }
</style>