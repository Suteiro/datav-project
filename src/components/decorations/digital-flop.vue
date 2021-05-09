<template>
    <div>
        <div class="button" @click="changeConfig">
            <p>点这里倒计时</p>
        </div>
        <br><br>
        <dv-digital-flop :config="config" style="width:400px;height:75px;" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            config: {
                number: [100],
                content: '离高考还有{nt}天',
                animationCurve: 'easeOutQuint'
            },
            first: true,
            second: false,
            third: false
        }
    },
    methods: {
        changeConfig() {
            if (this.first) {
                this.config = {
                    number: [50],
                    content: '离高考还有{nt}天',
                    animationFrame: 120
                };
                this.first = false;
                this.second = true
            } else if (this.second) {
                this.config = {
                    number: [10],
                    content: '离高考还有{nt}天',
                    animationFrame: 250
                };
                this.second = false;
                this.third = true
            } else if (this.third) {
                this.config = {
                    number: [0],
                    content: '离高考还有{nt}天'
                };
                this.third = false;
                this.first = true
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
    color: black;
    text-align: center;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.button {
    cursor: pointer;
    font-size: 24px;
    width: 200px;
    height: 80px;
    color: black;
    text-align: center;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>