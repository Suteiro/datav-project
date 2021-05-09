<template>
  <div class="container">
    <dv-decoration-9 style="width:200px;height:200px;font-size:20px;font-weight:bold;" :color="['#3bc2fb', '#27e9a5']">
      命运之轮
    </dv-decoration-9>
    <dv-decoration-11 style="width:200px;height:60px;">一个小标题</dv-decoration-11>
    <dv-decoration-12 style="width:200px;height:200px;" :color="['#3bc2fb', '#27e9a5']"/>
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

.container>div {
  width: 100%;
  height: 20px;
  margin: 50px auto;
}
</style>