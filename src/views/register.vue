<template>
	<div class="register">
		<form>
			<label for="name">
				<input type="text" v-model="user.name" id="name" name="" placeholder="用户名" @focus="errShow=1" @blur="errShow=0">	
				<i v-show="errShow==1" class="err">*姓名不能为空且只能由3-16位字母、数字、下划线组成</i>
			</label>
			<label for="tel">
				<input type="tel" v-model="user.tel" id="tex" name="" placeholder="手机号" @focus="errShow=2" @blur="errShow=0">
				<i v-show="errShow==2" class="err">*手机必须为数字</i>
			</label>
			<label for="pwd">
				<input type="text" v-model="user.pwd" id="pwd" name="" placeholder="密码" @focus="errShow=3" @blur="errShow=0">
				<i v-show="errShow==3" class="err">*密码长度不能小于6位</i>
			</label>
			<button @click="sub">
				<span v-if="txt">立即注册</span>
				<span v-else>注册成功</span>
				<i class="fa fa-spinner fa-spin" v-show="icon"></i>
                <i class="fa fa-check" v-show="result"></i>
			</button>
			<br>
			<button @click="lookALLUsers">
				查看所有的用户
			</button>
		</form>
	</div>
</template>
<script> 
	import {mapActions,mapGetters} from 'vuex'
	export default{
		name:'register',
		data(){
			return{
				user:{
					name:'',   // 姓名
					tel:'',    // 电话号码
					pwd:''
				},
				txt:true,
				result:false,
				icon:false,   // 控制加载图片的显示和隐藏
				errShow:0,  // 控制错误消息的显示和隐藏
			}
		},
		computed:{
			// ...mapGetters(['users'])
		},
		methods:{
			...mapActions(['register']),
			// 查看所有用户的信息
			lookALLUsers(){
				// console.log(this.users);
			},
			// 进行注册
			sub(){
				if(this.user.name===''||!/^[a-zA-Z0-9_-]{3,16}$/.test(this.user.name)){
					this.errShow=1;   // 显示用户名验证的错误消息
					return;
				}
				if(this.user.tel===''||!/^\d{6}$/.test(this.user.tel)){
					this.errShow=2;   // 显示手机号验证的错误消息
					return;
				}
				if(this.user.pwd===''||!/^\d{6,}$/.test(this.user.pwd)){
					this.errShow=3;     // 显示密码验证的错消息
					return;
				}

				//  验证通过以后 、往数据库里添加一条数据
				this.icon=true;   // 显示加载的图标
				this.txt=true;   // 显示"立即注册"文字
				this.result=false;
				setTimeout(()=>{
					this.icon=false;    // 隐藏掉加载的图标
					this.result=true;   // 注册成功了
					this.txt=false;
					this.register(this.user);
					// 清空文本框
					this.user.name='';
					this.user.tel='';
					this.user.pwd='';
				},1000);
			}
		}
	}
</script>
<style scoped>
	.register{
		/*border:1px solid red;*/
		text-align: left;
		width: 700px;
	}
	.register label{
		display: block;  /*变成块级元素*/
		margin-bottom: 10px;
		/*width: 600px;*/
	}
	.register input{
		width: 300px;
		height: 47px;
		line-height: 47px;
		text-indent: 15px;
		border-radius: 4px;
		box-sizing: border-box;  /*保持盒子大小不变*/
		border: 1px solid #d5d5d5;
	}
	.register i.err{
		color: red;
	}
	.register button{
		width: 300px;
		height: 41px;
		line-height: 41px;
		background-color: #0f88eb;
		color:#fff;
		font-size:15px;
		border:none;
		border-radius: 4px;
		text-align: center;
		cursor: pointer;
		margin-top: 15px;
	}
</style>