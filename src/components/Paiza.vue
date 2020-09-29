<template>
  <div class="paiza">
    <div v-show="loading" class="font-mini">コンパイル中...</div>
    <pre class="result text-left p-2" v-show='!result_sentence==""'>
{{ result_sentence }}
    </pre>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  props: ["content"],
  data() {
    return {
      loading: false,
      sleep: null,
      counter: 1,
      result_sentence: "",
      create_result: {
        id: null,
        status: "",
      },
      status_result: {
        status: "",
      },
      detail_result: {
        build_result: "",
        build_stderr: "",
        status: "",
        stdout: "",
        stderr: "",
        time: null,
        result: "",
      },
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    post_create() {
      this.loading = true;

      const API_CREATE_URL = "http://api.paiza.io/runners/create";

      axios
        .post(API_CREATE_URL, {
          source_code: this.content,
          language: "java",
          input: "",
          longpoll: "",
          longpoll_timeout: "",
          api_key: "guest",
        })

        .then((response) => {
          this.create_result = response.data;
          console.log(response.data);
          this.sleep = (msec) =>
            new Promise((resolve) => setTimeout(resolve, msec));
          this.get_detail();
        })
        .catch((err) => {
          console.log("err:", err);
        });
    },

    async get_status() {
      //paiza.io APIのコンパイル処理時間を待つための遅延
      await this.sleep(2000);
      const API_CONFIRM_URL = "http://api.paiza.io/runners/get_status";

      const API_CONFIRM_PARAM = {
        id: this.create_result.id,
        api_key: "guest",
      };

      axios
        .get(API_CONFIRM_URL, {
          params: API_CONFIRM_PARAM,
        })

        .then((response) => {
          this.status_result = response.data;
          console.log("1.5番目" + this.status_result.status);
        })
        .catch((err) => {
          console.log("err:", err);
        });
      console.log("2番目");
    },

    async get_detail() {
      console.log("1番目");
      await this.get_status();

      console.log("3番目");
      const API_RESULT_URL = "http://api.paiza.io/runners/get_details";

      const API_CONFIRM_PARAM = {
        id: this.create_result.id,
        api_key: "guest",
      };

      //HTTPレスポンスを待つための遅延
      await this.sleep(1000);
      this.loading = false;
      if (this.status_result.status == "completed") {
        axios
          .get(API_RESULT_URL, {
            params: API_CONFIRM_PARAM,
          })

          .then((response) => {
            this.detail_result = response.data;
            console.log(response.data);
            console.log(this.detail_result.build_result);
            console.log(this.detail_result.build_stderr);
            if (this.detail_result.result == "success") {
              this.result_sentence =
                "【実行結果】" + "\n" + this.detail_result.stdout;
            } else if (this.detail_result.build_result == "failure") {
              this.result_sentence =
                "【コンパイルエラー】" + "\n" + this.detail_result.build_stderr;
            } else if (this.detail_result.result == "failure") {
              this.result_sentence =
                "【例外発生】" + "\n" + this.detail_result.stderr;
            }
          })
          .catch((err) => {
            console.log("err:", err);
            this.result_sentence = "【エラー】"+ "\n" + "結果を取得できませんでした。再度実行してください。";
          });
      } else {
        this.result_sentence = "【エラー】"+ "\n" + "結果を取得できませんでした。再度実行してください。";
      }
    },
  },
};
</script>

<style scoped>
.result {
  margin: 0;
  background-color: #272822;
  color: #F8F8F2;
}
.paiza {
  overflow: auto;
}
</style>