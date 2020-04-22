<template>
	<div class="list">
		<div class="head">
			<h2>畅言</h2>	
			<div class="info">
				<span>您好，{{user.name}}</span>
				<img src="../assets/images/contact.jpg">
			</div>
		</div>
		<div class="left">
			<ul class="nav">
				<li :class="{active:currentIndex==0}" @click="currentIndex=0">
					<!-- 设置路由跳转 -->
					<router-link to="/mailList" class="link"><i class="fa fa-address-book-o"></i> 通讯录</router-link>
				</li>
				<li :class="{active:currentIndex==1}" @click="currentIndex=1">
					<router-link to="/mailList/add" class="link"><i class="fa fa-reorder"></i> 添加信息</router-link>
				</li>
				<li :class="{active:currentIndex==2}" @click="currentIndex=2">
					<router-link to="/mailList/personal" class="link"><i class="fa fa-user-o"></i> 个人中心</router-link>
				</li>
			</ul>
			<div class="out">
				<span @click="out"><i class="fa fa-cog"></i>退出登录</span>
			</div>
		</div>
		<div class="right">
			<router-view @save="save" :contacts="contacts"  @del="remove" @update="update" @addContact="addContact" ></router-view>
		</div>
	</div>
</template>
<script>
	import {mapActions,mapGetters,mapState} from 'vuex'
	export default{
		name:'list',
		data(){
			return{
				user:{},
				currentIndex:-1   // 当前激活的导航菜单
			}
		},
		computed:{
			...mapGetters(['contacts']),

		},
		/*computed:mapState({
			contacts(state){
				return state.contacts.contacts
			}
		}),*/
		mounted(){
			// 从本地取出当前用户的信息
			let user=JSON.parse(sessionStorage.getItem('curUser'));
			this.user=user;
			// 初始化数
			this.$store.dispatch('contactsInit');
			console.log(this.contacts);
		},
		methods:{
			...mapActions(['saveInfo','contactsDel','contactUpdate','contactAdd','signOut']),
			// 点击保存保存按钮 进行保存信息
			save(user){
				// user就是从子组件中传递过来的参数
				// console.log(user);
				this.saveInfo(user);
			},
			// 更新联系人操作
			update(contact){
				this.contactUpdate(contact);
			},
			// 删除联系人操作
			remove(id){
				console.log('list:',id);
				this.contactsDel(id);
			},
			// 添加联系人操作
			addContact(contact){
				console.log('第二层');
				this.contactAdd(contact);
			},
			// 退出登录
			out(){
				this.signOut();  // 退出登录
				// 同时回到登录页面去
				// this.$router.push({name:'/home/login'});   // 这种写法是错误的
				this.$router.push('/home/login');
			}
		}
	}
</script>
<style scoped>
	.list .head{
		width: 100%;
		height: 90px;
		line-height: 90px;
		background-image: url('../assets/images/bg.png');
		background-size: cover;  
		display: flex; 
		justify-content: space-between;
	}
	.list .head h2{
		font-size: 50px;
	    padding-left: 30px;
	    color: #0f88eb;
	    font-family: "\5E7C\5706";
	}
	.list .head .info{
		display: flex;
		align-items: center;
		padding-right: 30px;
	}
	.list .head .info span{
		margin-right: 10px;
	}
	.list .head .info img{
		width: 90px;
		height: 90px;
		border-radius: 50%;
	}

	.list .left{
		top:90px;
		width: 300px;
		position:absolute; 
		bottom: 0;
		border: 1px solid #ccc;
		background-color: #eee;
		z-index: 5;
	}
	.list .left ul.nav li{
		height: 50px;
		line-height: 50px;
		padding-left: 30px;
		background-color: #fff;k
		font-size:17px;
		border:1px solid #ccc;
		cursor: pointer;
		margin-bottom: 2px;
		border-top: none;
	}
	.list .left ul.nav li .link{
		width: 100%;
		display: block;
		height: 100%;
		text-decoration: none;
	}
	.list .left ul.nav li.active{
		background-color: #0f88eb;
		color: #fff;
	}
	.list .right{
		/*background-color: red;*/
		position: absolute;
		top:90px;
		bottom: 0px;
		width: 100%;
		padding-left: 300px;
		box-sizing: border-box;
		z-index: 1;	
		overflow: auto;
		/*border:1px solid red;*/
		background-color: #f7fafc;
	}
	.out{
		text-align: right;
		position: absolute;
		bottom: 10px;
		right: 0px;
		cursor: pointer;
	}
</style>