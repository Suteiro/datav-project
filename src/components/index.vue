<template>
  <div class="container">
    <h1>数据可视化小组作业第二部分</h1>
    <h4>1800016631 陈科锜</h4>
    <p>作业说明：本作业为dataV教程的复现与实践，包括其中各项图表与组件的练习，和一个用自己数据制作的可视化作品。
      每一种图表和组件的练习放在单独的一个页面，通过下面的链接访问，点击左上角的链接返回该目录页。</p>
    <p style="color:#c90000;">注：不同页面之间的css布局会由于浏览器的静态文件缓存而出现错误，建议每打开一个页面都用 Ctrl+F5 刷新一次。</p>
    <h3>教程复现-基础图表</h3>
    <div class="links">
      <p><router-link to="/basic-charts/line">折线图</router-link></p>
      <p><router-link to="/basic-charts/bar">柱状图</router-link></p>
      <p><router-link to="/basic-charts/pie">饼状图</router-link></p>
      <p><router-link to="/basic-charts/radar">雷达图</router-link></p>
      <p><router-link to="/basic-charts/gauge">仪表盘</router-link></p>
    </div>
    <h3>教程复现-装饰组件</h3>
    <div class="links">
      <p><router-link to="/decorations/loading">加载图标</router-link></p>
      <p><router-link to="/decorations/border">图表边框</router-link></p>
      <p><router-link to="/decorations/percent-pond">进度条</router-link></p>
      <p><router-link to="/decorations/digital-flop">数字翻牌器</router-link></p>
      <p><router-link to="/decorations/dividing-line">分割线</router-link></p>
      <p><router-link to="/decorations/others">其他装饰</router-link></p>
    </div>
    <h3>教程复现-进阶图表</h3>
    <div class="links">
      <p><router-link to="/advanced-charts/active-ring">动态环图</router-link></p>
      <p><router-link to="/advanced-charts/cone">锥形柱状图</router-link></p>
      <p><router-link to="/advanced-charts/capsule">胶囊柱状图</router-link></p>
      <p><router-link to="/advanced-charts/flyline">飞线图</router-link></p>
      <p><router-link to="/advanced-charts/water-level">水位图</router-link></p>
      <p><router-link to="/advanced-charts/scroll">轮播表</router-link></p>
    </div>
    <h3>实践-使用本地数据进行可视化</h3>
    <div class="links">
      <p><router-link to="/H2020">Horizon 2020计划立项项目可视化</router-link></p>
    </div>
  </div>
</template>
<script>
    export default {

    }
</script>

<style>
.container {
  margin: 0 40px 40px 40px;
}

.container p,
.container h4 {
  margin: 10px 0;
}
</style>
