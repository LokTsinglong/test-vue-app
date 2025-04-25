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
export default {
    name:'MainBoard',
    data(){
        return{
            index:0,
            username:this.$store.state.username,
            isshow:true,
            welcomeChars: [], // 用于存储每个字符的数组  
        }
    },
    methods:{
        change(num){
            this.index = num
            this.isshow =false
        }
    },
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