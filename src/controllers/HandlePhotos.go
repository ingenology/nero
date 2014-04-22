package controllers

import (
	"encoding/json"
	"fmt"
	// "models"
	"net/http"
)

func HandlePhotoUpload(res http.ResponseWriter, request *http.Request) {
	file, _, _ := request.FormFile("file")
	// contentType := request.FormValue("contentType")
	var fileBytes []byte
	_, getFileError := file.Read(fileBytes)
	if getFileError != nil {
		fmt.Println(getFileError)
	}
	// success, statuscode, message, userId := models.Register(emailaddress, password, firstname, lastname)
	// output := jsonOutputs.UserOutput{
	// 	Success:    success,
	// 	Message:    message,
	// 	Statuscode: statuscode,
	// 	UserId:     userId}

	outputJson, _ := json.Marshal("test")
	fmt.Fprintf(res, string(outputJson))
}
