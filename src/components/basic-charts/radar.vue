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
          text: '基本雷达图'
        },
        radar: {
          indicator: [
            { name: '西峡', max: 300 },
            { name: '周口', max: 300 },
            { name: '南阳', max: 300 },
            { name: '驻马店', max: 300 },
            { name: '郑州', max: 300 },
            { name: '洛阳', max: 300 }
          ]
        },
        series: [{
          type: 'radar',
          data: [111, 256, 178, 152, 266, 132]
        }]
      },
      option2: {
        title: {
          text: '多边形雷达图'
        },
        radar: {
          polygon: true,
          indicator: [
            { name: '西峡', max: 300 },
            { name: '周口', max: 300 },
            { name: '南阳', max: 300 },
            { name: '驻马店', max: 300 },
            { name: '郑州', max: 300 },
            { name: '洛阳', max: 300 }
          ]
        },
        series: [{
          type: 'radar',
          data: [111, 256, 178, 152, 266, 132],
          animationCurve: 'easeOutBack'
        }]
      },
      option3: {
        title: {
          text: '多组雷达图'
        },
        legend: {
          data: ['同比', '环比']
        },
        radar: {
          indicator: [
            { name: '西峡', max: 300 },
            { name: '周口', max: 300 },
            { name: '南阳', max: 300 },
            { name: '驻马店', max: 300 },
            { name: '郑州', max: 300 },
            { name: '洛阳', max: 300 }
          ]
        },
        series: [
          {
            name: '同比',
            type: 'radar',
            data: [111, 256, 178, 152, 266, 132],
            label: {
              show: false
            },
            animationCurve: 'easeOutBounce'
          },
          {
            name: '环比',
            type: 'radar',
            data: [222, 245, 220, 130, 240, 100],
            label: {
              show: false
            },
            animationCurve: 'easeOutBounce'
          }
        ]
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