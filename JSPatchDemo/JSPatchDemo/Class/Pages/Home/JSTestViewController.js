
/**
 * Created by zl on 16/8/25.
 */
autoConvertOCType(1);
include('../Utils/NetworkManager.js')
require('UIBarButtonItem,UITableView,UITableViewCell,NetworkManger')

defineClass('JSTestViewController:UIViewController <UITableViewDelegate,UITableViewDataSource>',{
    viewDidLoad: function() {

        self.super().viewDidLoad();

        self.ORIGviewDidLoad();

            NetworkManger.GETWith_params_header_success_fail("http://www.qinto.com/wap/index.php?ctl=article_cate&act=api_app_getarticle_cate&num=1&p=7", null, null, block('id', function(response) {
                                                                                                                                                        console.log(response);

                                                                                                                                                                            }), block('NSError*', function(error) {

                                                                                                                                                                                      
                                                                                                                      }));


        self.view().setBackgroundColor(UIColor.purpleColor());

        self.navigationItem().setRightBarButtonItem(UIBarButtonItem.alloc().initWithTitle_style_target_action("注册",UIBarButtonItemStyleDone , self,'jump:'));

        self.navigationItem().setLeftBarButtonItem(UIBarButtonItem.alloc().initWithTitle_style_target_action("管理", UIBarButtonItemStyleDone, self,'mangerAction:'));


       var tableView = UITableView.alloc().initWithFrame_style(self.view().bounds(), 1);

        tableView.setAutoresizingMask(UIViewAutoresizingFlexibleWidth);

        self.view().addSubview(tableView);

        tableView.setBackgroundColor(UIColor.grayColor());

        tableView.setDelegate(self);

        tableView.setDataSource(self);

        tableView.setShowsHorizontalScrollIndicator(NO);

        tableView.setShowsVerticalScrollIndicator(NO);

        tableView.setTableFooterView(UIView.new());

    },
    numberOfSectionsInTableView: function(tableView) {

        return 1;

    },

    tableView_numberOfRowsInSection: function(tableView, section) {

        return 10;
    },

    tableView_heightForRowAtIndexPath: function(tableView, indexPath) {

        return 44;
    },
    tableView_cellForRowAtIndexPath: function(tableView, indexPath) {

        var ID = "Cell";

        var cell = tableView.dequeueReusableCellWithIdentifier(ID);

        if (!cell) {

            cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(UITableViewCellStyleDefault, ID);
        }

        cell.textLabel().setText("测试");

        cell.setSelectionStyle(UITableViewCellSelectionStyleNone);

        return cell;

    },tableView_heightForFooterInSection:function(tableView,section){


        return 1.0;

    },tableView_heightForHeaderInSection:function(tableView,section){


        return 1.0;

    }
    ,
    tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {

        tableView.deselectRowAtIndexPath_animated(indexPath, YES);

         var cell = tableView.cellForRowAtIndexPath(indexPath);


    },
        tableView_willDisplayCell_forRowAtIndexPath: function(tableView, cell, indexPath) {
            //设置Cell的动画效果为3D效果
            //设置x和y的初始值为0.1；


              require('JPEngine').defineStruct({
                "name": "CATransform3DMakeScale",
                "types": "FFF",
                "keys": ["sx", "sy", "sz"]
            })

            cell.layer().setTransform(CATransform3DMakeScale(0.1, 0.1, 1));
            //x和y的最终值为1
            UIView.animateWithDuration_animations(1, block(function() {

                cell.layer().setTransform(CATransform3DMakeScale(1, 1, 1));
            }));
        },

    tableView_editActionsForRowAtIndexPath:function(tableView, indexPath){

        var deleteRowAction = UITableViewRowAction.rowActionWithStyle_title_handler(UITableViewRowActionStyleDestructive, "删除", block('UITableViewRowAction*,NSIndexPath*', function(action, indexPath) {

            console.log('删除');

        }));

      return [deleteRowAction];

    },jump:function(item){

        console.log("测试");

    },mangerAction:function(item){
        self.navigationController().popViewControllerAnimated(YES);
    },
})