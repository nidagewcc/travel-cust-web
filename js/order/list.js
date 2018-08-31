new Vue({
	el: '#app',
	data: {
		tableData: [{
				orderNo: 'A20180828183655',
				contactName: '王小虎',
				contactPhone: '15652237654',
				tripTitle: '北京故宫一日游',
				enrollTime: '2018-08-28 18:37:55',
				orderSts: '待处理'
			},
			{
				orderNo: 'A20180828183655',
				contactName: '王小虎',
				contactPhone: '15652237654',
				tripTitle: '北京故宫一日游',
				enrollTime: '2018-08-28 18:37:55',
				orderSts: '待处理'
			},
			{
				orderNo: 'A20180828183655',
				contactName: '王小虎',
				contactPhone: '15652237654',
				tripTitle: '北京故宫一日游',
				enrollTime: '2018-08-28 18:37:55',
				orderSts: '待处理'
			},
			{
				orderNo: 'A20180828183655',
				contactName: '王小虎',
				contactPhone: '15652237654',
				tripTitle: '北京故宫一日游',
				enrollTime: '2018-08-28 18:37:55',
				orderSts: '待处理'
			},
			{
				orderNo: 'A20180828183655',
				contactName: '王小虎',
				contactPhone: '15652237654',
				tripTitle: '北京故宫一日游',
				enrollTime: '2018-08-28 18:37:55',
				orderSts: '待处理'
			},
			{
				orderNo: 'A20180828183655',
				contactName: '王小虎',
				contactPhone: '15652237654',
				tripTitle: '北京故宫一日游',
				enrollTime: '2018-08-28 18:37:55',
				orderSts: '待处理'
			},
			{
				orderNo: 'A20180828183655',
				contactName: '王小虎',
				contactPhone: '15652237654',
				tripTitle: '北京故宫一日游',
				enrollTime: '2018-08-28 18:37:55',
				orderSts: '待处理'
			},
			{
				orderNo: 'A20180828183655',
				contactName: '王小虎',
				contactPhone: '15652237654',
				tripTitle: '北京故宫一日游',
				enrollTime: '2018-08-28 18:37:55',
				orderSts: '待处理'
			},
			{
				orderNo: 'A20180828183655',
				contactName: '王小虎',
				contactPhone: '15652237654',
				tripTitle: '北京故宫一日游',
				enrollTime: '2018-08-28 18:37:55',
				orderSts: '待处理'
			},
			{
				orderNo: 'A20180828183655',
				contactName: '王小虎',
				contactPhone: '15652237654',
				tripTitle: '北京故宫一日游',
				enrollTime: '2018-08-28 18:37:55',
				orderSts: '待处理'
			},
			{
				orderNo: 'A20180828183655',
				contactName: '王小虎',
				contactPhone: '15652237654',
				tripTitle: '北京故宫一日游',
				enrollTime: '2018-08-28 18:37:55',
				orderSts: '待处理'
			}
		],
		queryForm: {
			orderNo: '',
			orderSts: null
		},
		page: {
			pageTotal: 20,
			pageSize: 10,
			pageSizes: [10, 20],
			currentPage: 1
		},
		dialogTableVisible: false,
		dialogFormVisible: false,
		form: {
			desc: ''
		},
		formLabelWidth: '120px',
		orderInfo: {
			orderNo: 'A20180828183655',
			contactName: '二狗',
			contactPhone: '12354557125',
			tripTitle: '北戴河两日游',
			enrollTime: '2018-08-29 17:18:21',
			ticketInfo: '成人票：2张 / 儿童票：1张 / 学生票：1张 / 其他：',
			orderSts: '待处理'
		}
	},
	methods: {
		onSubmit: function() {
			console.log('submit!');
		},
		handleClick: function(row) {
			window.location.href = "order-info.html";

			console.log(row);
		},
		handleSizeChange: function(val) {
			this.page.pageSize = val;
		},
		handleCurrentChange: function(val) {
			this.page.currentPage = val;
		}
	}
})