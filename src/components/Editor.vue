<template>
    <div class="editor" style="width: 100%; height: 100%;" :id="editorId "></div>
</template>

<script>
export default {
  props: ['editorId','content', 'lang', 'theme', 'isEdited', 'isReseted'],
  data() {
    return {
      editorIsEdited : false,
      editorIsReseted : false,
      editor: Object,
      beforeContent: '',
    }
  },
  watch: {
    'content'(value) {
      this.editorIsEdited = this.isEdited
      this.editorIsReseted = this.isReseted
      if(this.editorIsReseted){
        this.editorIsEdited = false
        this.editorIsReseted = false
      }else{
        this.editorIsEdited = true
      }
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
    this.editor.setFontSize(14)
    this.editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true
    });

    this.editor.on('change', () => {
      console.log(" 子である  "+this.editorIsEdited)
      this.beforeContent = this.editor.getValue()
      this.$emit('change-content', this.editor.getValue(), this.editorIsEdited, this.editorIsReseted)
    })
  }
}
</script>

<style scoped>

.editor {
  text-align: left;
  /* height: 300px; */
}

</style>