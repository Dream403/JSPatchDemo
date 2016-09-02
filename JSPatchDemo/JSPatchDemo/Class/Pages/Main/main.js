
autoConvertOCType(1)

include('JSRootViewController.js')
defineClass('AppDelegate', {
            
            initRootViewController: function() {

            var rootVC = require('JSRootViewController').alloc().init();

            self.window().setRootViewController(rootVC);

            }
            
            })




