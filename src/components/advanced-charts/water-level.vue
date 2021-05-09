<template>
  <div class="container">
    <dv-water-level-pond :config="config1" style="width:150px;height:200px;margin:75px;"/>
    <dv-water-level-pond :config="config2" style="width:150px;height:200px;margin:75px;"/>
    <dv-water-level-pond :config="config3" style="width:150px;height:200px;margin:75px;"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config1: {
        data: [52]
      },
      config2: {
        data: [41, 75, 59],
        shape: 'roundRect',
        waveNum: 6,
        colors: ['#ffd92f', '#a6d854'],
        waveHeight: 10
      },
      config3: {
        data: [52],
        shape: 'round',
        colors: ['#f2f2f2', '#4878d0'],
        waveOpacity: 0.15,
        formatter: '{value}%'
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
  width: 900px;
  height: 620px;
  background: #fff;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: auto;
}

.dv-water-level-pond {
  margin: auto;
  width:150px; 
  height:200px;
  color: #000;
}
</style>