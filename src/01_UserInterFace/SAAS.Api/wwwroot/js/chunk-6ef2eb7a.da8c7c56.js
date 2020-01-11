(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ef2eb7a"],{"30d9":function(e,t,n){},3678:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Card",[n("tables",{ref:"tables",attrs:{editable:"",searchable:"",border:!1,size:"small","search-place":"top",totalCount:e.stores.role.query.totalCount,columns:e.stores.role.columns,"row-class-name":e.rowClsRender},on:{"on-delete":e.handleDelete,"on-edit":e.handleEdit,"on-select":e.handleSelect,"on-selection-change":e.handleSelectionChange,"on-refresh":e.handleRefresh,"on-page-change":e.handlePageChanged,"on-page-size-change":e.handlePageSizeChanged},model:{value:e.stores.role.data,callback:function(t){e.$set(e.stores.role,"data",t)},expression:"stores.role.data"}},[n("div",{attrs:{slot:"search"},slot:"search"},[n("section",{staticClass:"dnc-toolbar-wrap"},[n("Row",{attrs:{gutter:16}},[n("Col",{attrs:{span:"16"}},[n("Form",{attrs:{inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[n("FormItem",[n("Input",{attrs:{type:"text",search:"",clearable:!0,placeholder:"输入关键字搜索..."},on:{"on-search":function(t){return e.handleSearchRole()}},model:{value:e.stores.role.query.kw,callback:function(t){e.$set(e.stores.role.query,"kw",t)},expression:"stores.role.query.kw"}},[n("Select",{staticStyle:{width:"60px"},attrs:{slot:"prepend",placeholder:"删除状态"},on:{"on-change":e.handleSearchRole},slot:"prepend",model:{value:e.stores.role.query.isDeleted,callback:function(t){e.$set(e.stores.role.query,"isDeleted",t)},expression:"stores.role.query.isDeleted"}},e._l(e.stores.role.sources.isDeletedSources,(function(t){return n("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.text))])})),1),n("Select",{staticStyle:{width:"60px"},attrs:{slot:"prepend",placeholder:"角色状态"},on:{"on-change":e.handleSearchRole},slot:"prepend",model:{value:e.stores.role.query.status,callback:function(t){e.$set(e.stores.role.query,"status",t)},expression:"stores.role.query.status"}},e._l(e.stores.role.sources.statusSources,(function(t){return n("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.text))])})),1)],1)],1)],1)],1),n("Col",{staticClass:"dnc-toolbar-btns",attrs:{span:"8"}},[n("ButtonGroup",{staticClass:"mr3"},[n("Button",{staticClass:"txt-danger",attrs:{icon:"md-trash",title:"删除"},on:{click:function(t){return e.handleBatchCommand("delete")}}}),n("Button",{staticClass:"txt-success",attrs:{icon:"md-redo",title:"恢复"},on:{click:function(t){return e.handleBatchCommand("recover")}}}),n("Button",{staticClass:"txt-danger",attrs:{icon:"md-hand",title:"禁用"},on:{click:function(t){return e.handleBatchCommand("forbidden")}}}),n("Button",{staticClass:"txt-success",attrs:{icon:"md-checkmark",title:"启用"},on:{click:function(t){return e.handleBatchCommand("normal")}}}),n("Button",{attrs:{icon:"md-refresh",title:"刷新"},on:{click:e.handleRefresh}})],1),n("Button",{attrs:{icon:"md-create",type:"primary",title:"新增角色"},on:{click:e.handleShowCreateWindow}},[e._v("新增角色")])],1)],1)],1)])])],1),n("Drawer",{attrs:{title:e.formTitle,width:"400","mask-closable":!1,mask:!1,styles:e.styles},model:{value:e.formModel.opened,callback:function(t){e.$set(e.formModel,"opened",t)},expression:"formModel.opened"}},[n("Form",{ref:"formRole",attrs:{model:e.formModel.fields,rules:e.formModel.rules,"label-position":"left"}},[n("FormItem",{attrs:{label:"角色名称",prop:"name","label-position":"left"}},[n("Input",{attrs:{placeholder:"请输入角色名称"},model:{value:e.formModel.fields.name,callback:function(t){e.$set(e.formModel.fields,"name",t)},expression:"formModel.fields.name"}})],1),n("FormItem",{attrs:{label:"角色状态","label-position":"left"}},[n("i-switch",{attrs:{size:"large","true-value":1,"false-value":0},model:{value:e.formModel.fields.status,callback:function(t){e.$set(e.formModel.fields,"status",t)},expression:"formModel.fields.status"}},[n("span",{attrs:{slot:"open"},slot:"open"},[e._v("正常")]),n("span",{attrs:{slot:"close"},slot:"close"},[e._v("禁用")])])],1),n("FormItem",{attrs:{label:"备注","label-position":"top"}},[n("Input",{attrs:{type:"textarea",rows:4,placeholder:"角色备注信息"},model:{value:e.formModel.fields.description,callback:function(t){e.$set(e.formModel.fields,"description",t)},expression:"formModel.fields.description"}})],1)],1),n("div",{staticClass:"demo-drawer-footer"},[n("Button",{attrs:{icon:"md-checkmark-circle",type:"primary"},on:{click:e.handleSubmitRole}},[e._v("保 存")]),n("Button",{staticStyle:{"margin-left":"8px"},attrs:{icon:"md-close"},on:{click:function(t){e.formModel.opened=!1}}},[e._v("取 消")])],1)],1)],1)},a=[],s=n("fa69"),l=n("838a"),r={name:"rbac_role_page",components:{Tables:s["a"]},data:function(){return{commands:{delete:{name:"delete",title:"删除"},recover:{name:"recover",title:"恢复"},forbidden:{name:"forbidden",title:"禁用"},normal:{name:"normal",title:"启用"}},formModel:{opened:!1,title:"创建角色",mode:"create",selection:[],fields:{id:"",name:"",avatar:"",isLocked:0,status:1,isDeleted:0,description:""},rules:{name:[{type:"string",required:!0,message:"请输入角色名称",min:2}]}},stores:{role:{query:{totalCount:0,pageSize:20,PageIndex:1,kw:"",where:{isDeleted:-1,status:-1},SortCol:1,OrderBy:"id"},sources:{isDeletedSources:[{value:-1,text:"全部"},{value:0,text:"正常"},{value:1,text:"已删"}],statusSources:[{value:-1,text:"全部"},{value:0,text:"禁用"},{value:1,text:"正常"}],statusFormSources:[{value:0,text:"禁用"},{value:1,text:"正常"}]},columns:[{type:"selection",width:50,key:"handle"},{title:"角色名称",key:"name",width:250,sortable:!0},{title:"状态",key:"status",align:"center",width:120,render:function(e,t){var n=t.row.status,o="success",a="正常";switch(n){case 0:a="禁用",o="default";break}return e("Tooltip",{props:{placement:"top",transfer:!0,delay:500}},[e("Tag",{props:{color:o}},a),e("p",{slot:"content",style:{whiteSpace:"normal"}},a)])}},{title:"内置?",key:"isBuiltin",align:"center",width:80,render:function(e,t){var n=t.row.isBuiltin,o="success",a="是";switch(n){case!1:a="否",o="default";break}return e("Tooltip",{props:{placement:"top",transfer:!0,delay:500}},[e("Tag",{props:{color:o}},a),e("p",{slot:"content",style:{whiteSpace:"normal"}},a)])}},{title:"超管?",key:"isSuperAdministrator",align:"center",width:80,render:function(e,t){var n=t.row.isSuperAdministrator,o="success",a="是";switch(n){case!1:a="否",o="default";break}return e("Tooltip",{props:{placement:"top",transfer:!0,delay:500}},[e("Tag",{props:{color:o}},a),e("p",{slot:"content",style:{whiteSpace:"normal"}},a)])}},{title:"创建时间",width:150,ellipsis:!0,tooltip:!0,key:"createdOn"},{title:"创建者",key:"createdByUserName"},{title:"操作",align:"center",key:"handle",width:150,className:"table-command-column",options:["edit"],button:[function(e,t,n){return e("Poptip",{props:{confirm:!0,title:"你确定要删除吗?"},on:{"on-ok":function(){n.$emit("on-delete",t)}}},[e("Tooltip",{props:{placement:"left",transfer:!0,delay:1e3}},[e("Button",{props:{shape:"circle",size:"small",icon:"md-trash",type:"error"}}),e("p",{slot:"content",style:{whiteSpace:"normal"}},"删除")])])},function(e,t,n){return e("Tooltip",{props:{placement:"left",transfer:!0,delay:1e3}},[e("Button",{props:{shape:"circle",size:"small",icon:"md-create",type:"primary"},on:{click:function(){n.$emit("on-edit",t),n.$emit("input",t.tableData)}}}),e("p",{slot:"content",style:{whiteSpace:"normal"}},"编辑")])}]}],data:[]}},styles:{height:"calc(100% - 55px)",overflow:"auto",paddingBottom:"53px",position:"static"}}},computed:{formTitle:function(){return"create"===this.formModel.mode?"创建角色":"edit"===this.formModel.mode?"编辑角色":""},selectedRows:function(){return this.formModel.selection},selectedRowsId:function(){return this.formModel.selection.map((function(e){return e.id}))}},methods:{loadRoleList:function(){var e=this;Object(l["f"])(this.stores.role.query).then((function(t){e.stores.role.data=t.data.data.body,e.stores.role.query.totalCount=t.data.data.count}))},handleOpenFormWindow:function(){this.formModel.opened=!0},handleCloseFormWindow:function(){this.formModel.opened=!1},handleSwitchFormModeToCreate:function(){this.formModel.mode="create"},handleSwitchFormModeToEdit:function(){this.formModel.mode="edit",this.handleOpenFormWindow()},handleEdit:function(e){this.handleSwitchFormModeToEdit(),this.handleResetFormRole(),this.doLoadRole(e.row.id)},handleSelect:function(e,t){},handleSelectionChange:function(e){this.formModel.selection=e},handleRefresh:function(){this.loadRoleList()},handleShowCreateWindow:function(){this.handleSwitchFormModeToCreate(),this.handleOpenFormWindow(),this.handleResetFormRole()},handleSubmitRole:function(){var e=this.validateRoleForm();e&&("create"===this.formModel.mode&&this.doCreateRole(),"edit"===this.formModel.mode&&this.doEditRole())},handleResetFormRole:function(){this.$refs["formRole"].resetFields()},doCreateRole:function(){var e=this;Object(l["c"])(this.formModel.fields).then((function(t){!0===t.data.success?(e.$Message.success("添加成功"),e.loadRoleList()):e.$Message.warning(t.data.error.errorMessage),e.handleCloseFormWindow()}))},doEditRole:function(){var e=this;Object(l["e"])(this.formModel.fields).then((function(t){!0===t.data.success?(e.$Message.success("编辑成功"),e.loadRoleList()):e.$Message.warning(t.data.error.errorMessage),e.handleCloseFormWindow()}))},validateRoleForm:function(){var e=this,t=!1;return this.$refs["formRole"].validate((function(n){n?t=!0:(e.$Message.error("请完善表单信息"),t=!1)})),t},doLoadRole:function(e){var t=this;Object(l["g"])({id:e}).then((function(e){t.formModel.fields=e.data.data}))},handleDelete:function(e){this.doDelete(e.row.id)},doDelete:function(e){var t=this;e?Object(l["d"])(e).then((function(e){!0===e.data.success?(t.$Message.success("删除成功"),t.loadRoleList()):t.$Message.warning(e.data.error.errorMessage)})):this.$Message.warning("请选择至少一条数据")},handleBatchCommand:function(e){var t=this;!this.selectedRowsId||this.selectedRowsId.length<=0?this.$Message.warning("请选择至少一条数据"):this.$Modal.confirm({title:"操作提示",content:"<p>确定要执行当前 ["+this.commands[e].title+"] 操作吗?</p>",loading:!0,onOk:function(){t.doBatchCommand(e)}})},doBatchCommand:function(e){var t=this;Object(l["b"])({command:e,ids:this.selectedRowsId.join(",")}).then((function(e){!0===e.data.success?(t.$Message.success("操作成功"),t.loadRoleList(),t.formModel.selection=[]):t.$Message.warning(e.data.error.errorMessage),t.$Modal.remove()}))},handleSearchRole:function(){this.loadRoleList()},rowClsRender:function(e,t){return e.isDeleted?"table-row-disabled":""},handlePageChanged:function(e){this.stores.role.query.PageIndex=e,this.loadRoleList()},handlePageSizeChanged:function(e){this.stores.role.query.pageSize=e,this.loadRoleList()}},mounted:function(){this.loadRoleList()}},i=r,c=n("5511"),d=Object(c["a"])(i,o,a,!1,null,null,null);t["default"]=d.exports},4974:function(e,t,n){"use strict";var o=n("ad62"),a=n.n(o);a.a},"838a":function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return u})),n.d(t,"a",(function(){return h}));var o=n("66df"),a=function(e){return o["a"].request({url:"rbac/role/rolelist",method:"post",data:e})},s=function(e){return o["a"].request({url:"rbac/role/createrole",method:"post",data:e})},l=function(e){return o["a"].request({url:"rbac/role/editrole/"+e.id,method:"get"})},r=function(e){return o["a"].request({url:"rbac/role/updaterole",method:"post",data:e})},i=function(e){return o["a"].request({url:"rbac/role/deleterole/"+e,method:"get"})},c=function(e){return o["a"].request({url:"rbac/role/batchrole",method:"post",data:e})},d=function(e){return o["a"].request({url:"rbac/role/findlistbyuserid/"+e,method:"get"})},u=function(){return o["a"].request({url:"rbac/role/findsimplelist",method:"get"})},h=function(e){return o["a"].request({url:"rbac/role/assignpermission",method:"post",data:e})}},ad62:function(e,t,n){},fa69:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dnc-table-wrap"},[e._t("search",[e.searchable&&"top"===e.searchPlace?n("div",{staticClass:"search-con search-con-top"},[n("Select",{staticClass:"search-col",model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},e._l(e.columns,(function(t){return"handle"!==t.key?n("Option",{key:"search-col-"+t.key,attrs:{value:t.key}},[e._v(e._s(t.title))]):e._e()})),1),n("Input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"输入关键字搜索"},on:{"on-change":e.handleClear},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),n("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:e.handleSearch}},[n("Icon",{attrs:{type:"search"}}),e._v("  搜索")],1)],1):e._e()]),n("Table",{ref:"tablesMain",attrs:{data:e.insideTableData,columns:e.insideColumns,stripe:e.stripe,border:e.border,"show-header":e.showHeader,width:e.width,height:e.height,loading:e.loading,"disabled-hover":e.disabledHover,"highlight-row":e.highlightRow,"row-class-name":e.rowClassName,size:e.size,"no-data-text":e.noDataText,"no-filtered-data-text":e.noFilteredDataText},on:{"on-current-change":e.onCurrentChange,"on-select":e.onSelect,"on-select-cancel":e.onSelectCancel,"on-select-all":e.onSelectAll,"on-selection-change":e.onSelectionChange,"on-sort-change":e.onSortChange,"on-filter-change":e.onFilterChange,"on-row-click":e.onRowClick,"on-row-dblclick":e.onRowDblclick,"on-expand":e.onExpand}},[e._t("header",null,{slot:"header"}),e._t("footer",null,{slot:"footer"}),e._t("loading",null,{slot:"loading"})],2),n("Page",{attrs:{total:e.totalCount,"page-size":e.pageSize,size:"small","show-elevator":"","show-sizer":"","show-total":"","page-size-opts":e.pageSizeOpts},on:{"on-change":e.onPageChanged,"on-page-size-change":e.onPageSizeChanged}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showRefreshButton,expression:"showRefreshButton"}],staticClass:"dnc-table-refresh-btn"},[n("Button",{attrs:{size:"small",shape:"circle",icon:"md-refresh",title:"刷新"},on:{click:e.onRefresh}})],1),e.searchable&&"bottom"===e.searchPlace?n("div",{staticClass:"search-con search-con-top"},[n("Select",{staticClass:"search-col",model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},e._l(e.columns,(function(t){return"handle"!==t.key?n("Option",{key:"search-col-"+t.key,attrs:{value:t.key}},[e._v(e._s(t.title))]):e._e()})),1),n("Input",{staticClass:"search-input",attrs:{placeholder:"输入关键字搜索"},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),n("Button",{staticClass:"search-btn",attrs:{type:"primary"}},[n("Icon",{attrs:{type:"search"}}),e._v("  搜索")],1)],1):e._e(),n("a",{staticStyle:{display:"none",width:"0px",height:"0px"},attrs:{id:"hrefToExportTable"}})],2)},a=[],s=(n("6d57"),n("163d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tables-edit-outer"},[e.isEditting?n("div",{staticClass:"tables-editting-con"},[n("Input",{staticClass:"tables-edit-input",attrs:{value:e.value},on:{input:e.handleInput}}),n("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:e.saveEdit}},[n("Icon",{attrs:{type:"md-checkmark"}})],1),n("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:e.canceltEdit}},[n("Icon",{attrs:{type:"md-close"}})],1)],1):n("div",{staticClass:"tables-edit-con"},[n("span",{staticClass:"value-con"},[e._v(e._s(e.value))]),e.editable?n("Button",{staticClass:"tables-edit-btn",staticStyle:{padding:"2px 4px"},attrs:{type:"text"},on:{click:e.startEdit}},[n("Icon",{attrs:{type:"md-create"}})],1):e._e()],1)])}),l=[],r={name:"TablesEdit",props:{value:[String,Number],edittingCellId:String,params:Object,editable:Boolean},computed:{isEditting:function(){return this.edittingCellId==="editting-".concat(this.params.index,"-").concat(this.params.column.key)}},methods:{handleInput:function(e){this.$emit("input",e)},startEdit:function(){this.$emit("on-start-edit",this.params)},saveEdit:function(){this.$emit("on-save-edit",this.params)},canceltEdit:function(){this.$emit("on-cancel-edit",this.params)}}},i=r,c=(n("4974"),n("5511")),d=Object(c["a"])(i,s,l,!1,null,null,null),u=d.exports,h={delete:function(e,t,n){return e("Poptip",{props:{confirm:!0,title:"你确定要删除吗?"},on:{"on-ok":function(){n.$emit("on-delete",t),n.$emit("input",t.tableData.filter((function(e,n){return n!==t.row.initRowIndex})))}}},[e("Button",{props:{type:"text",ghost:!0}},[e("Icon",{props:{type:"md-trash",size:18,color:"#000000"}})])])}},p=h,f=(n("30d9"),{name:"Tables",props:{value:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},size:String,width:{type:[Number,String]},height:{type:[Number,String]},stripe:{type:Boolean,default:!1},border:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},highlightRow:{type:Boolean,default:!1},rowClassName:{type:Function,default:function(){return""}},context:{type:Object},noDataText:{type:String},noFilteredDataText:{type:String},disabledHover:{type:Boolean},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},searchPlace:{type:String,default:"top"},totalCount:{type:Number,default:0},pageSize:{type:Number,default:20},showRefreshButton:{type:Boolean,default:!1},pageSizeOpts:{type:Array,default:function(){return[5,10,20,30,40,50,100,200,500]}}},data:function(){return{insideColumns:[],insideTableData:[],edittingCellId:"",edittingText:"",searchValue:"",searchKey:""}},methods:{suportEdit:function(e,t){var n=this;return e.render=function(e,t){return e(u,{props:{params:t,value:n.insideTableData[t.index][t.column.key],edittingCellId:n.edittingCellId,editable:n.editable},on:{input:function(e){n.edittingText=e},"on-start-edit":function(e){n.edittingCellId="editting-".concat(e.index,"-").concat(e.column.key),n.$emit("on-start-edit",e)},"on-cancel-edit":function(e){n.edittingCellId="",n.$emit("on-cancel-edit",e)},"on-save-edit":function(e){n.value[e.row.initRowIndex][e.column.key]=n.edittingText,n.$emit("input",n.value),n.$emit("on-save-edit",Object.assign(e,{value:n.edittingText})),n.edittingCellId=""}}})},e},surportHandle:function(e){var t=this,n=e.options||[],o=[];n.forEach((function(e){p[e]&&o.push(p[e])}));var a=e.button?[].concat(o,e.button):o;return e.render=function(e,n){return n.tableData=t.value,e("div",a.map((function(o){return o(e,n,t)})))},e},handleColumns:function(e){var t=this;this.insideColumns=e.map((function(e,n){var o=e;return o.editable&&(o=t.suportEdit(o,n)),"handle"===o.key&&(o=t.surportHandle(o)),o}))},setDefaultSearchKey:function(){this.searchKey="handle"!==this.columns[0].key?this.columns[0].key:this.columns.length>1?this.columns[1].key:""},handleClear:function(e){""===e.target.value&&(this.insideTableData=this.value)},handleSearch:function(){var e=this;this.insideTableData=this.value.filter((function(t){return!!t[e.searchKey]&&t[e.searchKey].indexOf(e.searchValue)>-1}))},handleTableData:function(){this.insideTableData=this.value.map((function(e,t){var n=e;return n.initRowIndex=t,n}))},exportCsv:function(e){this.$refs.tablesMain.exportCsv(e)},clearCurrentRow:function(){this.$refs.talbesMain.clearCurrentRow()},onCurrentChange:function(e,t){this.$emit("on-current-change",e,t)},onSelect:function(e,t){this.$emit("on-select",e,t)},onSelectCancel:function(e,t){this.$emit("on-select-cancel",e,t)},onSelectAll:function(e){this.$emit("on-select-all",e)},onSelectionChange:function(e){this.$emit("on-selection-change",e)},onSortChange:function(e,t,n){this.$emit("on-sort-change",e,t,n)},onFilterChange:function(e){this.$emit("on-filter-change",e)},onRowClick:function(e,t){this.$emit("on-row-click",e,t)},onRowDblclick:function(e,t){this.$emit("on-row-dblclick",e,t)},onExpand:function(e,t){this.$emit("on-expand",e,t)},onRefresh:function(){this.$emit("on-refresh")},onPageChanged:function(e){this.$emit("on-page-change",e)},onPageSizeChanged:function(e){this.$emit("on-page-size-change",e)}},watch:{columns:function(e){this.handleColumns(e),this.setDefaultSearchKey()},value:function(e){this.handleTableData(),this.handleSearch()}},mounted:function(){this.handleColumns(this.columns),this.setDefaultSearchKey(),this.handleTableData()}}),m=f,g=Object(c["a"])(m,o,a,!1,null,null,null),b=g.exports;t["a"]=b}}]);