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