(function() {
  var mixin = {
    isInteger: function(num) {
      if(!_.isNumber(num))
        return false;
      
      if(num.toString().indexOf(".") > -1)
        return false;

      return true;
    }
  }

  if( typeof module !== 'undefined' ) {
    module.exports = mixin; 
  } else {
    _.mixin(mixin);
  }
}).call(this);
