
// Make a namespace.
if (typeof Bluejay == 'undefined') {
  var Bluejay = {};
}

/**
 * Controller for pane.xul
 */
Bluejay.PaneController = {

  /**
   * Called when the pane is instantiated
   */
  onLoad: function() {
    this._initialized = true;
    
    // Make a local variable for this controller so that
    // it is easy to access from closures.
    var controller = this;
	var mainController = Bluejay.Controller; //pane.js doesn't know what main.js is
    
    // Hook up the action button
    this._demobutton = document.getElementById("action-button");
    this._demobutton.addEventListener("command", 
         function() { controller.sayHello(); }, false);
		 
	this._indexbutton = document.getElementById("index-button");
    this._indexbutton.addEventListener("command", 
         function() { controller.popUpProgress(); }, false);
		 
  },
  
  /**
   * Called when the pane is about to close
   */
  onUnLoad: function() {
    this._initialized = false;
  },
  
  //Give me a siiiiiiign
  sayHello: function() {
    var greeting = "Hi there!";
	alert(greeting);
	},
  
  popUpProgress: function() {
    
  },
  
  /**
   * Load the Display Pane documentation in the main browser pane
   */
  loadHelpPage: function() {
    // Ask the window containing this pane (likely the main player window)
    // to load the display pane documentation
    top.loadURI("http://wiki.songbirdnest.com/Developer/Articles/Getting_Started/Display_Panes");
  }
  
};

window.addEventListener("load", function(e) { Bluejay.PaneController.onLoad(e); }, false);
window.addEventListener("unload", function(e) { Bluejay.PaneController.onUnLoad(e); }, false);