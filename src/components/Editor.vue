<template>
    <div class="editor" style="width: 100%; height: 200%;" :id="editorId "></div>
</template>

<script>
export default {
  props: ['editorId','content', 'lang', 'theme'],
  data() {
    return {
      editor: Object,
      beforeContent: ''
    }
  },
  watch: {
    'content'(value) {
      if (this.beforeContent != value) {
        this.editor.setValue(value, 1)
      }
    }
  },

  mounted() {
     const lang = this.lang || 'java'
     const theme = this.theme || 'monokai'

    this.editor = window.ace.edit(this.editorId)
    this.editor.setValue(this.content, 1)
    this.editor.$blockScrolling = Infinity;

    // mode-xxx.js or theme-xxx.jsがある場合のみ有効
    this.editor.getSession().setMode(`ace/mode/${lang}`)
    this.editor.setTheme(`ace/theme/${theme}`)
    this.editor.setFontSize(12)
    this.editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true
    });

    this.editor.on('change', () => {
      this.beforeContent = this.editor.getValue()
      this.$emit('change-content', this.editor.getValue())
    })
  }
}
</script>

<style scoped>

.editor {
  height: 120px;
  width:1500px;
  text-align: left;
}

</style>