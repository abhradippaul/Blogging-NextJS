"use server";

const url = process.env.BLOGING_URL;
// const blog = "/api/v1/blog";
// const user = "/api/v1/user";

export const blogApi = async (urlEnd: string) => {
  const response = await fetch(url + urlEnd);
  const data = await response.json();
  if (data.success) {
    return data;
  } else {
    return null;
  }
};

export const getUserFollowings = async (token: string) => {
  try {
    const response = await fetch(url + "user/following/sidebar", {
      method: "GET",
      headers: {
        authkey: token,
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const signUpUser = async (userData: any) => {
  try {
    const response = await fetch(url + "user/create", {
      method: "POST",
      credentials: "include",
      body: userData,
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const signInUser = async (userData: any) => {
  try {
    console.log(userData);
    const response = await fetch(url + "user/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const uploadBlog = async (blogData: any, token: string) => {
  // console.log(blogData)
  try {
    const response = await fetch(url + "blog", {
      method: "POST",
      credentials: "include",
      headers: {
        authkey: token,
      },
      body: blogData,
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const getUser = async (userName: string, token: string) => {
  try {
    const response = await fetch(url + `user\/${userName}`, {
      method: "GET",
      credentials: "include",
      headers: {
        authkey: token,
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const updateUser = async (
  userName: string,
  token: string,
  userInfo: string
) => {
  try {
    const response = await fetch(url + `user\/${userName}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        authkey: token,
        "Content-Type": "application/json",
      },
      body: userInfo,
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const getBlog = async (blogId: string, token: string) => {
  try {
    const response = await fetch(url + `blog\/${blogId}`, {
      method: "GET",
      credentials: "include",
      headers: {
        authkey: token,
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const updateBlog = async (
  slug: string,
  token: string,
  newData: string
) => {
  try {
    const response = await fetch(url + `blog\/${slug}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        authkey: token,
        "Content-Type": "application/json",
      },
      body: newData,
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const deleteBlog = async (blogId: string, token: string) => {
  try {
    const response = await fetch(url + `blog\/${blogId}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        authkey: token,
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const addComment = async (
  commentData: string,
  blogId: string,
  token: string
) => {
  try {
    const response = await fetch(url + `blog\/${blogId}/comment`, {
      method: "POST",
      credentials: "include",
      headers: {
        authkey: token,
        "Content-Type": "application/json",
      },
      body: commentData,
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const updateBlogComment = async (
  commentId: string,
  token: string,
  commentData: string
) => {
  try {
    const response = await fetch(url + `blog\/${commentId}/comment`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        authkey: token,
        "Content-Type": "application/json",
      },
      body: commentData,
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const deleteBlogComment = async (commentId: string, token: string) => {
  try {
    const response = await fetch(url + `blog\/${commentId}/comment`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        authkey: token,
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const followUser = async (channelId: string, token: string) => {
  try {
    const response = await fetch(url + `user\/${channelId}/follow`, {
      method: "POST",
      credentials: "include",
      headers: {
        authkey: token,
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const unfollowUser = async (channelId: string, token: string) => {
  try {
    const response = await fetch(url + `user\/${channelId}/follow`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        authkey: token,
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const giveLike = async (blogId: string, token: string) => {
  try {
    const response = await fetch(url + `blog\/${blogId}/like`, {
      method: "POST",
      credentials: "include",
      headers: {
        authkey: token,
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const removeLike = async (blogId: string, token: string) => {
  try {
    const response = await fetch(url + `blog\/${blogId}/like`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        authkey: token,
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
