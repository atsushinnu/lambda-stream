<template>
  <div>
    <span>中間操作とは</span>
    <div class="con mt-1">
      <div class="item">
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTBvvYGq38_GB1qH7eWRZ-8zmHCNZc9xF9gXzWe4gUcMOlhIUubn03wERAHfjeUkehT3EVcZ_jNbZd_/embed?start=false&loop=false&delayms=3000" frameborder="0" width="801" height="509" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>
      <div class="item">
        <div class="editer-wrapper">
          <editor editor-id="1" @change-content="editor_content = $event" :content="editor_content"></editor>
        </div>
        <div class="console">
          <Paiza :content="editor_content"></Paiza>
          <button @click="reset" class="btn btn-warning text-white py-1 px-3">リセット</button>
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
  },
};
</script>

<style scoped>
.con {
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0 auto;
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

</style>