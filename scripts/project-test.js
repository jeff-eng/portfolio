(function(module) {
  function Project (opts) {
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    },this);
  }

  Project.all = [];

  Project.createTable = function(callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS projects (' +
        'id INTEGER PRIMARY KEY, ' +
        'projectName VARCHAR(255) NOT NULL, ' +
        'category VARCHAR(20), ' +
        'developer VARCHAR(255) NOT NULL' +
        'githubRepoUrl VARCHAR (255), ' +
        'createdOn DATETIME, ' +
        'body TEXT NOT NULL);',
      callback
    );
  };

  Project.truncateTable = function(callback) {
    webDB.execute(
      'DELETE FROM projects;',
      callback
    );
  };

  Project.prototype.insertRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO projects (projectName, category, developer, githubRepoUrl, createdOn, body) VALUES (?, ?, ?, ?, ? ,?);',
          'data': [this.projectName, this.category, this.developer, this.githubRepoUrl, this.createdOn, this.body],
        }
      ],
      callback
    );
  };

  Project.prototype.deleteRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'DELETE FROM projects WHERE id = ?;',
          'data': [this.id]
        }
      ],
      callback
    );
  };

  Project.prototype.updateRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'UPDATE projects SET projectName = ?, category = ?, developer = ?, githubRepoUrl = ?, createdOn = ?, body = ? WHERE id = ?;',
          'data': [this.projectName, this.category, this.developer, this.githubRepoUrl, this.createdOn, this.body, this.id]
        }
      ],
      callback
    );
  };

  Project.loadAll = function(rows) {
    Project.all = rows.map(function(ele) {
      return new Project(ele);
    });
  };

  Project.fetchAll = function(callback) {
    webDB.execute('SELECT * FROM projects ORDER BY createdOn DESC', function(rows) {
      if (rows.length) {
        Project.loadAll(rows);
        callback();
      } else {
        $.getJSON('/data/projectdata.json', function(rawData) {  //Caches json
          rawData.forEach(function(item) {
            var project = new Project(item); //Instantiate project based on item from JSON
            project.insertRecord(); //Caches article in DB
          });
          webDB.execute('SELECT * FROM articles', function(rows {
            Project.loadAll(rows);
            callback();
          });
        });
      }
    });
  };

  Project.findWhere = function(field, value, callback) {
    webDB.execute(
      [
        {
          sql: 'SELECT * FROM projects WHERE ' + field + ' = ?;',
          data: [value]
        }
      ],
      callback
    );
  };

  

  module.Project = Project;
})(window);
