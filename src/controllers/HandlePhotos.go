package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"io/ioutil"
	"jsonOutputs"
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

	success, statuscode, message, photoId := models.CreateNewPhotoForJournal(userId, journalId, fileBytes, rawFileName, contentType, "1")

	output := jsonOutputs.PhotoOutput{
		Success:    success,
		Message:    message,
		Statuscode: statuscode,
		PhotoId:    photoId}

	outputJson, _ := json.Marshal(output)
	fmt.Fprintf(res, string(outputJson))
}
