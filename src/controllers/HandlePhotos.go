package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"io/ioutil"
	"models"
	"net/http"
)

func HandlePhotoUpload(res http.ResponseWriter, request *http.Request) {
	params := mux.Vars(request)
	userId := params["user_id"]
	journalId := params["journal_id"]
	file, header, _ := request.FormFile("file")
	rawFileName := header.Filename

	fmt.Println(header.Header)
	contentType := header.Header.Get("Content-Type")
	fileBytes, getFileError := ioutil.ReadAll(file)
	if getFileError != nil {
		fmt.Println(getFileError, fileBytes, "There was an error")
	}

	models.CreateNewPhotoForJournal(userId, journalId, fileBytes, rawFileName, contentType, "1")
	// success, statuscode, message, userId := models.Register(emailaddress, password, firstname, lastname)
	// output := jsonOutputs.UserOutput{
	// 	Success:    success,
	// 	Message:    message,
	// 	Statuscode: statuscode,
	// 	UserId:     userId}

	outputJson, _ := json.Marshal("test")
	fmt.Fprintf(res, string(outputJson))
}
