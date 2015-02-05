/**
 * Minds::mobile
 * Routes the endpoints to controllers
 * 
 * @author Mark Harding
 */

define(['app'], function (app) {
    'use strict';

    app.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider',
            function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
            
           	$ionicConfigProvider.platform.android.tabs.position("bottom");

            $stateProvider
                .state('loading', {
                    url: "/loading",
                    templateUrl: "templates/loading.html",
                  //  controller: 'LoginCtrl'
                })
                .state('login', {
                    url: "/login",
                    templateUrl: "templates/login.html",
                  //  controller: 'LoginCtrl'
                })
                .state('tutorial', {
                    url: "/tutorial",
                    templateUrl: "templates/tutorial.html",
                })
                .state('tab', {
                    url: "/tab",
                    abstract: true,
                    templateUrl: "templates/tabs.html"
                })
                .state('tab.newsfeed', {
                    url: '/newsfeed',
                    views: {
                        'newsfeed-tab': {
                            templateUrl: 'templates/newsfeed/list.html',
                      //      controller: 'NewsfeedCtrl'
                        }
                    }
                })
                .state('tab.newsfeed-channel', {
					url: "/newsfeed/channel/:username",
					 views: {
                        'newsfeed-tab': {
                            templateUrl: 'templates/channels/channel.html'
                        }
                    }
                })
                .state('tab.newsfeed-channel-edit', {
					url: "/newsfeed/channel/:guid/edit",
					 views: {
                        'newsfeed-tab': {
                            templateUrl: 'templates/channels/edit.html'
                        }
                    }
                })
                .state('tab.newsfeed-channel-subscribers', {
					url: "/newsfeed/channel/:guid/subscribers",
					 views: {
                        'newsfeed-tab': {
                            templateUrl: 'templates/channels/subscribers.html'
                        }
                    }
                })
                .state('tab.newsfeed-compose', {
                    url: '/newsfeed/compose',
                    views: {
                        'newsfeed-tab': {
                            templateUrl: 'templates/newsfeed/compose.html',
                            controller: 'NewsfeedComposerCtrl'
                        }
                    }
                })
                .state('tab.newsfeed-view', {
                    url: '/newsfeed/:guid',
                    views: {
                        'newsfeed-tab': {
                            templateUrl: 'templates/newsfeed/view.html',
                            controller: 'NewsfeedViewCtrl'
                        }
                    }
                })
                .state('tab.chat', {
                    url: '/gatherings/conversations',
                    views: {
                        'chat-tab': {
                            templateUrl: 'templates/gatherings/chat/list.html',
                          //  controller: 'ChatCtrl'
                        }
                    }
                })
                .state('tab.chat-conversation', {
                	cache: false,
                    url: '/gatherings/conversations/:username',
                    views: {
                        'chat-tab': {
                            templateUrl: 'templates/gatherings/chat/conversation.html',
                         //   controller: 'ChatConversationCtrl'
                        }
                    }
                })
                .state('tab.chat-setup', {
                    url: '/gatherings/key-setup',
                    views: {
                        'chat-tab': {
                            templateUrl: 'templates/gatherings/chat/setup.html',
                            controller: 'ChatSetupCtrl'
                        }
                    }
                })
                .state('tab.capture', {
                 	url: '/capture',
                    views: {
                        'capture-tab': {
                            templateUrl: 'templates/capture/default.html',
                          //  controller: 'CaptureCtrl'
                        }
                    }
                })
                .state('tab.discover', {
					url: "/discover",
					 views: {
                        'discover-tab': {
                            templateUrl: 'templates/discover/swipe.html'
                        }
                    }
                })
                .state('tab.more', {
					url: "/more",
					 views: {
                        'more-tab': {
                            templateUrl: 'templates/more.html'
                        }
                    }
                })
                .state('tab.more-channel', {
					url: "/more/channel/:username",
					 views: {
                        'more-tab': {
                            templateUrl: 'templates/channels/channel.html'
                        }
                    }
                })
                .state('tab.notifications', {
                    url: '/notifications',
                    views: {
                        'notifications-tab': {
                            templateUrl: 'templates/notifications/list.html',
                        }
                    }
                })
	            .state('tab.notifications-entity', {
	                url: '/notifications/entity/:guid',
	                views: {
	                    'notifications-tab': {
	                        templateUrl: 'templates/notifications/entity.html',
	                    }
	                }
	            });


            $urlRouterProvider.otherwise("/loading");

        }]);


});