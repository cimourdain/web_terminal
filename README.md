# web_terminal
JQuery plugin to insert terminal in webpage


# Usage

## define your pages programs

In the js/terminal.js define your programs as functions in the PROGAMS array.

The following functions can be used:
 * this.printa([str]); Print string as program answer
 * this.clear_terminal() : clear terminal


## Insert in page
Add jquery and js script to your html page

```
  <script src="...jquery-3.x.x.min.js"></script>
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
