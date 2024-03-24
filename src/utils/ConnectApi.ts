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

export const signUpUser = async (userData : any) => {
  console.log(userData);
  try {
    const response = await fetch(url + "user/create", {
        method: "POST",

        body: userData
      });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
