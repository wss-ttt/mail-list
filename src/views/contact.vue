<template>
	<div class="contact">
		<h2>联系人列表</h2>
		<div class="search">
			<label>
				<input type="text" placeholder="请输入搜索联系人" v-model="search" name="">
				<i class="fa fa-search"></i>
			</label>
		</div>
		<div class="all">
			<span>共有{{contacts.length}}个联人</span>
		</div>
		<div class="selected">
			<input type="radio" name="contacts" checked @click="selectStatus=1">所有联系人
			<input type="radio" name="contacts" @click="selectStatus=2">亲人
			<input type="radio" name="contacts" @click="selectStatus=3">朋友
			<input type="radio" name="contacts" @click="selectStatus=4">同学
		</div>
		<div v-if="newContacts.length" style="margin-top: 40px;margin-left: 200px;">
			<contactItem  v-for="item in newContacts" :key="item.id" :item="item" @del="del" @update="update"></contactItem>
		</div>
		<div v-else class="none" style="font-size:50px;margin-top: 30px;">没有联系人</div>
		<!-- <button @click="lookAll">查看所有的联系人</button> -->
	</div>
</template>
<script>
	import { mapState,mapActions,mapGetters} from 'vuex'
	import contactItem from './contactItem.vue'
	export default{
		name: 'contact',
		data(){
			return{
				search:'',   // 存放搜索的内容
				selectStatus:1,   // 进行选择
			}
		},
		props:['contacts'],   // 接收父组件传递过来的数据
		methods:{
			...mapActions(['contactsInit','contactsDel']),
			// 删除操作
			del(id){
				console.log('第二层:',id);
				this.$emit('del',id);
				// this.contactsDel(id);
			},
			// 更新操作
			update(contact){
				this.$emit('update',contact);
			},
			// 查看所有的联系人
			lookAll(){
				console.log(this.contacts);
			}
		},
		computed:{
			newContacts(){
				if(this.search){
					return this.contacts.filter((item,index)=>{
						// 实现搜索功能
						return item.name.indexOf(this.search)!=-1;
					});
				}else{
					switch(this.selectStatus){
						case 1:
							console.log('所有的联系人');
							return this.contacts;  // 所有的联系人
							break;
						case 2:
							console.log('亲人');
							return this.contacts.filter((item,index)=>{
								return item.status==='亲人'	
							});
							break;
						case 3:
							console.log('朋友');
							return this.contacts.filter((item,index)=>{
								return item.status==='朋友';
							});
							break;
						case 4:
							console.log('同学');
							return this.contacts.filter((item,index)=>{
								return item.status==='同学';
							});
							break;
					}
				}
			}
		},
		components:{
			contactItem,      // 注册组件     
		}
	}
</script>
<style scoped>
.contact{
	width: 100%;
	/*background-color: green;*/
	text-align: center;
}
.search{
	/*border:1px solid red;*/
}
.search input{
	width: 640px;
    height: 39px;
    border: 2px solid #eee;
    border-right: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding-left: 10px;
    vertical-align: middle;
    font-size: 16px;
    outline: none;
}
.selected{
	margin-top: 15px;
}
.selected input{
	margin-right: 10px;
}
</style>