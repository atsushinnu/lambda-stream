<template>
  <div class="mb-2">
    <span>問題</span>
      <div>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTUfKYJGMM0nS0HZ-DrzSnoKPMssvsKugQ_2PFOO_bvBGNyGsG-K8MuL1IajHIxfs762vAJkn5u_o-1/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1000" height="539" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>
      <div class="editor mb-3">
        <div class="editor-wrapper">
          <editor editor-id="1" @change-content="editor_content = $event" :content="editor_content"></editor>
        </div>
        <div class="item my-2">
          <div class="console">
            <button @click="call_paiza_method()" class="btn btn-primary py-1 px-3 mr-3">処理実行</button>
            <button @click="reset()" class="btn btn-warning text-white py-1 px-3">リセット</button>
          </div>
          <Paiza ref="paiza" :content="editor_content" class="my-2"></Paiza>
          <span v-show="this.int>=1">
            <button @click="decrement()" class="btn btn-success text-white py-1 px-3 mr-3">前の問題</button>
          </span>
          <span v-show="this.int<=10">
            <button @click="increment()" class="btn btn-success text-white py-1 px-3">次の問題</button>
          </span>
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
       'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+'import java.util.stream.Collectors;'+'\n'+''+'\n'+'/*'+'\n'+'【問1】以下に用意したコレクションから、Filterを用いて99以下の値を持つ要素を排除して標準出力に出力しなさい'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'    var numList = new ArrayList<Integer>(Arrays.asList(100, 99, 200, 300, 50, 400));'+'\n'+'  '+'  //以下に処理を記載しなさい'+'\n'+'  }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+'import java.util.Comparator;'+'\n'+'import java.util.stream.Collectors;'+'\n'+''+'\n'+'/*'+'\n'+'【問2】以下に用意したコレクションをstreamAPIを用いて降順にsortし、パイプライン処理中に出力しsort出来ているか確認しなさい'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'    var numList = new ArrayList<Integer>(Arrays.asList(100, 99, 200, 300, 50, 400));'+'\n'+'  '+'  //以下に処理を記載しなさい'+'\n'+' '+' }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+'import java.util.Comparator;'+'\n'+''+'\n'+'/*'+'\n'+'【問3】以下に用意したコレクションをstreamAPIを用いて重複を削除したのち降順にsortし、パイプライン処理中に出力し確認しなさい'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'    var numList = new ArrayList<Integer>(Arrays.asList(100,100, 99, 200, 300, 50, 400, 99, 200));'+'\n'+'  '+'  //以下に処理を記載しなさい'+'\n'+'  }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+'import java.util.stream.Collectors;'+'\n'+''+'\n'+'/*'+'\n'+'【問4】以下に用意したコレクションの各値が、"JavaScript"に一致するものがあれば"Java"に変換し、新しいコレクションとして定義し標準出力に出力しなさい。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'    var languageList = new ArrayList<String>(Arrays.asList("GOlang","COBOL", "JavaScript", "C", "Python", "VBA", "Swift", "C#", "PHP"));'+'\n'+'  '+'  //以下に処理を記載しなさい'+'\n'+'  }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+'import java.util.function.Function;'+'\n'+'import java.util.stream.Collectors;'+'\n'+''+'\n'+'/*'+'\n'+'【問5】文字列の末尾に"株式会社"を追加するFunctionメソッドをラムダ式で実装し、'+'\n'+'それを用いて以下に用意したコレクションの各値を操作し新しいコレクションとして定義し標準出力に出力しなさい。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'    var companyList = new ArrayList<String>(Arrays.asList("ALH","カルビー", "キユーピー", "凸版印刷", "山崎製パン", "東京エレクトロン"));'+'\n'+'  '+'  //以下に処理を記載しなさい'+'\n'+'  }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+''+'\n'+'/*'+'\n'+'【問6】以下のコレクションの各要素に"印刷"という文字列を含む値が存在するかどうかを、真偽値で出力する処理をstreamAPIとラムダ式を用いて定義しなさい。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'    var companyList = new ArrayList<String>(Arrays.asList("ALH","カルビー", "キユーピー", "凸版印刷", "山崎製パン", "東京エレクトロン"));'+'\n'+'  '+'  //以下に処理を記載しなさい'+'\n'+'  }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+'import java.util.stream.Collectors;'+'\n'+''+'\n'+'/*'+'\n'+'【問7】以下のコレクションの各値が前株（株式会社〇〇）かどうかを判定し、その結果をboolean型のリストにして各要素を出力しなさい。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'    var companyList = new ArrayList<String>(Arrays.asList("ALH株式会社","株式会社SHIFT", "キユーピー株式会社", "凸版印刷株式会社", "株式会社リクルートホールディングス"));'+'\n'+'  '+'  //以下に処理を記載しなさい'+'\n'+' '+' }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+'import java.util.stream.Collectors;'+'\n'+''+'\n'+'/*'+'\n'+'【問8】以下のコレクションの各値が前株（株式会社〇〇）かどうかを判定し、その結果をvalueとしたMapを定義して出力しなさい。'+'\n'+'なお、key値は判定元の文字列をそのまま使用すること(1つ目の要素であれば {ALH株式会社=:false})'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'    var companyList = new ArrayList<String>(Arrays.asList("ALH株式会社","株式会社SHIFT", "キユーピー株式会社", "凸版印刷株式会社", "株式会社リクルートホールディングス"));'+'\n'+'  '+'  //以下に処理を記載しなさい'+'\n'+' '+' }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+'import java.util.stream.Collectors;'+'\n'+''+'\n'+'/*'+'\n'+'【問9】以下のコレクションの各値が前株（株式会社〇〇）かどうかを判定し、その結果をvalueとしたMapを定義して出力しなさい。'+'\n'+'なお、keyは判定元の文字列をそのまま使用する(1つ目の要素であれば {key:"ALH株式会社",value:false})'+'\n'+'ただし、重複した値が存在してもエラーにならないよう考慮すること。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'    var companyList = new ArrayList<String>(Arrays.asList("ALH株式会社","株式会社SHIFT", "株式会社SHIFT", "キユーピー株式会社", "凸版印刷株式会社", "株式会社リクルートホールディングス"));'+'\n'+'  '+'  //以下に処理を記載しなさい'+'\n'+' '+' }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+''+'\n'+'/*'+'\n'+'【問10】以下に用意したコレクションの各要素を乗算した結果をstreamAPIとreduceメソッドを用いて'+'\n'+'新たな変数に格納して標準出力に出力しなさい。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'    var integerList = new ArrayList<Integer>(Arrays.asList(5, 10, 15, 20, 25));'+'\n'+'  '+'  //以下に処理を記載しなさい'+'\n'+'  }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+''+'\n'+'/*'+'\n'+'【問11】以下の数値型のコレクション要素をstreamAPIのreduceメソッドを用いてそれぞれ乗算していったものに出力しなさい。'+'\n'+'但しreduce処理の初期値として5を与えること。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'    var integerList = new ArrayList<Integer>(Arrays.asList(5, 10, 15, 20, 25));'+'\n'+'  '+'  //以下に処理を記載しなさい'+'\n'+'  }'+'\n'+'}'
      ,
      'import java.util.ArrayList;'+'\n'+'import java.util.Arrays;'+'\n'+''+'\n'+'/*'+'\n'+'【問12(ラスト)】streamAPIとreduceメソッドを用いて以下のコレクションの各要素の文字数を合計しなさい。'+'\n'+'但し合計処理の途中で各要素の文字数を出力すること。'+'\n'+''+'\n'+'*/'+'\n'+'public class Main { '+'\n'+'  public static void main(String args[]) {'+'\n'+''+'\n'+'    var integerList = new ArrayList<String>(Arrays.asList("All for one", "Level up", "Over Drive", "High motivation", "Agile partner"));'+'\n'+'  '+'  //以下に処理を記載しなさい'+'\n'+'  }'+'\n'+'}'
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
    call_paiza_method() {
      this.$refs.paiza.post_create()
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