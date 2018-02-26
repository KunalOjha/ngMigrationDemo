
describe('userDetails', function() {
  var $ctrlCnst; 
  
  beforeEach(module('app'));
  
  beforeEach(inject(function($componentController) {
    $ctrlCnst = $componentController;
  }));
  
  it('should set the user on the controller to the matching user by id', function() {
    
    var ctrl = $ctrlCnst('userDetails',
    //2nd arg: paramters the controller receives
    {'$routeParams': {id:3}},
    //3rd arg: bindings of the component
    { allUsers: [{id:1,name:'wrong'},{id:3,name:'correct'}]}
  )
      
    expect(ctrl.user.name).toBe('correct');
  })
})