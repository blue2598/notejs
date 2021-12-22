<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix"><span>对象</span></div>
      <div class="card-inner">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card">
              <div class="title-left">递归实现对象深拷贝</div>
              <pre><code class="language-xml line-numbers">copy(data){
        let res=data instanceof Array ? [] : {};
        for(let key in data){
          res[key] = typeof data[key] === "object" ? this.copy(data[key]) : data[key];
        }
        return res
      },
                </code></pre>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card">
              <div class="title-left">工厂函数创建对象</div>
              <pre><code class="language-xml line-numbers">
              function user(name){
                return {
                  name,//相当于name:name
                  show(){
                    return this.name
                  }
                }
              }
              let ysl = user("ysl");
              let zs = user("zs");
              console.log(zs.show())
              </code></pre>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card">
              <div class="title-left">构造函数创建对象</div>
              <pre><code class="language-xml line-numbers">
function User(name){
        this.name=name,
        this.show=function(){
          return this.name
        }
      }
      let ysl = new User("ysl");
      console.log(ysl)
      console.log(ysl.show())
              </code></pre>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        name: 'ysl',
        lesson: ['数据结构', '高等数学'],
        fav: { title: 'jjj', alt: '34234' },
        f: function() {}
      }
    };
  },

  created() {
    let result = this.copy(this.data);
    console.log(result);
    this.createObject();
    this.createObject2();
    let obj1 = {
      a:{
        b:1
      }
    }
  },
  mounted(){
      Prism.highlightAll();
  },
  methods: {
    copy(data) {
      let res = data instanceof Array ? [] : {};
      for (let key in data) {
        res[key] = typeof data[key] === 'object' ? this.copy(data[key]) : data[key];
      }
      return res;
    },
    createObject() {
      // let ysl = {
      //   name: 'ysl',
      //   show() {
      //     return this.name;
      //   }
      // };
      // let zs = {
      //   name:'zs',
      //   show(){
      //     return this.name
      //   }
      // }
      // console.log(zs.show())
      function user(name){
        return {
          name,//相当于name:name
          show(){
            return this.name
          }
        }
      }
      let ysl = user("ysl");
      let zs = user("zs");
      console.log(zs.show())
    },
    createObject2(){
      function User(name){
        this.name=name,
        this.show=function(){
          return this.name
        }
      }
      let ysl = new User("ysl");
      console.log(ysl)
      console.log(ysl.show())
    }
  }
};
</script>

<style></style>
