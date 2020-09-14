<template>
  <Header :logo-hide="true" />
  <main>
    <div id="hero">
      <div class="inner">
        <div class="left">
          <img src="../assets/logo.png" class="hero-logo" alt="grape logo"/>
        </div>
        <div class="right">
          <h2>Grape UI</h2>
          <h1>
            Vue3.0<br/>UI组件库
          </h1>
          <p>
            <router-link to="/document" class="button start">起步</router-link>
            <a href="https://gitee.com" class="button grey has-icon">
              <img src="../assets/gitee.png" alt="gitee"/>
              GITEE</a>
          </p>
        </div>
      </div>
    </div>
    <div id="highlights">
      <div class="inner">
        <div class="point">
          <h2>易用</h2>
          <p>已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！</p>
        </div>

        <div class="point">
          <h2>灵活</h2>
          <p>不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。</p>
        </div>

        <div class="point">
          <h2>高效</h2>
          <p>
            20kB min+gzip 运行大小<br>
            超快虚拟 DOM <br>
            最省心的优化
          </p>
        </div>
      </div>
    </div>
  </main>
  <footer id="footer">
    <p>
      <a class="social-icon footer_gitee" href="https://github.com/vuejs/vue" target="_blank" rel="noopener"/>
      <a class="social-icon footer_twitter" href="https://twitter.com/vuejs" target="_blank" rel="noopener"/>
      <a class="social-icon footer_mit" href="https://medium.com/the-vue-point" target="_blank" rel="noopener"/>
    </p>
    <p>遵循 <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener">MIT 开源协议</a><br>
      Copyright © 2020 Usami Ahikiko</p>
  </footer>
</template>

<script lang="ts">
import Header from '../components/Header/Header.vue';
export default{
  components: {Header}
}
</script>

<style lang="scss" scoped>
@import "../index.scss";

#hero{
  padding: 40px 40px 30px;
  background-color: #fff;
  >.inner{
    max-width: 1260px;
    margin: 0 auto;
    >.left, >.right{
      display: inline-block;
      vertical-align: top;
    }
    >.left{
      width: 39%;
      > .hero-logo{
        width: 215px;
        height: 215px;
        float: right;
        margin-right: 60px;
        border: none;
      }
    }
    >.right{
      width: 61%;
      > h2{
        font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
        font-weight: 500;
        font-size: 2.4em;
        margin: 0 0 10px;
        display: none;
      }
      > h1{
        font-weight: 300;
        margin: 0;
        color: #393954;
        font-size: 3.2em;
      }
      >p{
        .button{
          margin: 1em 0;
          padding: 0.75em 2em;
          font-size: 1.05em;
          font-weight: 600;
          letter-spacing: 0.1em;
          min-width: 8em;
          text-align: center;
          border-radius: 2em;
          display: inline-block;
          color: $bg-purple;
          background-color: #fff;
          transition: all .15s ease;
          box-sizing: border-box;
          border: 1px solid $bg-purple;
          &.grey{
            margin-left: 10px;
            background-color: #f6f6f6;
            color: #4f5959;
            border-color: #f6f6f6;
            > img {
              position: absolute;
              left: 0.4em;
              top: 50%;
              transform: translateY(-50%);
              width: 2em;
            }
          }
          &.has-icon{
            position: relative;
            text-indent: 1.4em;
          }
        }
      }
    }
  }
}
#highlights{
  background-color: #fff;
  padding-bottom: 70px;
  > .inner{
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    > .point{
      width: 33%;
      display: inline-block;
      vertical-align: top;
      box-sizing: border-box;
      padding: 0 2em;
      > h2 {
        color: $bg-purple;
        font-size: 1.5em;
        font-weight: 400;
        margin: 0;
        padding: 0.5em 0;
      }
    }
  }
}

#footer{
  padding: 40px 0;
  color: #fff;
  background-color: #475050;
  text-align: center;
  > p{
    word-spacing: 0.05em;
  }
}

@media screen and (max-width: 900px){
  #hero {
    padding: 40px 40px 30px;
  }
  #hero .hero-logo {
    float: none!important;
    margin: 30px 0 15px!important;
    width: 140px!important;
    height: 140px!important;
  }
  #hero .left, #hero .right{
    text-align: center;
    width: 100% !important;
  }
  #hero h2 {
    display: block!important;
  }
  #hero h1 {
    font-size: 2em;
  }
  #hero .button {
    font-size: 0.9em;
  }
}
</style>
