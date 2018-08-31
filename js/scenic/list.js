new Vue({
	el: '#app',
	data: {
		queryForm: {
			scenicName: '',
			scenicSts: null
		},
		page: {
			pageTotal: 20,
			pageSize: 10,
			pageSizes: [10, 20],
			currentPage: 1
		},
		tableData: [{
			scenicName: '故宫',
			cityName: '北京',
			address: '北京XXXXXXXXXXXX',
			openTime: '6:00 ~ 17:00',
			scenicSts: '生效'
		}, {
			scenicName: '故宫',
			cityName: '北京',
			address: '北京XXXXXXXXXXXX',
			openTime: '6:00 ~ 17:00',
			scenicSts: '生效'
		}, {
			scenicName: '故宫',
			cityName: '北京',
			address: '北京XXXXXXXXXXXX',
			openTime: '6:00 ~ 17:00',
			scenicSts: '生效'
		}, {
			scenicName: '故宫',
			cityName: '北京',
			address: '北京XXXXXXXXXXXX',
			openTime: '6:00 ~ 17:00',
			scenicSts: '生效'
		}, {
			scenicName: '故宫',
			cityName: '北京',
			address: '北京XXXXXXXXXXXX',
			openTime: '6:00 ~ 17:00',
			scenicSts: '生效'
		}]
	},
	methods: {
		onSubmit: function() {
			console.log('submit!');
		}
	}
})