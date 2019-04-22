Vue.component('app-icon', {
    template: '<i :class="cssClasses"></i>',
    props: ['img'],
    computed: {
        cssClasses: function(){
            return 'fas fa-' + this.img;
        }
    }
})

Vue.component('app-task', {
    data: function() {
        return {
            editing: false,
            draft: '',
        };
    },
    template: '#task-template',
    props: ['tasks', 'task', 'index'],
    methods:{
        toogleStatus: function(){
            this.task.pending = !this.task.pending;
        },

        edit: function(){
            /*
            this.tasks.forEach(function(task){
                task.editing = false;
            });
            */

            this.draft = this.task.description;

            this.editing = true;
        },

        update: function(){
            this.description = this.draft;
            this.editing = false;
        },

        discard: function(){
            this.editing = false;
        },
        
        remove: function(){
            this.splice(this.index, 1);
        }
    }
});

var vm = new Vue({
    el: '#app',
    data: {
        new_task: '',
        tasks: [
            {
                description: 'Aprender Vue.js',
                pending: true,
            },
            {
                description: 'Suscribirse a Styde.net',
                pending: true,
            },
            {
                description: 'Crear una API',
                pending: false,
            }
        ]
    },
    methods: {
        createTask: function(){
            this.tasks.push({
                description: this.new_task,
                pending: true,
                editing: false
            });

            this.new_task = '';
        },
        deleteCompleted: function(){
            this.tasks = this.tasks.filter(function(task){
                return task.pending;
            });
        }
    }
});
