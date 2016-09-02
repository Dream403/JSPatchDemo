

//导入类名
require('UIColor,UIButton,UITabBarItem,UIImage,UINavigationController,UIFont,JSTestViewController,JSMineViewController,JSNavigationController');
include('../Utils/Common.js')
include('../Utils/Enumeration.js')
include('../Home/JSTestViewController.js')
include('../Mine/JSMineViewController.js')
include('JSNavigationController.js')
defineClass('JSRootViewController:UITabBarController', {

            viewDidLoad:function() {

           self.super().viewDidLoad();

            self.ORIGviewDidLoad();

            self.view().setBackgroundColor(UIColor.purpleColor());

            var testVC =JSTestViewController.alloc().init();
            self.addOneChildViewController_WithTitle_imageName_selectedImageName(testVC,"测试",'../Images/mycity_normal.png','../Images/mycity_highlight.png');

            var MineViewVC =JSMineViewController.alloc().init();

            self.addOneChildViewController_WithTitle_imageName_selectedImageName(MineViewVC,"我的",'../Images/mycity_normal.png','../Images/mycity_highlight.png');

            }, addOneChildViewController_WithTitle_imageName_selectedImageName: function(viewController, title, imageName, selectedImageName) {

            var viewNav = UINavigationController.alloc().initWithRootViewController(viewController);
            viewController.setTitle(title);
            viewController.tabBarItem().setImage(UIImage.imageWithContentsOfFile(resourcePath(imageName)));;
            var image = UIImage.imageWithContentsOfFile(resourcePath(selectedImageName));
            image = image.imageWithRenderingMode(UIImageRenderingModeAlwaysOriginal);
            viewController.tabBarItem().setSelectedImage(image);
            self.addChildViewController(viewNav);
            },
            });