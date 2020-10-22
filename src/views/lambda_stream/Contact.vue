<template>
    <div class="main-view">
        <div class="sidebar">
            <div class="sidebar-item">
                <scrollbar/>
            </div>
        </div>
        <div class="form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdvnf5K0Rim9jRhXemuenpUCw-FWlaBxx1UfDmbseAeXrK8Zg/viewform?embedded=true" width="800" height="500" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
        </div>
    </div>
</template>

<script>
import scrollbar from "./Scrollbar.vue"

export default {
  components: {
    scrollbar
  },
}
</script>

<style scoped>
.main-view {
 display: flex;
}

.form{
width:75%;
text-align: center;
}
</style>