exports.config = {
      seleniumAddress: 'http://localhost:4444/wd/hub',
      specs: ['test_pass.js','test_fail.js'],
      framework: 'jasmine2' ,
      onPrepare: function() {
          var jasmineReporters='E:\\NODE\\node_modules\\jasmine-reporters'
          var jasmineReporters = require(jasmineReporters);
          jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
          );
     }
   };