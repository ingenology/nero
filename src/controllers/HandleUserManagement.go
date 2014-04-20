package controllers

import (
	"encoding/json"
	"fmt"
	"jsonOutputs"
	"models"
	"net/http"
	"strings"
)

func HandleRegister(res http.ResponseWriter, request *http.Request) {
	res.Header().Set("Access-Control-Allow-Origin", "*")
	res.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
	res.Header().Set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS")
	emailaddress := strings.ToLower(request.FormValue("email"))
	password := request.FormValue("password")
	firstname := request.FormValue("first_name")
	lastname := request.FormValue("last_name")
	fmt.Println(emailaddress, password, firstname, lastname)
	success, statuscode, message, userId := models.Register(emailaddress, password, firstname, lastname)
	output := jsonOutputs.UserOutput{
		Success:    success,
		Message:    message,
		Statuscode: statuscode,
		UserId:     userId}
	outputJson, _ := json.Marshal(output)
	fmt.Fprintf(res, string(outputJson))
}
func HandleLogin(res http.ResponseWriter, request *http.Request) {
	res.Header().Set("Access-Control-Allow-Origin", "*")
	res.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
	res.Header().Set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS")
	emailAddress := strings.ToLower(request.FormValue("email"))
	password := request.FormValue("password")
	success, statuscode, message, user := models.Login(emailAddress, password)
	output := jsonOutputs.UserOutput{
		Success:    success,
		Message:    message,
		Statuscode: statuscode,
		UserId:     user.Id}
	outputJson, _ := json.Marshal(output)
	fmt.Fprintf(res, string(outputJson))
}
