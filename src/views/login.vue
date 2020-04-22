<template>
	<div class="login">
		<form>
			<label for="name">
				<input v-model="user.name" type="text" id="name" placeholder="请输入用户名" name="">	
			</label>
			<label for="pwd">
				<input v-model="user.pwd" type="text" id="pwd" placeholder="请输入密码" name="" class="pwd">
			</label>
			<button @click="sub">
				登录
				<i class="fa fa-spinner fa-spin" v-show="icon"></i>
			</button>
			<div v-show="err" style="color:red;height: 30px;">*用户名或密码错误</div>
		</form>	
	</div>
</template>
<script>
	import {mapActions} from 'vuex'
	export default{
		name:'name',
		data(){
			return{
				icon:false,
				err:false,   // 控制错误消息的显示和隐藏
				user:{
					name:'',	 // 保存用户名
					pwd:''      // 保存密码
				}
			}
		},
		methods:{
			...mapActions(['login']),
			// 登录
			sub(){
				let that=this;
				that.icon=true;   // 显示加载图标
				setTimeout(function(){
					// 进行登录操作
					that.login(that.user); // 传递参数
					// 注意 "==" 和 "==="的区别
					if(sessionStorage.loginStatus&&sessionStorage.loginStatus==='1'){
						console.log('登录成功');
						that.$router.push({name:'mailList'})
					}else{
						that.err=true;   // 显示错误消息
						that.icon=false;   // 隐藏加载的图标
					}
				},1000);
			}
		}
	}
</script>
<style scoped>
	.login label{
		display: block;
		margin-bottom: 10px;
	}
	.login input{
		width: 300px;
		height: 47px;
		line-height: 47px;
		box-sizing: border-box;  /*保持盒子大小不变*/
		border: 1px solid #d5d5d5;
		border-radius: 4px;
		border-bottom: none;
		text-indent: 15px;
	}
	.login input.pwd{
		border-bottom: 1px solid #d5d5d5;
	}
	.login button{
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