
//网络请求类 根据第三库
require('AFNetworkActivityIndicatorManager,AFHTTPRequestSerializer,AFJSONResponseSerializer,AFSecurityPolicy,NSSet');
defineClass('NetworkManger', {} {
            GETWith_params_header_success_fail: function(url, params, header, success, fail) {


            var manger = self.manger();

            header.enumerateKeysAndObjectsUsingBlock(block('id,id,BOOL*', function(key, obj, stop) {

                                                           manger.requestSerializer().setValue_forHTTPHeaderField(key, obj);
                                                           }));

            var task = manger.GET_parameters_progress_success_failure(url, params, block('NSProgress*', function(uploadProgress) {

                                                                                         }), block('NSURLSessionDataTask*,id', function(task, responseObject) {
                                                                                                   
                                                                                                   success(responseObject);
                                                                                                   }
                                                                                                   
                                                                                                   }),
                                                                      block('NSURLSessionDataTask*,NSError*', function(task, error) {
                                                                            fail(error);
                                                                            }
                                                                            }));
            
            return task;
            
            },

            POSTWithUrl_params_header_success_fail: function(url, params, header, success, fail) {


            var manger = self.manger();

            header.enumerateKeysAndObjectsUsingBlock(block('id,id,BOOL*', function(key, obj, stop) {

                                                           manger.requestSerializer().setValue_forHTTPHeaderField(key, obj);
                                                           }));

            var task = manger.POST_parameters_progress_success_failure(url, params, block('NSProgress*', function(uploadProgress) {

                                                                                          }), block('NSURLSessionDataTask*,id', function(task, responseObject) {

                                                                                                    success(responseObject);
                                                                                                    }

                                                                                                    }),
                                                                       block('NSURLSessionDataTask*,NSError*', function(task, error) {
                                                                             fail(error);
                                                                             }
                                                                             }));

            return task;

            }, manger: function() {
            
            //开启动画
            AFNetworkActivityIndicatorManager.sharedManager().setEnabled(YES);
            
            var manager =  AFHTTPSessionManager.manager();
            manager.setRequestSerializer(AFHTTPRequestSerializer.serializer());
            
            manager.setResponseSerializer(AFJSONResponseSerializer.serializer());
            
            manager.responseSerializer().setStringEncoding(NSUTF8StringEncoding);
            manager.requestSerializer().setValue_forHTTPHeaderField("application/json", "Accept");
            manager.requestSerializer().setValue_forHTTPHeaderField("application/json", "Content-Type");
            
            var securityPolicy = AFSecurityPolicy.defaultPolicy();
            securityPolicy.setAllowInvalidCertificates(YES);
            manager.setSecurityPolicy(securityPolicy);
            manager.requestSerializer().willChangeValueForKey("timeoutInterval");
            manager.requestSerializer().setTimeoutInterval(30);
            manager.requestSerializer().didChangeValueForKey("timeoutInterval");
            manager.responseSerializer().setAcceptableContentTypes(NSSet.setWithArray(["application/json", "text/json", "text/javascript", "text/html", "text/plain", "application/atom+xml", "application/xml", "text/xml", "image/*"]));
            
            manager.operationQueue().setMaxConcurrentOperationCount(2);
            
            return manager;
            
            },
            });