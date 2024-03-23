export function CheckTimeAgo(date:Date) {
  const currentDate = new Date();
  const timestamp = date.getTime();
  const currentTimestamp = currentDate.getTime();

  // Calculate the time difference in milliseconds
  const difference = currentTimestamp - timestamp;

  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  if (difference < minute) {
    return Math.round(difference / 1000) + " seconds ago";
  } else if (difference < hour) {
    return Math.round(difference / minute) + " minutes ago";
  } else if (difference < day) {
    return Math.round(difference / hour) + " hours ago";
  } else if (difference < month) {
    return Math.round(difference / day) + " days ago";
  } else if (difference < year) {
    return Math.round(difference / month) + " months ago";
  } else {
    return Math.round(difference / year) + " years ago";
  }
}
