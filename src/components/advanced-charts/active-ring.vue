<template>
  <div class="container">
    <dv-active-ring-chart :config="config1" />
    <dv-active-ring-chart :config="config2" />
    <dv-active-ring-chart :config="config3" />
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
        radius: "40%",
        activeRadius: "45%",
        data: data,
        digitalFlopStyle: {
          fontSize: 20,
        },
        showOriginValue: true,
        activeTimeGap: 1000
      },

      config3: {
        data: data,
        lineWidth: 40,
        animationCurve: 'easeOutQuart',
        color: ['#e77c8d', '#c69255', '#56ad74', '#5ea5c5', '#e274cf', '#5aa9a2']
      },
    };
  },
};
</script>
<style>
div {
  margin: 0 auto;
}

.container {
  width: 1350px;
  height: 620px;
  background: black;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.dv-active-ring-chart {
  width: 450px;
  height: 400px;
}
</style>
