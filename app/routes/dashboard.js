const express = require('express');
const router = express.Router();
const dashboard = require("./../../app/controllers/dashboard");
const appConfig = require("./../../config/config")
const auth = require("./../../app/middlewares/auth");
module.exports.setRouter = (app) => {

    let baseUrl = appConfig.apiVersion;


    app.post(`${baseUrl}/getNormalUsers` ,auth.authenticateUserWithHash,dashboard.getAllNormalUsers);
   
    app.post(`${baseUrl}/addMeeting`,auth.authenticateUserWithHash, dashboard.addMeeting);
    
    app.post(`${baseUrl}/updateMeeting`,auth.authenticateUserWithHash, dashboard.updateMeeting);

    app.post(`${baseUrl}/deleteMeeting`,auth.authenticateUserWithHash, dashboard.deleteMeeting);

    app.post(`${baseUrl}/getAllMeetings`,auth.authenticateUserWithHash, dashboard.getAllMeetings);

    app.post(`${baseUrl}/notifications`,auth.authenticateUserWithHash, dashboard.getAllTextNotifications);

    app.post(`${baseUrl}/notificationSeen`,auth.authenticateUserWithHash, dashboard.marknotificationAsSeen);
}