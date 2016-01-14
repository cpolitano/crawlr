module.exports = function() {
	var knex = require('knex')({
	  client: 'pg',
	  connection: {
	    host     : '127.0.0.1',
	    user     : 'postgres',
	    password : '',
	    database : 'crawlr'
	  }
	});

	knex.schema.createTableIfNotExists('spots', function (table) {
	  table.increments();
	  table.string('name');
	  table.timestamps();
	});

}
