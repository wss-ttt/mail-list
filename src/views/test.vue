<template>
	<div class="test">
		<div class="head">aa</div>	
		<div class="main">
			<div class="left"></div>
			<div class="right">aa</div>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
	.test .head{
		width: 100%;
		height: 90px;
		background-color: #ccc;
	}	
	.test .main{
		display: flex;
		width: 100%;
	}
	.test .main .left{
		width: 300px;
		height: 100%;
		position: fixed;		
		background-color: red;
	}
	.test .main .right{
		flex: 1;
		background-color: green;
	}
</style>
