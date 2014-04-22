package controllers

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"jsonOutputs"
	"models"
	"net/http"
)

func AddJournalHandler(resWriter http.ResponseWriter, req *http.Request) {
	resWriter.Header().Set("Access-Control-Allow-Origin", "*")
	resWriter.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
	resWriter.Header().Set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS")
	params := mux.Vars(req)
	userId := params["user_id"]
	title := req.FormValue("title")
	latitude := req.FormValue("latitude")
	longitude := req.FormValue("longitude")
	notes := req.FormValue("notes")
	hashtags := req.FormValue("hashtags")
	altitude := req.FormValue("altitude")
	azimuth := req.FormValue("azimuth")
	status := req.FormValue("status")
	success, statuscode, message, id := models.InsertJournal(userId,
		title,
		latitude,
		longitude,
		notes,
		hashtags,
		altitude,
		azimuth,
		status)

	output := jsonOutputs.JournalOutput{
		Success:    success,
		Statuscode: statuscode,
		Message:    message,
		JournalId:  id}
	journalsJSON, err := json.Marshal(output)
	if err == nil {
		resWriter.Write(journalsJSON)
	}
}

func GetJournalHandler(resWriter http.ResponseWriter, req *http.Request) {
	resWriter.Header().Set("Access-Control-Allow-Origin", "*")
	resWriter.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
	resWriter.Header().Set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS")
	params := mux.Vars(req)
	userId := params["user_id"]

	success, statuscode, message, journals := models.GetJournalsByUserId(userId)
	output := jsonOutputs.JournalsOutput{
		Success:    success,
		Statuscode: statuscode,
		Message:    message,
		Journals:   journals}
	journalsJSON, err := json.Marshal(output)

	if err == nil {
		resWriter.Write(journalsJSON)
	}
}
