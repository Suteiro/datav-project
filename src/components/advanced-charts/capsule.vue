<template>
  <div class="container">
    <dv-capsule-chart :config="config1" />
    <dv-capsule-chart :config="config2" />
    <dv-capsule-chart :config="config3" />
  </div>
</template>
<script>
var data = [
  {
    name: "理学部",
    value: 55,
  },
  {
    name: "信工学部",
    value: 40,
  },
  {
    name: "人文学部",
    value: 78,
  },
  {
    name: "社科学部",
    value: 66,
  },
  {
    name: "经管学部",
    value: 80,
  },
  {
    name: "医学部",
    value: 91,
  }
];
export default {
  data() {
    return {
      config1: {
        data: data
      },
      config2: {
        data: data,
        unit: '人',
        showValue: true
      },
      config3: {
        data: data,
        unit: '人',
        colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff']
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

div.dv-capsule-chart {
  margin: auto;
  width:400px; 
  height:200px;
  color: #000;
}
</style>