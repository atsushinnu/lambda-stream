<template>
  <div>
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTBvvYGq38_GB1qH7eWRZ-8zmHCNZc9xF9gXzWe4gUcMOlhIUubn03wERAHfjeUkehT3EVcZ_jNbZd_/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    <div style="height: 120px">
      <editor editor-id="1" @change-content="editor_content = $event" :content="editor_content"></editor>
    </div>
    <div style="margin-top: 150px ">
      <Paiza :content="editor_content"></Paiza>
      <button @click="reset">Reset</button>
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


</style>
