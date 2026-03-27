import React from 'react';

const NotificationTask = () => {
  
  // 1. Function to request permission
  const requestPermission = () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else {
      Notification.requestPermission().then((permission) => {
        console.log("Permission status:", permission);
      });
    }
  };

  // 2. Function to trigger the notification
  const showNotification = () => {
    if (Notification.permission === "granted") {
      new Notification("Lab Work: Success!", {
        body: "Your browser notification is working!",
        icon: "https://via.placeholder.com", // Optional icon
      });
    } else {
      alert("Please allow notifications first!");
    }
  };

  return (
    <div className="container mt-5 text-center p-5 border rounded bg-light">
      <h2>Browser Notification Lab</h2>
      <div className="mt-4">
        <button className="btn btn-warning me-2" onClick={requestPermission}>
          Step 1: Allow Notifications
        </button>
        <button className="btn btn-primary" onClick={showNotification}>
          Step 2: Show Notification
        </button>
      </div>
    </div>
  );
};

export default NotificationTask;