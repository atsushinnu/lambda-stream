<template>
    <div class="home">
        <div class="contents">
            <div class="contents-line">
                <div class="language">
                    <h3>java</h3>
                    <span class="pack-section-num">1</span>
                    <router-link to="/first">ラムダ＆streamAPI</router-link>
                    <br>
                    <span class="pack-section-num">2</span>
                    <router-link to="/first">モジュール</router-link>
                    <br>
                    <span class="pack-section-num">3</span>
                    <router-link to="/first">リフレクション</router-link>
                    <br>
                </div>
                <div class="language">
                    <h3>Python</h3>
                    <span class="pack-section-num">1</span>
                    <router-link to="/first">イテレータ</router-link>
                    <br>
                    <span class="pack-section-num">2</span>
                    <router-link to="/first">ジェネレーター</router-link>
                    <br>
                    <span class="pack-section-num">3</span>
                    <router-link to="/first">ラムダ式</router-link>
                    <br>
                </div>
            </div>
            <div class="contents-line">
                <div class="language">
                    <h3>C#</h3>
                    <span class="pack-section-num">1</span>
                    <router-link to="/first">ラムダ＆streamAPI</router-link>
                    <br>
                    <span class="pack-section-num">2</span>
                    <router-link to="/first">ラムダ＆streamAPI</router-link>
                    <br>
                    <span class="pack-section-num">3</span>
                    <router-link to="/first">ラムダ＆streamAPI</router-link>
                    <br>
                </div>
                <div class="language">
                    <h3>swift</h3>
                    <span class="pack-section-num">1</span>
                    <router-link to="/first">ラムダ＆streamAPI</router-link>
                    <br>
                    <span class="pack-section-num">2</span>
                    <router-link to="/first">ラムダ＆streamAPI</router-link>
                    <br>
                    <span class="pack-section-num">3</span>
                    <router-link to="/first">ラムダ＆streamAPI</router-link>
                    <br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
    }
  },
};
</script>

<style scoped>
.contents {
    font-size: 15px;
    justify-content:center;
    display: flex;
}

.language {
    margin:10px;
    text-align: left;
}

.language >h3 {
    text-align: center;
}

.pack-section-num {
    display: inline-block;
    background: #cbcace;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    width: 25px;
    height: 25px;
    line-height: 22px;
    margin-right: 6px;
    font-size: 0.9em;
}
</style>