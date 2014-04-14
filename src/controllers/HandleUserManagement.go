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
	emailAddress := strings.ToLower(request.FormValue("email"))
	password := request.FormValue("password")
	firstname := request.FormValue("first_name")
	lastname := request.FormValue("last_name")
	fmt.Println(emailAddress, password, firstname, lastname)
	user := &models.User{
		First_name: firstname,
		Last_name:  lastname,
		Password:   password,
		Email:      emailAddress}
	success, statuscode, message := models.Register(user)
	output := jsonOutputs.UserOutput{
		Success:    success,
		Message:    message,
		Statuscode: statuscode,
		UserId:     user.Id}
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