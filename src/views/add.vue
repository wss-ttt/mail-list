<template>
	<div class="add">
		
		<div class="form">
			<h2>添加联系人</h2>
			<label for="name">
				<span>姓名:</span>
				<input type="text" name="" v-model="contact.name"  id="name" placeholder="请输入姓名">
				<i v-show="nameIn" style="color:red;">*姓名不能为空且只能由字母、数字、下划线组成</i>
			</label>
			<label for="">
				<span>电话号码:</span>
				<input type="text" name="" v-model="contact.tel" id="tel" placeholder="请输入电话号码">
				<i v-show="telIn" style="color: red;">*不能为空且全部为数字组成</i>
			</label>
			<label>
				<span>与我的关系:</span>
				<select v-model="contact.status">
					<option selected>朋友</option>
					<option>亲人</option>
					<option>同学</option>
				</select>
			</label>
			<label>
				<span></span>
				<button class="addBtn" :class="{disabled:save}" :disabled="save" @click="addContact">添加</button>
				<!-- <button :disabled="save" @click="test">aaa</button> -->
			</label>
		</div>
	</div>	
</template>
<script>
	export default{
		name:'add',
		data(){
			return{
				disabled:true,
				contact:{ 
					name:'',   // 姓名
					tel:'',    // 联系方式
					status:'',   // 关系
				}
			}
		},
		computed:{
			// 姓名的校验
			nameIn(){
				return !/\w$/.test(this.contact.name);
				// return /\W/g.test(this.contact.name);
			},
			// 电话号码的校验
			telIn(){
				return !/\d$/.test(this.contact.tel);
				// return /\D/g.test(this.contact.tel);
			},
			save(){
				return (this.nameIn||this.telIn);
			}
		},
		methods:{
			// 添加联系人
			addContact(){
				console.log("第一层");
				this.$emit('addContact',this.contact);
				alert('添加成功');
				// 清空文本框
				this.contact.name='';
				this.contact.tel='';
				this.status='';
			},
			test(){
				alert('好好学习');
			}
		}
	}
</script>
<style scoped>
	.add{
		/*border:1px solid red;*/
	}
	.add h2{
		margin-bottom: 30px;
		text-align: center;
	}
	.add .form{
		width: 800px;
		/*border: 1px solid red;*/
		margin: 10px auto;
	}
	.add .form label{
		display: block;
		margin-bottom: 15px;
	}
	.add .form label span{
		display: inline-block;
		width: 100px;
		text-align: right;
		margin-right: 10px;
	}
	.add .form label input{
		width: 300px;
	    height: 40px;
	    padding-left: 10px;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;    /*保持盒子大小不变*/
	    font-size: 16px;
	    border-radius: 4px;
	    border: 1px solid #ccc;
	    background-color: #fff;
	}
	.add .form label select{
		height: 35px;
	    width: 150px;
	    border: 1px solid #ccc;
	    padding-left: 10px;
	    border-radius: 4px;
	    font-size: 16px;
	    -webkit-box-sizing: border-box;
	    outline: none;
	    box-sizing: border-box;   /*保持盒子大小不变*/
	}
	.add .form label .addBtn{
		width: 300px;
	    border: none;
	    height: 40px;
	    font-size: 18px;
	    border-radius: 5px;
	    cursor: pointer;
	    background-color: #0f88eb;
	    color: #fff;
	}
	.add .form label .addBtn.disabled{
		background-color: #ccc;
		cursor: unset;
	}
</style>