var people = (function () {

		var people = ['Will', 'Steve'];


		// cacheDom
		var $el = $('#peopleModule'),
			template = $el.find('#people-template').html(),
			$input = $el.find('input'),
			$button = $el.find('button'),
			$ul = $el.find('ul');

		// bind event
		$button.on('click', addPerson);			
		$ul.on('click', '.del', removePerson);

		_render();

		function _render() {		
			$ul.html(Mustache.render(template, {people: people}));
		}

		function addPerson(value) {
			var name = (typeof value === "string") ? value : $input.val();
			people.push(name);
			_render();
			$input.val('');
		}

		function removePerson(event) {
			var i;
			if (typeof event === "number") {
				i = event;
			} else {
				var $remove = $(event.target).closest('li');
				i = $ul.find('li').index($remove);		
			}			
			
			people.splice(i, 1);
			_render();

		}
		
	return {
		addPerson: addPerson,
		removePerson: removePerson
	};

})();