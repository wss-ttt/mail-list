<template>
	<div class="personal">
		<h2>个人信息</h2>
		<div class="container">
			<label for="name">
				<span>姓名:</span>
				<input type="text" v-model="user.name" name="" class="disabled">	
			</label>
			<label for="tel">
				<span>电话号码:</span>
				<input type="text" v-model="user.tel" name="" :disabled="disabled" :class="{disabled:disabled}">
			</label>
			<label for="pwd">
				<span>密码:</span>
				<input type="text" v-model="user.pwd" name="" :disabled="disabled" :class="{disabled:disabled}">
			</label>
			<label v-if="isBtnShow">
				<span></span>
				<button class="edit" @click="edit">编辑信息</button>
			</label>
			<label v-else class="editing">
				<span></span>
				<button class="save" @click="save">保存</button>
				<button class="cancel" @click="cancle">取消</button>
			</label>
			<label>
				<span></span>
				<button @click="lookALLUsers" class="look">查看所有的用户</button>
			</label>
		</div>
	</div>	
</template>
<script>
	import {mapActions,mapGetters} from 'vuex'
	export default{
		name:'personal',
		data(){
			return{
				isBtnShow:true,  // 控制按钮的显示和隐藏
				disabled:true,   // 是否可以编辑  刚开始是不能编辑的 需要点击按钮才能编辑
				user:{
					name:'',
					tel:'',
					pwd:''
				}
			}
		},
		mounted(){
			let user=JSON.parse(sessionStorage.getItem('curUser'));
			this.user=user;
		},
		computed:{
			// ...mapGetters(['users'])
		},
		methods:{
			...mapActions(['save']),
			// 点击编辑按钮
			edit(){
				this.disabled=false;  // 此时可以编辑的
				this.isBtnShow=false;   // 按钮的显示和隐藏
			},
			// 点击取消按钮
			cancle(){
				this.disabled=true;   // 此时变成不可以编辑的状态
				this.isBtnShow=true;   // 显示出"编辑"的按钮
			},
			// 点击保存按钮
			save(){
				console.log(1);
				this.$emit('save',this.user);
				this.disabled=true;  // 恢复到不可以编辑的状态
				this.isBtnShow=true;    // 隐藏掉"保存"和"取消"的按钮
			},
			// 查看所有的用户信息
			lookALLUsers(){
				let users=JSON.parse(localStorage.users);
				console.log(users);
			}
		}
	}
</script>
<style scoped>
	.personal{
		/*background-color: yellow;*/
		/*border:1px solid red;*/
		/*text-align: center;*/
	}
	.personal h2{
		text-align: center;
	}
	.personal .container{
		width: 600px;
		/*border: 1px solid red;*/
		margin: 10px auto;
	}
	.personal label{
		display: block;
		width: 770px;
		height: 42px;
		/*border:1px solid #fff;*/
		margin-bottom: 10px;
	}
	.personal span{
		display: inline-block;
		width: 87px;
		text-align: right;
		/*border: 1px solid black;*/
		margin-right: 10px;
	}
	.personal label input{
		font-size: 17px;
		outline: none;
		text-indent: 15px;
		width: 300px;
		height: 40px;
		line-height: 40px;
		text-indent: 15px;
		border-radius: 4px;
		box-sizing: border-box;  /*保持盒子大小不变*/
		border: 1px solid #d5d5d5;
	}
	.personal label input.disabled{
		background-color: #f7fafc;
		border:none;
	}
	.edit,.look{
		width: 300px;
		border: none;
	    height: 40px;
	    font-size: 18px;
	    border-radius: 5px;
	    cursor: pointer;
	    background-color: #0f88eb;
	    color: #fff;
	}
	.editing button{
	    width: 147px;
	    height: 40px;
	    font-size: 18px;
	    border-radius: 5px;
	    cursor: pointer;
	    color: #fff;
	    border: none;
	    outline: none;
	}
	.editing button.save{
		background-color: #0f88eb;
		margin-right: 5px;
	}
</style>