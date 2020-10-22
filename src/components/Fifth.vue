<template>
  <div>
    <div class="main-view">
        <div class="sidebar">
            <div class="sidebar-item">
                <scrollbar/>
            </div>
        </div>
        <div class="router">
            <span>5. 中間操作</span>
            <div>
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTBvvYGq38_GB1qH7eWRZ-8zmHCNZc9xF9gXzWe4gUcMOlhIUubn03wERAHfjeUkehT3EVcZ_jNbZd_/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1000" height="539" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div>

            <div class="editor">
                <div class="editor-wrapper">
                    <editor editor-id="1" @change-content="editor_content = $event" :content="editor_content"></editor>
                </div>
            </div>

            <div class="item my-2">
                <div class="console">
                    <button @click="call_paiza_method()" class="btn btn-primary py-1 px-3 mr-5">処理実行</button>
                    <button @click="reset" class="btn btn-warning text-white py-1 px-3 ml-3">リセット</button>
                </div>
                <div class="my-3">
                <Paiza ref="paiza" :content="editor_content"></Paiza>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Paiza from "./Paiza.vue";
import editor from "./Editor.vue";
import scrollbar from "./Scrollbar.vue"

export default {
  components: {
    Paiza,
    editor,
    scrollbar
  },
  data() {
    return {
      editor_content:
        "import java.util.*;" +
        "\n" +
        "\n" +
        "//練習用にお使いください" +
        "" +
        "\n" +
        "public class Main { " +
        "\n" +
        "  public static void main(String args[]) {" +
        "" +
        "\n" +
        "  \n" +
        "  }" +
        "\n" +
        "}",
    };
  },
  methods: {
    reset() {
      this.editor_content =
        "import java.util.*;" +
        "\n" +
        "\n" +
        "//練習用にお使いください" +
        "" +
        "\n" +
        "public class Main { " +
        "\n" +
        "  public static void main(String args[]) {" +
        "" +
        "\n" +
        "  \n" +
        "  }" +
        "\n" +
        "}";
    },
    call_paiza_method() {
      this.$refs.paiza.post_create();
    },
  },
};
</script>

<style scoped>
.main-view {
 display: flex;
}
.editor-wrapper {
  width: 100%;
  height: 70%;
}
.console {
  width: 100%;
  height: 30%;
  font-size: 1.2rem;
}
.editor {
  width: 90%;
  height: 500px;
  margin: 10px auto;
}
</style>