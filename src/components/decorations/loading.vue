<template>
    <div>
        <div class="text">加载图标</div>
        <br><br>
        <dv-loading style="color:black">Loading...</dv-loading>
    </div>
</template>
<script>
export default {
    data() {
        return {
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
    color: black;
    text-align: center;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>