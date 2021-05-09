<template>
  <div class="container">
    <dv-scroll-board :config="config1" />
    <dv-scroll-board :config="config2" />
    <dv-scroll-board :config="config3" />
  </div>
</template>

<script>
var data1 = [
  ['CZ6902', '北京', '长沙'],
  ['CZ2090', '上海', '成都'],
  ['CA3948', '乌鲁木齐', '北京'],
  ['CA5435', '成都', '北京'],
  ['CZ5642', '长沙', '贵州'],
  ['MU8547', '北京', '乌鲁木齐'],
  ['MU3757', '贵州', '成都'],
  ['CA5946', '上海', '北京'],
  ['CZ2847', '辽宁', '成都'],
  ['MU5836', '乌鲁木齐', '上海']
];
export default {
  data() {
    return {
      config1: {
        data: data1,
        rowNum: 8
      },

      config2: {
        header: ['航班号', '出发', '到达'],
        data: data1,
        rowNum: 8,
        headerBGC: '#345082',
        headerHeight: 60,
        oddRowBGC: '#c2d0e9',
        evenRowBGC: '#91acdf',
        waitTime: 1000
      },

      config3: {
        data: data1,
        rowNum: 9,
        carousel: 'page',
        columnWidth: [40, 160, 100, 100],
        hoverPause: false,
        index: true,
        waitTime: 3000
      }
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
  background: white;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.dv-scroll-board,
.dv-scroll-ranking-board {
  width: 400px;
  height: 400px;
}
</style>
