<template>
  <div class="container">
    <div class="item">
      <div class="header">
          <p>基本进度条</p>
      </div>
      <dv-percent-pond :config="config1" />
    </div>
    <div class="item">
      <div class="header">
          <p>调整边框</p>
      </div>
      <dv-percent-pond :config="config2" />
    </div>
    <div class="item">
      <div class="header">
          <p>调整颜色</p>
      </div>
      <dv-percent-pond :config="config3" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config1: {
        value: 66
      },

      config2: {
        value: 80,
        borderWidth: 7,
        borderGap: 5,
        lineDash: [10, 3],
        borderRadius: 15
      },

      config3: {
        colors: ['red', 'blue'],
        value: 88,
        localGradient: true,
        textColor: 'white'
      }
    }
  }
}
</script>
<style>
div {
    margin: 0 auto;
}

.container {
  width: 1350px;
  height: 300px;
  background: white;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.header {
    font-size: 24px;
    width: 200px;
    height: 80px;
    color: black;
    text-align: center;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.item {
  width: 450px;
  height: 300px;
}

.dv-percent-pond {
  width: 200px;
  height: 100px;
}
</style>