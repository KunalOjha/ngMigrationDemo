angular.module('app').component('createNewSession', {
  templateUrl: '/home/createNewSession.html',
  bindings: {
    userSessions: '=',
    contactId: '='
  },
  controller: function(toastr, currentIdentity, sessions) {
    console.log(this)
    this.create = function() {
      var newUserSession = {
        title: this.title,
        length: parseInt(this.length),
        abstract: this.abstract,
        userFirstName: currentIdentity.currentUser.firstName,
        userLastName: currentIdentity.currentUser.lastName,
        userId: currentIdentity.currentUser.id,
      }
      
      sessions.createNewSession(newUserSession).then(function(response) {
        console.log(response);
        this.userSessions.push(response.data);
      }.bind(this))
  
    }
  }
  }
)
