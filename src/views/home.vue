<template>
	<div class="home">
		<h2>畅言让世界更美好</h2>	
		<div class="btns">
			<router-link to="/home/login" class="link">登录</router-link>
			<router-link to="/home/register" class="link">注册</router-link>
		</div>
		<div class="info">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default{
		name:'home',
		data(){
			return{

			}
		}
	}
</script>
<style scoped>
	.home{
		height: 100vh;
		width: 100vw;
		background-image: url('../assets/images/bg.png');
		text-align: center;
	}
	h2{
		font-size:70px;
		color: #0f88eb;
		font-weight: 700;
	}
	.btns{
		position: absolute;
		top:10px;
		right: 0;
	}
	.btns .link{
		text-decoration: none;
		color:#1acd71;
	}
	.btns .link:hover{
		color: red;
	}
	.info{
		margin-top: 30px;
		position: absolute;
		left: 40%;	
	}
</style>