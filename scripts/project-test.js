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

  module.Project = Project;
})(window);
