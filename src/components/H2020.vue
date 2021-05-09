<template>
  <div class="container">
    <dv-border-box-7>
      <div class="left-content">
        <div class="top-header">
          <h1>Horizon 2020计划立项项目可视化</h1>
          <p>“地平线2020计划”于2014年开始实施，是欧盟历史上规模最大的创新研发计划，融合了三个科技创新计划的预算，整合欧洲科研资源，加强成员国之间的统筹和协调，促进欧洲研究区的建设。</p>
        </div>
        <div class="ranking-board chart">
          <div class="chart-title">国家负责协调的项目数量排名</div>
          <dv-scroll-ranking-board :config="config1" />
        </div>
      </div>
      <div class="right-content">
        <div class="cone chart">
          <div class="chart-title">各个学科的立项项目数量</div>
          <dv-border-box-6 style="height:220px;"><dv-conical-column-chart :config="config2" /></dv-border-box-6>
        </div>
        <div class="bottom-content">
          <div class="rose-pie chart">
            <div class="chart-title">对不同学科的资金投入</div>
            <dv-border-box-6 style="height:310px;"><dv-charts class="rose-pie-chart" :option="option3" /></dv-border-box-6>
          </div>
          <div class="year-line chart">
            <div class="chart-title">各年立项项目数目变化</div>
            <dv-border-box-6 style="height:310px;"><dv-charts class="line-chart" :option="option4" /></dv-border-box-6>
          </div>
        </div>
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      config1: {},
      config2: {},
      option3: {},
      option4: {}
    }
  },
  created() {
    axios.get('./data/H2020data.json').then(res => {
      var source_data = res.data;
      console.log(source_data[0]);
      let count1 = {};
      for (let p of source_data) {
        let country = p["coordinator"][0];
        if (count1[country]) {
          count1[country]++;
        } else {
          count1[country] = 1;
        }
      }
      var country_count = [];
      for (let country in count1) {
        if (country != "undefined"){
          country_count.push({name: country, value: count1[country]});
        }
      }
      this.config1 = {
        data: country_count,
        rowNum: 9,
        waitTime: 2000
      };

      let count2 = {};
      for (let p of source_data) {
        let field = p["classification"];
        if (count2[field]) {
          count2[field]++;
        } else {
          count2[field] = 1;
        }
      }
      var field_count = [];
      for (let field in count2) {
        if (field != "undefined"){
          field_count.push({name: field, value: count2[field]});
        }
      }
      field_count = JSON.parse(JSON.stringify(field_count).replace("农业、粮食与自然资源", "农业"));
      field_count = JSON.parse(JSON.stringify(field_count).replace("人文与社会科学", "人文社科"));
      this.config2 = {
        data: field_count,
        textColor: '#646464',
        showValue: true
      }

      let count3 = {};
      for (let p of source_data) {
        let field = p["classification"];
        if (count3[field]) {
          count3[field] += p["ecContribution"];
        } else {
          count3[field] = p["ecContribution"];
        }
      }
      var money_count = [];
      for (let field in count3) {
        if (field != "undefined"){
          money_count.push({name: field, value: count3[field]});
        }
      }
      money_count = JSON.parse(JSON.stringify(money_count).replace("农业、粮食与自然资源", "农业"));
      this.option3 = {
        series: [{
          type: 'pie',
          data: money_count,
          roseType: true
        }]
      };

      let count4 = {};
      for (let p of source_data) {
        let year = p["startDate"].slice(0,4);
        if (count4[year]) {
          count4[year]++;
        } else {
          count4[year] = 1;
        }
      }
      var year_count = [[], []];
      for (let year in count4) {
        if (year != ""){
          year_count[0].push(year);
          year_count[1].push(count4[year]);
        }
      }
      this.option4 = {
        xAxis: {
          name: '年份',
          data: year_count[0]
        },
        yAxis: {
          name: '项目数',
          data: 'value'
        },
        series: [{
          data: year_count[1],
          type: 'line',
          label: {
            show: true
          },
          lineArea: {
            show: true,
            gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
          }
        }]
      }
    });
  }
}
</script>

<style>
div {
    margin: 0 auto;
}

.container {
  width: 1500px;
  height: 650px;
  color: #646464;
}

.left-content {
  width: 380px;
  height: 650px;
  float: left;
}

.right-content {
  width: 1120px;
  height: 650px;
  float: right;
}

.top-header {
  height: 200px;
}

.top-header h1 {
  margin: 0;
  padding: 20px 50px 10px 20px;
}

.top-header p {
  margin: 0;
  padding: 0 10px;
}

.chart {
  background-color: #ededed;
  margin: 10px;
}

.chart .chart-title {
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
}

.ranking-board {
  height: 430px;
}

.dv-scroll-ranking-board {
  padding: 0 10px 10px 10px;
  width: 340px;
  height: 370px;
  color: #646464;
}

.dv-scroll-ranking-board .ranking-info .rank {
  color: #1371fd;
}

.dv-scroll-ranking-board .ranking-column {
  width: 100%;
}

.dv-scroll-ranking-board .ranking-column .inside-column {
  float: left;
  background-color: #4e92f8;
}

.cone {
  height: 260px;
}

.dv-conical-column-chart {
  width: 1070px;
  height: 210px;
  margin: 0 10px 10px 10px;
}

.rose-pie {
  width: 450px;
  height: 350px;
  float: left;
}

.rose-pie-chart {
  margin: 0 10px 10px 10px;
  width: 430px;
  height: 300px;
}

.year-line {
  width: 630px;
  height: 350px;
  float: right;
}

.line-chart {
  margin: 0 10px 10px 10px;
  width: 610px;
  height: 300px;
}

</style>