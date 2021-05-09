<template>
  <div class="container">
    <div class="item">
      <dv-charts :option="option1" />
    </div>
    <div class="item">
      <dv-charts :option="option2" />
    </div>
    <div class="item">
      <dv-charts :option="option3" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      option1: {
        title: {
          text: '基本饼状图'
        },
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
          }
        }]
      },
      option2: {
        title: {
          text: '玫瑰饼状图'
        },
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
      },
      option3: {
        title: {
          text: '环形饼状图'
        },
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
          radius: ['30%', '50%']
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
  height: 620px;
  background: white;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.item {
  width: 450px;
  height: 400px;
}

</style>