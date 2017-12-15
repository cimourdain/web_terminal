# web_terminal
JQuery plugin to insert terminal in webpage


# Usage

## define your pages programs

In the js/terminal.js define your programs as functions in the PROGAMS array.

The following functions can be used:
 * this.printa([str or obj]): Print string or obj as program answer. String can freely use HTML tags, objects will be converted to table (see example of help in terminal_program.js)
 * this.clear_terminal() : clear terminal


## Insert in page
Add jquery, program list and js script to your html page

```
  <script src="...jquery-3.x.x.min.js"></script>
  <script src="js/terminal_programs.js"></script>
  <script src="js/terminal.js"></script>
```

Insert the following html in your page
```
<div id="terminal">
  <header>>>>Welcome in, type "help" to get commands</header><!--optionnal-->
</div>
```


create new instance of terminal in your html page

```
<script>$( "#terminal" ).setAsTerminal("#terminal", "user", "host", "~", "$", PROGAMS);</script>
```
