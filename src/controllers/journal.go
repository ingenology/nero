package controllers

import (
	"models"
	"strconv"
	"net/http"
	"github.com/gorilla/mux"
	"encoding/json"
)

func RegisterJournalHandlers(router *mux.Router) {
	router.Path("/journal/add").HandlerFunc(addJournalHandler).Methods("POST")
	router.Path("/{user_id}/journals").HandlerFunc(getJournalHandler).Methods("GET")
}

func addJournalHandler(resWriter http.ResponseWriter, req *http.Request) {

}

func getJournalHandler(resWriter http.ResponseWriter, req *http.Request) {
	params := mux.Vars(req)
	userId, err := strconv.ParseInt(params["user_id"], 10, 32)

	if err != nil {
		resWriter.Write([]byte("Invalid user id!"))
	}

	journals, err := models.GetJournalsByUserId(int32(userId))

	if err != nil {
		resWriter.Write([]byte("No journals found!"))
	}

	journalsJSON, err := json.Marshal(journals)

	if err == nil {
		resWriter.Write(journalsJSON)
	}
}
