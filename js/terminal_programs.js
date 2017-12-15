var PROGAMS = {

  help: function(...a) {
    this.printa({
      "headers": ["command", "description"],
      "help": ["get commands list"],
      "sayhello [name]": ["say hello to [name]"],
      "clear": ["clear terminal"]
    });
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
