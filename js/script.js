(function () {

	var people = {
		people: [],

		init: function() {
			this.cacheDom();
			this.render();
			this.eventBind();
		},

		cacheDom: function() {
			this.$el = $('#peopleModule');
			this.template = this.$el.find('#people-template').html();
			this.$input = this.$el.find('input');
			this.$button = this.$el.find('button');
			this.$ul = this.$el.find('ul');
		},		

		eventBind: function() {
			this.$button.on('click', this.addPeople.bind(this));			
			this.$ul.on('click', '.del', this.removePeople.bind(this));
		},

		render: function() {
			var data = {
				people: this.people,
			};
			this.$ul.html(Mustache.render(this.template, data));
		},

		addPeople: function() {
			this.people.push(this.$input.val());
			this.render();
			this.$input.val('');
		},

		removePeople: function(event) {
			var $remove = $(event.target).closest('li');
			var i = this.$ul.find('li').index($remove);		
			this.people.splice(i, 1);
			this.render();
		},
		

		
	}

	people.init();
	
})();