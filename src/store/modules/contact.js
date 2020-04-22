// 初始化数据
const state = {
  contacts: [], // 保存联系人
};

// getters
const getters = {
	contacts(state){
    return state.contacts;   // 返回数据
	}
};

let contactId = 0;
// actions
const actions = {
	// 初始化所有的联系人(模拟从数据库中读取数据)
  contactsInit({ commit }, params) {
    
    let contacts = [
      { name: '乔峰', tel: 1234555656, status: "亲人" },
      { name: '杨过', tel: 1234555656, status: "亲人" },
      { name: '小龙女', tel: 1234555656, status: "朋友" },
      { name: '黄蓉', tel: 1234555656, status: "同学" },
    ];
    contacts=contacts.map((item,index)=>{
    	// 添加一个id属性
    	item.id=++contactId;
    	return item;
    });
    commit('contactInit',contacts);
  },
  // 删除联系人
  contactsDel({commit},params){
  	console.log('第三层:',params);
  	commit('contactsDel',params);
  },
  // 修改联系人信息
  contactUpdate({commit},params){
  	commit('contactUpdate',params);
  },
  // 添加联系人
  contactAdd({commit},params){
  	commit('contactAdd',params);
  }
};


// mutations
const mutations = {
	// 联系人初始化
	contactInit(state,params){
    console.log('contactInit');
		state.contacts=params;
	},
	// 删除联系人
	contactsDel(state,params){
		console.log('第四层:',params);
		state.contacts = state.contacts.filter((item,index)=>{
			// return !params==item.id;   // 这里的写法是错的
			return params!=item.id;
		});
	},
	// 更新联系人信息
	contactUpdate(state,params){
		for(let i=0;i<state.contacts.length;i++){
			if(state.contacts[i].id===params.id){
				state.contacts[i].name=params.name;   // 修改姓名
				state.contacts[i].tel=params.tel;    // 修改联系方式
				break;
			}
		}
	},
	// 添加联系人
	contactAdd(state,params){
		console.log(params);
		let contact={
			id:++contactId,
			...params
		};
		console.log(contact);
    state.contacts.push(contact);

	}

};

export default {
  state,
  getters,
  actions,
  mutations
}
