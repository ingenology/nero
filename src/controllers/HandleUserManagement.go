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

}

func HandleLogin(res http.ResponseWriter, request *http.Request) {
	emailAddress := strings.ToLower(request.FormValue("email"))
	password := request.FormValue("password")
	success, statuscode, message, user := models.Login(emailAddress, password)
	output := jsonOutputs.UserOutput{
	Success: success,
	Message: message,
	Statuscode: statuscode,
	UserId: user.Id}
	outputJson, _ := json.Marshal(output)
	fmt.Fprintf(res, string(outputJson))
}