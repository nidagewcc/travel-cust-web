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
		}],
		dialogFormVisible: false,
		addForm: {
			scenicName: '',
			city: '',
			scenicAddress: '',
			price1: '',
			price2: '',
			price3: '',
			bannerImgs: [],
			scenicDesc: '',
			startTime: '',
			endTime: ''
		},
		dialogImageUrl: '',
        dialogVisible: false
	},
	methods: {
		onSubmit: function() {
			console.log('submit!');
		},
		handleSizeChange: function(val) {
			this.page.pageSize = val;
		},
		handleCurrentChange: function(val) {
			this.page.currentPage = val;
		},
		handleRemove: function(file, fileList) {
			console.log(file, fileList);
		},
		handlePictureCardPreview: function(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		}
	}
})