<template>
	<div class="list">
		<div class="item" v-if="isShow">
			<div class="txt">
				<h3 class="name">{{item.name}}</h3>
				<p class="tel">{{item.tel}}</p>
			</div>
			<!-- 编辑图标 -->
			<button class="edit" @click="isShow=false"><i class="fa fa-edit"></i></button>
			<!-- 删除图标 -->
			<button class="delete" @click="del"><i class="fa fa-trash-o"></i></button>
		</div>	
		<div class="item" v-else>
			<div class="txt">
				<input type="text" name="" v-model="name">
				<input type="tel" name="" v-model="tel">
			</div>
			<!-- 保存图标 -->
			<button class="save" @click="update"><i class="fa fa-check"></i></button>
			<!-- 删除图标 -->
			<button class="return" @click="isShow=true"><i class="fa fa-times"></i></button>
		</div>
	</div>
</template>
<script>
	export default{
		name:'contactItem',
		data(){
			return{
				id:this.item.id,     // 编号
				name:this.item.name,   // 姓名
				tel:this.item.tel,    // 电话号码
				isShow:true,   // 控制显示和隐藏的
			}
		},
		props:['item'],
		methods:{
			// 点击删除图标
			del(){
				console.log('第一层:',this.item.id);
				this.$emit('del',this.item.id);
			},
			// 耿霞操作
			update(){
				this.isShow=true;
				this.$emit('update',{
					id:this.item.id,
					name:this.name,
					tel:this.tel
				});
			}
		}
	}
</script>
<style scoped>
	.list{
		width: 1000px;
		box-sizing: border-box;  /*保持盒子大小不变*/
	}
	.list .item{
		/*display: inline-block;*/
		float: left;
		width: 220px;
		height: 58px;
		margin-bottom: 25px;
	}
	.list .item .txt{
		width: 160px;
		padding-left: 10px;
		display: inline-block;
	}
	.list .item:hover{
		border: 1px solid #0f88eb;
    	border-radius: 4px;
	}
	.list .item:hover button{
		display: inline-block;
	}
	.list .item button{
		height: 32px;
	    padding: 0;
	    margin-top: 11px;
	    border: none;
	    color: #0f88eb;
	    background: none;
	    border-radius: 4px;
	    cursor: pointer;
	    display: none;
	}
	.list .item input{
		display: block;
		width: 125px;
		border:none;
		font-size:18px;
	}
	.list .item input:focus,.list .item button:focus{
		outline: none;   /*去掉自带的蓝色边框*/
	}
	.list .item input.name{
		margin-bottom: 3px;
	}
	.list .item button.delete{
		color: rgb(216, 17, 17);
	}
	.list .item button i{
		font-size:20px;
	}
</style>