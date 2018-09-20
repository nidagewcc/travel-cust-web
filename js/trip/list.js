new Vue({
	el: '#app',
	data: {
		queryForm: {
			scenicName: ''
		},
		tableData: [],
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
		handleSizeChange: function(val) {
			this.page.pageSize = val;
		},
		handleCurrentChange: function(val) {
			this.page.currentPage = val;
		},
		publishNewTrip: function() {
			window.location.href = "trip-publish.html";
		}
	}
})