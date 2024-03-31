import { UseUserContext, UserContext } from "@/Context/UserContext";
import { giveLike, removeLike } from "@/utils/ConnectApi";
import { Dispatch, SetStateAction } from "react";

type PropsValue = {
  outerClass: string;
  innerClass: string;
  value?: string;
  valueFunction?: () => void;
  srcAndAlt?: any;
  setData?: Dispatch<SetStateAction<any>>;
  data?: any;
};

function CustomIcon({
  outerClass,
  innerClass,
  value,
  valueFunction,
  srcAndAlt,
  data,
  setData,
}: PropsValue) {
  const { token } = UseUserContext();
  const likePost = () => {
    if (data.isLiked) {
      if (token && data) {
        removeLike(data.blogId, token).then((e) => {
          console.log(e)
          // if (e.success) {
            if (setData) {
              setData((prev: any) => ({
                ...prev,
                likesCount: prev.likesCount - 1,
                isLiked: false,
              }));
            }
          // }
        });
      }
    } else {
      if (token && data) {
        giveLike(data.blogId, token).then((e) => {
          if (e.success) {
            console.log(e)
            if (setData) {
              setData((prev: any) => ({
                ...prev,
                likesCount: prev.likesCount + 1,
                isLiked: true,
              }));
            }
          }
        });
      }
    }
  };
  if (valueFunction) {
    return (
      <div className={outerClass} onClick={valueFunction}>
        <i className={innerClass}></i> {value}
      </div>
    );
  } else if (srcAndAlt) {
    return (
      <div className={outerClass}>
        <img className={innerClass} src={srcAndAlt.src} alt={srcAndAlt.alt} />
      </div>
    );
  } else {
    return (
      <div className={outerClass} onClick={likePost}>
        <i className={innerClass}></i> {value}
      </div>
    );
  }
}

export default CustomIcon;
