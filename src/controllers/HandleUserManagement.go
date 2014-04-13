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
	emailAddress := strings.ToLower(request.FormValue("email"))
	password := request.FormValue("password")
	firstname := request.FormValue("first_name")
	lastname := request.FormValue("last_name")
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
