<template>
  <div>
    <div class="container">
      <div class="item">
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT7moeoiQ8gXMs1NCjWoGlmzVVmLgR9DWvsmphxpdS3jeP0teeppFHBBirjhDfaCWmBbMMDP1UWXPbr/embed?start=false&loop=false&delayms=3000" frameborder="0" width="801" height="509" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>
      <div class="item">
        <div class="editer-wrapper">
          <editor editor-id="1" @change-content="editor_content = $event" :content="editor_content"></editor>
        </div>
        <div class="console">
          <Paiza :content="editor_content"></Paiza>
          <button @click="reset" class="btn-square-pop">Reset</button>
        </div>
        <div v-show="this.int<=3">
          <button @click="increment()" class="btn-square-pop">次の問題</button>
        </div>
        <div v-show="this.int>=1">
          <button @click="decrement()" class="btn-square-pop">前の問題</button>
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
      editor_content: "",
      questions: ['import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+''+'\n'+'/*'+'\n'+'streamAPIとreduceメソッドを用いて以下のコレクションの各要素要素の文字数を合計しなさい。'+'\n'+'*但し合計処理の途中で各要素の文字数を出力すること。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'  var integerList = new ArrayList<String>(Arrays.asList("All for one", "Level up", "Over Drive", "High motivation", "Agile partner"));'+'\n'+''+'\n'+'  var multipliedInteger = integerList.stream()'+'\n'+'                                     .parallel()'+'\n'+'                                     .reduce(0, //第一引数:初期値'+'\n'+'                                            (result, element) -> result + element.length(), //第二引数 中間処理'+'\n'+'                                            //並列処理される順序は保証されません'+'\n'+'                                            (e1, e2) -> {                         // △'+'\n'+'                                              System.out.println("length:" + e1); // | 第三引数(関数)'+'\n'+'                                              return e1 + e2;                     // | ここの関数に処理(今回はprintln)を差込む場合並列処理でないと実行されない'+'\n'+'                                            }                                     // ▽'+'\n'+'                                      );                 '+'\n'+'  System.out.println(multipliedInteger); '+'\n'+'  }'+'\n'+'}'+'\n'+''+'\n'
,'python','cerenium','vue.js','C++'],
      int : 0,
      error_message : "",
    }
  },
  created: function () {
    this.editor_content = this.questions[this.int]
  },
  methods: {
    reset() {
      this.editor_content = this.questions[this.int]
    },
    increment(){
      if(this.int <= 3){
        this.int++
        this.editor_content = this.questions[this.int]
      } else {
        this.error_message ="問題がありません"
      }
    },
    decrement(){
      if(this.int >= 1){
        this.int--
        this.editor_content = this.questions[this.int]
      } else {
        this.error_message ="問題がありません"
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: inline-flex;
  flex-wrap: wrap;
}
.editer-wrapper {
  width: 500px;
  height: 120px;
}
.console {
  margin-top: 125px;
  width: 500px;
  height: 265px;
  font-size: 1.2rem;
  overflow: auto;
}

button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}

.btn-square-pop {
  position: relative;
  display: inline-block;
  padding: 0.5em 1.5em;
  text-decoration: none;
  color: #FFF;
  background: #fd9535;/*背景色*/
  border-bottom: solid 2px #d27d00;/*少し濃い目の色に*/
  border-radius: 4px;/*角の丸み*/
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
  font-weight: bold;
  font-size: 0.9rem;
}

.btn-square-pop:active {
  border-bottom: solid 2px #fd9535;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
}
</style>



