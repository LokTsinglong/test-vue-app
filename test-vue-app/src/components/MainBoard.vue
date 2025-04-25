<template>
    <div>
        <!-- vue+element plus 里面的breadcrumb导航面包屑 -->
        <!-- 这边el-breadcrumb代表页面顶部一整块状条导航栏 -->
        <el-breadcrumb separator="|" class="bread">
            <el-breadcrumb-item :to="{ path: '/' }" class="font" style="font-size:20px">
                <span>医疗知识图谱智能问答系统</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item class="font">
                <router-link to="/main/chat">
                    <span @click="change(1)" :class="{'highlight':index===1}">对话系统</span>
                </router-link>
            </el-breadcrumb-item>
            <el-breadcrumb-item class="font">
                <router-link to="/main/neovisual">
                    <span @click="change(2)" :class="{'highlight':index===2}">图谱可视化</span>
                </router-link>
            </el-breadcrumb-item>
            <el-breadcrumb-item class="font" >
                <router-link to="/main/backplat">
                    <span @click="change(3)" :class="{'highlight':index===3}">后台管理</span>
                </router-link>
            </el-breadcrumb-item>
            <span class="name">你好，{{username}}</span>
        </el-breadcrumb>
        <div v-if="isshow" class="welcome">{{ welcomeMessage }}  </div>
        <!-- 初始显示欢迎语，点击导航后隐藏（由 change 方法控制 isshow=false） -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
// SFC（Single File Component）单文件组件的脚本部分
export default {
    // 定义组件名称
    name:'MainBoard',

    // 为什么每个单文件都必须要有一个 data() 函数？
    // 因为data()函数定义组件私有响应式状态。保证每个组件实例拥有独立数据副本（避免多实例共享数据污染）
    data(){
        return{
            // 用于判断当前点击的导航栏
            index:0, 
            //从 Vuex 获取用户名
            username:this.$store.state.username,
            isshow:true,
            welcomeChars: [], // 用于存储每个字符的数组  
        }
    },
    // 存放组件方法（事件处理、逻辑操作）
    methods:{
        change(num){
            this.index = num
            this.isshow =false
        }
    },
    // 计算属性（computed）是 Vue.js 中的一种特殊属性，用于根据其他数据计算出一个新的值
    // 计算属性是基于它们的依赖进行缓存的，只有在相关依赖发生变化时才会重新计算
    computed: {  
        welcomeMessage() {  
            return this.welcomeChars.join(''); // join方法用于将数组（或一个类数组对象）的所有元素连接到一个字符串中，中间不是空格符
        },  
    }, 
    // 这里的mounted() 是 Vue 生命周期钩子函数之一，表示组件被挂载到 DOM 上后会执行的函数
    // 也就是在页面加载完成后执行的函数
    // 通过 mounted 中的定时器逐字拼写（打字机效果）
    mounted() {  
        const message = "欢迎使用智能问答系统!";  
        let index = 0;  
        // 每隔指定时间（150ms）重复执行回调函数。
        // setInterval(回调函数, 间隔时间)
        // function(){} 函数化简 （）=> { }  箭头函数
        // 这里的回调函数是一个匿名函数，表示每隔150ms执行一次
        const interval = setInterval(() => {  
        if (index < message.length) {  
            this.welcomeChars.push(message[index]);  
            index++;  
        } else {  
            clearInterval(interval); // 当所有字符都添加完后，清除定时器  ，一定要删除，否则会消耗内存
        }  
        }, 150);  
    },  
}
</script>

<style lang="less">
    .bread{
        text-align: center ;
        background-color: black;
        height: 50px;
        // 要为组件设置一个类的名称，否则样式不生效
        .font {
            span{
                cursor:pointer;
                margin-left: 5px;
                line-height: 50px;
                color: white;
            }
            .highlight{
                color:#fc9105
            }            
        }
        .name{
            float:right;
            color:#fff;
            font-weight: bold;
            line-height: 50px;
            margin-right: 15px;
        }
    }
    .welcome{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:300px;
        font-size: 50px;
        font-family: 'KaiTi';
        color:#5d554c;
    }
</style>