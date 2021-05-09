<template>
  <div>
    <dv-border-box-11 title="锥形柱状图" :color="['rgba(194,208,233,0.4)']" style="width:900px;height:450px;">
      <dv-conical-column-chart :config="config" style="width:800px;height:400px;" />
    </dv-border-box-11>
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
]
export default {
  data() {
    return {
      config: {
        data: data,
        showValue: true,
        fontSize: 20,
        columnColor: 'rgba(194,208,233,0.4)',
        textColor: '#6581b3'
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
    height: 80px;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>