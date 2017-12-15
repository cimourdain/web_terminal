var PROGAMS = {

  help: function(...a) {
    this.printa({
      "headers": ["command", "description"],
      "help": ["get commands list"],
      "sayhello [name]": ["say hello to [name]"],
      "clear": ["clear terminal"]
    });
  },

  text : function(...a){
      self.printa("<h1>Title 1</h1>");
      self.printa("<h2>Title 2</h2>");
      self.printa(`<p> Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipiscing elit. Pellentesque pulvinar eros augue, sit amet hendrerit velit scelerisque quis. Vestibulum elementum leo libero, eu posuere magna elementum ac. Cras sagittis sapien eu mauris posuere faucibus. Nam eget diam a orci feugiat efficitur id a nibh. Maecenas nisl nunc, rutrum vel pellentesque semper, pulvinar non purus. Nunc suscipit felis lectus, sed consectetur felis venenatis a. Quisque eget mauris vitae mauris tempor venenatis. Cras pulvinar commodo ex in scelerisque.</p>

      <h2>Another title</h2>
      <p>Nam varius accumsan massa vel placerat. <a href="http://url.com">Proin ligula velit</a>, accumsan finibus gravida quis, tristique vitae felis. Ut porttitor tellus felis, vel tincidunt mi porttitor sed. Vestibulum libero nulla, faucibus ac sapien laoreet, vestibulum placerat elit.<p>
      <h3>Level 3 title</h3>
      <p>Nulla magna magna, dictum sit amet enim non, malesuada aliquet dolor. Nam consequat dui non sodales ullamcorper. Phasellus id accumsan dui, sed sagittis ligula. Quisque vel porta metus, sit amet viverra ligula. Vestibulum porttitor molestie nunc, eget ultricies lorem luctus id. </p>`);
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
