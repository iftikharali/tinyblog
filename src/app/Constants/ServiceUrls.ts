export class ServiceUrls { 
    public static POST_LIST_GET = "posts/";
    public static COMMENT_LIST_GET = (postId) => `post/${postId}/comments/`;
    public static POST_GET = "post/";
    public static BLOG_GET = "blog/";
    public static BLOG_LIST_GET = "blogs/";
    public static USER_LIST_GET = "users/";
    public static USER_GET = "user/"
    public static USER_SAVE = (userId) => `user/${userId}`;
    public static USER_REGISTER = "user/";
    public static USER_LOGIN = "login";
    public static USER_LOGOUT = "user/logout";
    public static MENU_LIST_GET = "categories/"
    public static BLOG_SAVE = "blog/";
    public static POST_SAVE = "post/";
  }