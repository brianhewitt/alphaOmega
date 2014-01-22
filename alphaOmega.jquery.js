// this plugin is passed the parent object (in the plugin call, which becomes 'this') and the number of columns (as its argument)
// and adds alpha and omega classes (for removing margins, etc, as needed) in floated lists

(function($) {

    $.fn.setAlphaOmega = function(childElems, columns) {
    
        // class names
        var rowStartClass = "alpha";
        var rowEndClass = "omega";
        var thisClasses = this.attr("class");
            
        this.find(childElems + ":nth-child(1)").addClass(rowStartClass);
        this.find(childElems + ":nth-child(" + columns + "n)").addClass(rowEndClass);
        this.find(childElems + ":nth-child(" + columns + "n+1)").addClass(rowStartClass);
    }; 
}(jQuery));
    
