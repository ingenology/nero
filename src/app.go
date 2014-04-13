package main

import (
	"models"
	"net/http"
	"controllers"
	"github.com/gorilla/mux"
)

func main() {
	models.Init(100)

	router := mux.NewRouter()

	controllers.RegisterJournalHandlers(router)

	http.Handle("/", router)
	http.ListenAndServe(":8080", nil)
}
