//<i class = "fa fa-trash-alt" > </i>

Vue.component('app-icon', {
	template: '<i :class="cssClasses"></i>',
	props: ['img'],
	computed: {
		cssClasses: function () {
			return 'fa fa-' + this.img;
		}
	}
});

var vm = new Vue ({
	el : "#app",
	
	methods: {
		createTask: function () {
	    	this.tasks.push({
	        description: this.new_task,
	        pending: true,
	        editing: false
	    });
	 
	    this.new_task = '';
		},
		
		toogleStatus: function (task) {
			task.pending = !task.pending;
		},

		editTask: function (task) {
			this.tasks.forEach(function (task){
				task.editing = false;				;
			});

			this.draft = task.description;

			task.editing = true;
		},

		updateTask: function (task) {
			task.description = this.draft;

			task.editing = false;
		},

		discardTask: function (task) {
			task.editing = false;
		},

		deleteTask: function (index) {
			this.tasks.splice(index, 1);
		},

		deleteCompleted: function () {
			this.tasks = this.tasks.filter(function (task) {
				return task.pending
			});
		},

		
	},

	data: {
		new_task: '',
		draft: '',
		tasks: [
		{
			description: 'Aprender Vue.js',
			pending: true,
			editing: false
		},
		{
			description: 'Sucribirse a Styde.net',
			pending: true,
			editing: false
		},
		{
			description: 'Grabar lección de Vue',
			pending: false,
			editing: false
		}
		]
	}
});