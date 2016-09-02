/**
 * Created by zl on 16/8/25.
 */
autoConvertOCType(1);
defineClass('JSMineViewController:UIViewController', {



            viewDidLoad: function() {



            self.super().viewDidLoad();


            console.log("IMYA");



            self.ORIGviewDidLoad();



            self.view().setBackgroundColor(UIColor.redColor());



            var button = UIButton.buttonWithType(UIButtonTypeCustom);



            button.setFrame({x:0, y:0, width:100, height:50});



            button.setCenter(self.view().center());



            button.setTitle_forState("测试", UIControlStateNormal);



            button.addTarget_action_forControlEvents(self, "jump:", UIControlEventTouchUpInside);
            
            
            
            self.view().addSubview(button);
            
            
            
            }, jump:function(button) {
            
            
            
            var testVC = JSTestViewController.alloc().init()
            

            
            self.navigationController().pushViewController_animated(testVC, YES)
            
            
            
            },
            
            });

