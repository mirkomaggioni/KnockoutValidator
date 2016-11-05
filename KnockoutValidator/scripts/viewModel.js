
function ViewModel() {
  var self = this;

  self.FirstName = ko.observable("");
  self.LastName = ko.observable("");
  self.OnSubmit = ko.observable(false);
  self.OnSendData = ko.observable(false);

  self.Submit = function () {
    self.OnSubmit(true);
  }

  self.Unsubmit = function () {
    self.OnSubmit(false);
  }

  self.SendData = function () {
    self.OnSendData(true);
  }
}
