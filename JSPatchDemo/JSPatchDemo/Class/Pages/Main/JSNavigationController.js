
defineClass('JSNavigationController:UINavigationController', {
            viewDidLoad: function() {
            self.super().viewDidLoad();

            },
            pushViewController_animated: function(viewController, animated) {

            if (self.viewControllers().count() > 0) {

            viewController.setHidesBottomBarWhenPushed(YES);

            }
            return self.super().pushViewController_animated(viewController, animated);

            },

            })