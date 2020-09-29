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
        <div v-show="this.int<=10">
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
      questions: [
       'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+'import java.util.stream.Collectors;'+'\n'+''+'\n'+'/*'+'\n'+'以下に用意したコレクションから、Filterを用いて99以下の値を持つ要素を排除して標準出力に出力しなさい'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'    var numList = new ArrayList<Integer>(Arrays.asList(100, 99, 200, 300, 50, 400));'+'\n'+''+'\n'+'  }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+'import java.util.Comparator;'+'\n'+'import java.util.stream.Collectors;'+'\n'+''+'\n'+'/*'+'\n'+'以下に用意したコレクションをstreamAPIを用いて降順にsortし、パイプライン処理中に出力しsort出来ているか確認しなさい'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'    var numList = new ArrayList<Integer>(Arrays.asList(100, 99, 200, 300, 50, 400));'+'\n'+''+'\n'+'  }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+'import java.util.Comparator;'+'\n'+''+'\n'+'/*'+'\n'+'以下に用意したコレクションをstreamAPIを用いて重複を削除したのち降順にsortし、パイプライン処理中に出力し確認しなさい'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'    var numList = new ArrayList<Integer>(Arrays.asList(100,100, 99, 200, 300, 50, 400, 99, 200));'+'\n'+''+'\n'+'  }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+'import java.util.stream.Collectors;'+'\n'+''+'\n'+'/*'+'\n'+'以下に用意したコレクションの各値が、"JavaScript"に一致するものがあれば"Java"に変換し、新しいコレクションとして定義し標準出力に出力しなさい。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'  var languageList = new ArrayList<String>(Arrays.asList("GOlang","COBOL", "JavaScript", "C", "Python", "VBA", "Swift", "C#", "PHP"));'+'\n'+'  '+'\n'+'  }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+'import java.util.function.Function;'+'\n'+'import java.util.stream.Collectors;'+'\n'+''+'\n'+'/*'+'\n'+'文字列の末尾に"株式会社"を追加するFunctionメソッドをラムダ式で実装し、'+'\n'+'*それを用いて以下に用意したコレクションの各値を操作し新しいコレクションとして定義し標準出力に出力しなさい。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'  var companyList = new ArrayList<String>(Arrays.asList("ALH","カルビー", "キユーピー", "凸版印刷", "山崎製パン", "東京エレクトロン"));'+'\n'+'  '+'\n'+''+'\n'+'  }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+''+'\n'+'/*'+'\n'+'以下のコレクションの各要素に"印刷"という文字列を含む値が存在するかどうかを、真偽値で出力する処理をstreamAPIとラムダ式を用いて定義しなさい。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'  var companyList = new ArrayList<String>(Arrays.asList("ALH","カルビー", "キユーピー", "凸版印刷", "山崎製パン", "東京エレクトロン"));'+'\n'+'  '+'\n'+'  }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+'import java.util.stream.Collectors;'+'\n'+''+'\n'+'/*'+'\n'+'以下のコレクションの各値が前株（株式会社〇〇）かどうかを判定し、その結果をboolean型のリストにして各要素を出力しなさい。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'  var companyList = new ArrayList<String>(Arrays.asList("ALH株式会社","株式会社SHIFT", "キユーピー株式会社", "凸版印刷株式会社", "株式会社リクルートホールディングス"));'+'\n'+''+'\n'+'  }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+'import java.util.stream.Collectors;'+'\n'+''+'\n'+'/*'+'\n'+'以下のコレクションの各値が前株（株式会社〇〇）かどうかを判定し、その結果をvalueとしたMapを定義して出力しなさい。'+'\n'+'*なお、key値は判定元の文字列をそのまま使用すること(1つ目の要素であれば {ALH株式会社=:false})'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'  var companyList = new ArrayList<String>(Arrays.asList("ALH株式会社","株式会社SHIFT", "キユーピー株式会社", "凸版印刷株式会社", "株式会社リクルートホールディングス"));'+'\n'+'  '+'\n'+'  }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+'import java.util.stream.Collectors;'+'\n'+''+'\n'+'/*'+'\n'+'以下のコレクションの各値が前株（株式会社〇〇）かどうかを判定し、その結果をvalueとしたMapを定義して出力しなさい。'+'\n'+'*なお、keyは判定元の文字列をそのまま使用する(1つ目の要素であれば {key:"ALH株式会社",value:false})'+'\n'+'*ただし、重複した値が存在してもエラーにならないよう考慮すること。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'  var companyList = new ArrayList<String>(Arrays.asList("ALH株式会社","株式会社SHIFT", "株式会社SHIFT", "キユーピー株式会社", "凸版印刷株式会社", "株式会社リクルートホールディングス"));'+'\n'+'  '+'\n'+'}'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+''+'\n'+'/*'+'\n'+'以下に用意したコレクションの各要素を乗算した結果をstreamAPIとreduceメソッドを用いて'+'\n'+'*新たな変数に格納して標準出力に出力しなさい。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'  var integerList = new ArrayList<Integer>(Arrays.asList(5, 10, 15, 20, 25));'+'\n'+''+'\n'+'  }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+''+'\n'+'/*'+'\n'+'以下の数値型のコレクション要素をstreamAPIのreduceメソッドを用いてそれぞれ乗算していったものに出力しなさい。'+'\n'+'*但しreduce処理の初期値として5を与えること。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'  var integerList = new ArrayList<Integer>(Arrays.asList(5, 10, 15, 20, 25));'+'\n'+'  '+'//以下に処理を記載しなさい'+'\n'+'  }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+''+'\n'+'/*'+'\n'+'streamAPIとreduceメソッドを用いて以下のコレクションの各要素の文字数を合計しなさい。'+'\n'+'*但し合計処理の途中で各要素の文字数を出力すること。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'  var integerList = new ArrayList<String>(Arrays.asList("All for one", "Level up", "Over Drive", "High motivation", "Agile partner"));'+'\n'+'  '+'//以下に処理を記載しなさい'+'\n'+'  }'+'\n'+'}'
      ],
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
      if(this.int <= 10){
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



