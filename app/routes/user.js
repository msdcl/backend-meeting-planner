const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/user");
const appConfig = require("./../../config/config")

module.exports.setRouter = (app) => {

    let baseUrl = appConfig.apiVersion;


    app.post(`${baseUrl}/signup` ,userController.signUpFunction);
   
    app.post(`${baseUrl}/login`, userController.loginFunction);
    
    app.post(`${baseUrl}/logout`, userController.logout);

    app.post(`${baseUrl}/forgotPassword`, userController.forgotPassword);

    app.post(`${baseUrl}/changePassword`, userController.changePassword);
}
