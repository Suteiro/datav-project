<template>
  <div class="container">
    <div class="item">
      <dv-border-box-1 :dur=5>
        <dv-charts :option="option1" />
        </dv-border-box-1>
    </div>
    <div class="item">
      <dv-border-box-2 :color="['#3bc2fb', '#27e9a5']">
        <dv-charts :option="option1" />
      </dv-border-box-2>
    </div>
    <div class="item">
      <dv-border-box-7 :color="['#27e9a5', '#3bc2fb']" backgroundColor="#282c34">
        <dv-charts :option="option1" />
        </dv-border-box-7>
    </div>
    <div class="item">
      <dv-border-box-4><dv-charts :option="option1" /></dv-border-box-4>
    </div>
    <div class="item">
      <dv-border-box-8 :dur=1><dv-charts :option="option1" /></dv-border-box-8>
    </div>
    <div class="item">
      <dv-border-box-11 title="border with title"><dv-charts :option="option1" /></dv-border-box-11>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      option1: {
        series: [{
          type: 'pie',
          data: [
              { name: '可口可乐', value: 93 },
              { name: '百事可乐', value: 32 },
              { name: '哇哈哈', value: 65 },
              { name: '康师傅', value: 44 },
              { name: '统一', value: 52 },
          ],
          insideLabel: {
              show: true
          },
          roseType: true
        }]
      }
    }
  }
}
</script>
<style>
div {
  margin: 0 auto;
}

.text {
  font-size: 24px;
  width: 200px;
  height: 40px;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.container {
  width: 1350px;
  height: 640px;
  background: #282c34;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.item {
  width: 450px;
  height: 300px;
}

</style>