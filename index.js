var app= angular.module('tinyblog',[]);

app.controller('baseController',function($scope,$http){
   $scope.title="Tiny Blog";
   $scope.menu={about:"About",service:"Services",contacts:"Contacts"};
   $scope.transcludeValue="The Transclude Value";
});

app.directive('leftNav',function(){
	return {
		restrict:"AE",
		templateUrl:function(element, attr){
			return "templates/leftNav.html?"+new Date()
		},
		scope:false,
		controller:function($scope){
			$scope.categories=[{title:"First Blog",Url:"firstblog.html"},{title:"Second Blog",Url:"secondblog.html"}];
			$scope.navTitle = "Categories";
		}
	}
});


app.directive('menu',function(){
	return {
		restrict:"AE",
		templateUrl:function(element, attr){
			return "templates/menu.html?"+new Date()
		},
		scope:false,
		controller:function($scope){
			$scope.menus=[{title:"Home",Url:"home.html"},
						  {title:"About",Url:"about.html"},
						  {title:"Service",Url:"service.html"},
						  {title:"Contact",Url:"contact.html"},
						  {title:"SignUp",Url:"#"}]
		}
	}
});

app.directive('content',function(){
	return {
		restrict:"AE",
		templateUrl:function(element, attr){
			return "templates/content.html?"+new Date()
		},
		scope:false,
		controller:function($scope){
			$scope.blogs= [{title:"First blog",Url:"blog.html",views:454},
						   {title:"First blog",Url:"blog.html",views:454},
						   {title:"First blog",Url:"firstblog.html",views:454},
						   {title:"First blog",Url:"firstblog.html",views:454},
						   {title:"First blog",Url:"firstblog.html",views:454},
						   {title:"First blog",Url:"firstblog.html",views:454},
						   {title:"First blog",Url:"firstblog.html",views:454},
						   {title:"First blog",Url:"firstblog.html",views:454},
						   {title:"First blog",Url:"firstblog.html",views:454},
						   {title:"First blog",Url:"firstblog.html",views:454}];
		}
	}
});


app.directive('tbFooter',function(){
	return {
		restrict:"AE",
		templateUrl:function(element, attr){
			return "templates/footer.html?"+new Date()
		},
		scope:false,
		controller:function($scope){
			
		}
	}
});

app.directive('itemContent',function(){
	return {
		restrict:"AE",
		templateUrl:function(element, attr){
			return "templates/itemcontent.html?"+new Date()
		},
		scope:false,
		controller:function($scope){
			$scope.blogs= [{title:"First blog",Url:"blog.html",views:454},
						   {title:"First blog",Url:"blog.html",views:454},
						   {title:"First blog",Url:"firstblog.html",views:454},
						   {title:"First blog",Url:"firstblog.html",views:454},
						   {title:"First blog",Url:"firstblog.html",views:454},
						   {title:"First blog",Url:"firstblog.html",views:454},
						   {title:"First blog",Url:"firstblog.html",views:454},
						   {title:"First blog",Url:"firstblog.html",views:454},
						   {title:"First blog",Url:"firstblog.html",views:454},
						   {title:"First blog",Url:"firstblog.html",views:454}];
		}
	}
});
/*

<left-nav></left-nav>
<left_nav></left_nav>
<left:nav></left:nav>
<x:left:nav></x:left:nav>
<data:left:nav></data:left:nav>

Restricted parameter
Directive can be used as Element E, Attribute A, Class C, Comment M
*/