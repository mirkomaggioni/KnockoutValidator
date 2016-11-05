
ko.bindingHandlers.isValid = {
  init: function (element, valueAccessor, allBindings) {
    var errorLabel = allBindings.get("errorLabel");

    $("#" + errorLabel).hide();
  },
  update: function (element, valueAccessor, allBindings) {
    var errorLabel = allBindings.get("errorLabel");
    var callBack = allBindings.get("callBack");
    var onSubmit = allBindings.get("onSubmit");
    var value = ko.unwrap(valueAccessor());
    var errors = $("label.error:visible");

    if (value === "" && onSubmit != undefined && onSubmit()) {
      $("#" + errorLabel).show();
    }
    else {
      $("#" + errorLabel).hide();

      if (errors.length === 1 && errors.attr("id") === errorLabel) {
        onSubmit(false);
      }
      else if ((callBack != null) && onSubmit() && errors.length === 0) {
        callBack();
      }
    }
    
  }
};