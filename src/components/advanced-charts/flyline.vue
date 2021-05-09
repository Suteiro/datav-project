<template>
  <div class="container">
    <dv-flyline-chart :config="config1" :dev="true" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      config1: {
        centerPoint: [0.49, 0.69],
        points: [
          [0.59, 0.46],
          [0.32, 0.36],
          [0.67, 0.42],
          [0.79, 0.56],
          [0.42, 0.51],
          [0.59, 0.56],
          [0.36, 0.67],
          [0.37, 0.79],
          [0.46, 0.80],
          [0.60, 0.71],
          [0.39, 0.68],
          [0.48, 0.30],
          [0.61, 0.20],
          [0.24, 0.80],
          [0.77, 0.37],
          [0.24, 0.62]
        ],
        bgImgUrl: "./peking-map.png",
        centerPointImg: {
          url: 'http://datav.jiaminghi.com/img/flylineChart/mapCenterPoint.png'
        },
        pointsImg: {
          url: 'http://datav.jiaminghi.com/img/flylineChart/mapPoint.png'
        },
        lineWidth: 2,
        orbitColor: 'rgba(59,194,251,0.3)',
        curvature: 4,
        duration: [10, 50],
        halo: {
          show: true,
          duration: 10,
          radius: 90
        }
      }
    }
  }
}
</script>
<style>
div {
  margin: 0 0;
}

.container {
  width: 1350px;
  height: 620px;
  background: #fff;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: auto;
}

div.dv-flyline-chart {
  width: 550px;
  height: 500px;
  margin: auto;
}
</style>