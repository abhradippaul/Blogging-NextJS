"use server";

const url = process.env.BLOGING_URL;
// const blog = "/api/v1/blog";
// const user = "/api/v1/user";

export const blogApi = async (urlEnd: string) => {
  const response = await fetch(url + urlEnd);
  const data = await response.json();
  if (data.success) {
    // console.log(data)
    return data;
  } else {
    return null;
  }
};

export const signUpUser = async (userData: any) => {
  console.log(userData);
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
    console.log(userData)
    const response = await fetch(url + "user/login", {
      method: "POST",
      credentials: "include",
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(userData)
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const uploadBlog = async (blogData:any, token:string) => {
  // console.log(blogData)
  try {
    const response = await fetch(url + "blog", {
      method: "POST",
      credentials: "include",
      headers : {
        "authkey" : token
      },
      body: blogData
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}

export const getUser = async(userName:string,token:string) => {
  try {
    const response = await fetch(url + `user\/${userName}`, {
      method: "GET",
      credentials: "include",
      headers : {
        "authkey" : token
      }
    })
    const data = await response.json();
    return data
  } catch (err) {
    return err;
  }

}

export const getBlog = async(blogId:string,token:string) => {
  try {
    const response = await fetch(url + `blog\/${blogId}`, {
      method: "GET",
      credentials: "include",
      headers : {
        "authkey" : token
      }
    })
    const data = await response.json();
    return data
  } catch (err) {
    return err;
  }
}

export const updateBlog = async(blogId:string, token:string, newData:string) => {
  try {
    const response = await fetch(url + `blog\/${blogId}`, {
      method: "PUT",
      credentials: "include",
      headers : {
        "authkey" : token,
        "Content-Type" : "application/json"
      },
      body : newData
    })
    const data = await response.json();
    return data
  } catch (err) {
    return err;
  }
}

export const deleteBlog = async(blogId:string, token:string) => {
  try {
    const response = await fetch(url + `blog\/${blogId}`, {
      method: "DELETE",
      credentials: "include",
      headers : {
        "authkey" : token
      }
    })
    const data = await response.json();
    return data
  } catch (err) {
    return err;
  }
}