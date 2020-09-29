<template>
  <div>
    <span>関数型インターフェース</span>
    <div class="">
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT7moeoiQ8gXMs1NCjWoGlmzVVmLgR9DWvsmphxpdS3jeP0teeppFHBBirjhDfaCWmBbMMDP1UWXPbr/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1000" height="539" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    </div>
    <div class="editor">
      <div class="editor-wrapper">
        <editor editor-id="1" @change-content="editor_content = $event" :content="editor_content"></editor>
      </div>
      <div class="item my-2">
        <div class="console">
          <button @click="call_paiza_method()" class="btn btn-primary py-1 px-3 mr-3">実行</button>
          <button @click="reset" class="btn btn-warning text-white py-1 px-3">リセット</button>
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

export default {
  components: {
    Paiza,
    editor
  },
  data() {
    return {
      editor_content: 'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+''+'\n'+'/*'+'\n'+'streamAPIとreduceメソッドを用いて以下のコレクションの各要素要素の文字数を合計しなさい。'+'\n'+'*但し合計処理の途中で各要素の文字数を出力すること。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'  var integerList = new ArrayList<String>(Arrays.asList("All for one", "Level up", "Over Drive", "High motivation", "Agile partner"));'+'\n'+''+'\n'+'  var multipliedInteger = integerList.stream()'+'\n'+'                                     .parallel()'+'\n'+'                                     .reduce(0, //第一引数:初期値'+'\n'+'                                            (result, element) -> result + element.length(), //第二引数 中間処理'+'\n'+'                                            //並列処理される順序は保証されません'+'\n'+'                                            (e1, e2) -> {                         // △'+'\n'+'                                              System.out.println("length:" + e1); // | 第三引数(関数)'+'\n'+'                                              return e1 + e2;                     // | ここの関数に処理(今回はprintln)を差込む場合並列処理でないと実行されない'+'\n'+'                                            }                                     // ▽'+'\n'+'                                      );                 '+'\n'+'  System.out.println(multipliedInteger); '+'\n'+'  }'+'\n'+'}'+'\n'+''+'\n'

,
    }
  },
  methods: {
    reset() {
      this.editor_content = 'public class Main { ' + '\n' + 'public static void main(String args[]) {'+ '\n' +
        '  for (int i = 0; i < 10; i++) { '+ '\n' +
              '  System.out.println("i = " + i);'+ '\n' +
            '  }'+ '\n' +
          ' }'+ '\n' +
        '}'
    },
    call_paiza_method() {
      this.$refs.paiza.post_create()
    },
  },
};
</script>

<style scoped>
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