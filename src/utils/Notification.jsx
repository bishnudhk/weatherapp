import { notification } from 'antd';

const openNotification = (message) => {
    notification.open({
      message:message,
      onClick:() => {
        console.log("Notification Clicked");
      }
    });
};

  
 
  export default openNotification;