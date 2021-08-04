exports.config = {
      seleniumAddress: 'http://localhost:4444/wd/hub',
      specs: ['./tests/test_pass.js','./tests/test_fail.js'],
      framework: 'jasmine2' ,
      onPrepare: function() {
          var jasmineReporters='E:\\NODE\\node_modules\\jasmine-reporters'
          var jasmineReporters = require(jasmineReporters);
          jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
          );
     }
   };
