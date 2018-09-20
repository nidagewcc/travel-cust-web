new Vue({
	el: '#app',
	data: {
		form: {
			tripTitle: '',
			desc: ''
		},
		fileList2: [{
			name: 'food.jpeg',
			url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
		}],
		tableData: [],
		value4: ''
	},
	methods: {
		onSubmit: function() {
			console.log('submit!');
		},
		cancel: function() {
			window.location.href = "trip-list.html";
		},
		handleRemove: function(file, fileList) {
			console.log(file, fileList);
		},
		handlePreview: function(file) {
			console.log(file);
		}
	}
})