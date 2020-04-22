

// 初始化数据
const state={
};


const getters={

}
// actions
const actions={
	register({commit},params){
		commit('register',params);
	},
	login({commit},params){
		commit('login',params);
	},
	getUser({commit},params){
		commit('getUser',params);
	},
	saveInfo({commit},params){
		commit('saveInfo',params);
	},
	signOut({commit},params){
		commit('signOut',params);
	}
};

// mutations
const mutations={
	// 注册
	register(state,params){
		console.log('register');
		let data=JSON.parse(localStorage.getItem('users'))||[]; // localStorage
		data.push(params);
		localStorage.setItem('users',JSON.stringify(data));
	},
	// 登录
	login(state,params){
		console.log(params);
		let data=JSON.parse(localStorage.getItem('users'));
		sessionStorage.loginStatus=0;   // 默认是没有登录的状态
		for(let i=0;i<data.length;i++){
			if(data[i].name===params.name&&data[i].pwd===params.pwd){
				sessionStorage.loginStatus=1;   // 改变登录状态 1:登录成功  0:登录失败
				// 登录时还需要保存用户的手机号码
				let tel=data[i]['tel'];
				let name=params.name;
				let pwd=params.pwd;
				let curUser={
					"name":name,
					"tel":tel,
					"pwd":pwd
				};
				// 保存当前用户的信息
				sessionStorage.setItem('curUser',JSON.stringify(curUser));
				break;
			}
		}
	},
	// 修改个人信息
	saveInfo(state,params){
		console.log('111');
		let data=JSON.parse(localStorage.getItem('users'));
		for(let i=0;i<data.length;i++){
			if(data[i].name===params.name){
				// 修改信息 姓名是不能修改的 姓名作为主键
				data[i].tel=params.tel;
				data[i].pwd=params.pwd;
				break;
			}
		}
		// 保存最新的数据
		localStorage.setItem('users',JSON.stringify(data));
		// 还需要保存当前用户的信息
		let curUser={
			name:params.name,
			pwd:params.pwd,
			tel:params.tel
		};
		sessionStorage.setItem('curUser',JSON.stringify(curUser));
	},
	// 退出登录
	signOut(state,params){
		console.log('退出登录');
		// sessionStorage.setItem('loginStatus',0);
		// sessionStorage.setItem('curUser',''); // 清空当前登录的信息
		sessionStorage.removeItem('loginStatus');
		sessionStorage.removeItem('curUser');  // 删除掉当前登录的信息
	}
};


// 导出
export default{
	state,
	actions,
	getters,
	mutations
}