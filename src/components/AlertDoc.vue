<template>
  <h1>Alert提示</h1>
  <p>Alert组件，展现需要关注的信息</p>
  <h2>示例一</h2>
  <div>
    <p>banner类提示</p>
    <Alert class="grape-alert-demo" message="Info Text" banner/>
    <Alert class="grape-alert-demo" type="success" message="Success Text" banner/>
    <Alert class="grape-alert-demo" type="warning" message="Warning Text" banner/>
    <Alert class="grape-alert-demo" type="error" message="Error Text" banner/>
  </div>
  <h2>示例二</h2>
  <div>
    <p>含辅助性介绍的文字提示，</p>
    <Alert class="grape-alert-demo" message="Info Message" description="This is an info message!"/>
    <Alert class="grape-alert-demo" type="success" message="Success Message" description="This is a success message!" closable/>
    <Alert class="grape-alert-demo" type="warning" message="Warning Message" description="This is an warning message!" show-icon/>
  </div>
  <div class="markdown">
    <h2>API </h2>
    <table>
      <thead>
        <tr><th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr>
      </thead>
      <tbody>
        <tr><td>type</td> <td>指定警告提示的样式，有四种选择 <code>success</code>、<code>info</code>、<code>warning</code>、<code>error</code></td> <td>string</td> <td><code>info</code></td></tr>
        <tr><td>message</td> <td>警告提示内容</td> <td>string|slot</td> <td>无</td> </tr>
        <tr><td>description</td> <td>警告提示的辅助性文字介绍</td> <td>string|slot</td> <td>无</td> </tr>
        <tr><td>banner</td> <td>是否用作顶部公告</td> <td>boolean</td> <td>false</td> </tr>
        <tr><td>showIcon</td> <td>是否显示辅助图标</td> <td>boolean</td> <td>false，<code>banner</code> 模式下默认值为 true</td></tr>
        <tr><td>afterClose</td> <td>关闭动画结束后触发的回调函数</td> <td>() =&gt; void</td><td>-</td></tr>
        <tr><td>closable</td> <td>默认不显示关闭按钮</td> <td>boolean</td> <td>无</td> </tr>
        <tr><td>closeText</td> <td>自定义关闭按钮</td> <td>string|slot</td> <td>无</td> </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Alert from '../lib/Alert.vue'
export default {
  components: {Alert},
}
</script>

<style lang='scss' scoped>
*,:before,:after{
  box-sizing: border-box;
}
.grape-alert-demo{
  margin-bottom: 16px;
}
.markdown > h2{
  font-family: Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-variant: tabular-nums;
  margin: 1.6em 0 .6em;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
}
.markdown table{
  line-height: 1.5;
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
  margin: 2em 0;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
.markdown table td:first-child {
  font-weight: 500;
  width: 20%;
  color: #003a8c;
}
.markdown table td:nth-child(3) {
  width: 22%;
  color: #c41d7f;
  word-break: break-all;
}
.markdown table td, .markdown table th{
  padding: 14px 16px;
  border-color: #e8e8e8;
  border-width: 1px 0;
  border-style: solid;
  text-align: left;
}
.markdown table th{
  border-width: 0 0 2px;
}
.markdown{
  color: #314659;
}
.markdown table th {
  white-space: nowrap;
  color: #5c6b77;
  font-weight: 500;
  background: rgba(0,0,0,.02);
}
</style>
