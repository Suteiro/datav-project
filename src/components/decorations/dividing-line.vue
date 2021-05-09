<template>
  <div class="container">
    <dv-decoration-1 :color="['#3bc2fb', '#27e9a5']" style="width: 150px; height: 50px;"/>
    <dv-decoration-2 :color="['#80ffff']" dur="3" :reverse="false" />
    <dv-decoration-3 :color="['#3bc2fb', '#27e9a5']" style="height: 50px;"/>
    <dv-decoration-4 dur="8" :reverse="true" :color="['#3bc2fb', '#27e9a5']" />
    <dv-decoration-5 :color="['#3bc2fb', '#27e9a5']" style="height: 100px;"/>
    <dv-decoration-6 :color="['#3bc2fb', '#27e9a5']" style="height: 50px;"/>
    <dv-decoration-7 style="font-size:20px; color:#282c34" :color="['#3bc2fb', '#27e9a5']">这里是一条萌萌哒的分割线</dv-decoration-7>
    <dv-decoration-8 :color="['#3bc2fb', '#27e9a5']" style="height: 100px;"/>
    <dv-decoration-10 />
  </div>
</template>

<script>
export default {

}
</script>

<style>
div {
  margin: 0 auto;
}

.container div {
  width: 100%;
  height: 20px;
  margin: 50px auto;
}
</style>