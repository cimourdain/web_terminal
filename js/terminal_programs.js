var PROGAMS = {

  help: function(...a) {
    this.printa({"command": ["help", "sayhello [name]", "clear"], "description": ["get commands list", "say hello to user", "clear terminal"]});
  },

  sayhello: function(...a) {
    this.printa("Hello "+a[0]);
  },

  aboutme: function(...a) {
    this.printa("aboutme");
  },

  clear: function(...a) {
    this.clear_terminal();
  }
};
