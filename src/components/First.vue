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
          <Paiza ref="paiza" :content="editor_content"></Paiza>
          <button @click="reset" class="btn-square-pop">Reset</button>
          <button @click="call_paiza_method()" class="btn-square-pop">実行</button>
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
      editor_content: 'public class Main { ' + '\n' + 'public static void main(String args[]) {'+ '\n' +
      '  for (int i = 0; i < 10; i++) { '+ '\n' +
            '  System.out.println("i = " + i);'+ '\n' +
          '  }'+ '\n' +
        ' }'+ '\n' +
      '}',
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



