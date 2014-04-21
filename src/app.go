package main

import (
	"controllers"
	"github.com/gorilla/mux"
	"models"
	"net/http"
)

func main() {
	models.Init(100)

	router := mux.NewRouter()
	router.HandleFunc("/register", controllers.HandleRegister).Methods("POST")
	router.HandleFunc("/login", controllers.HandleLogin).Methods("POST")
	router.HandleFunc("/{user_id}/journals", controllers.AddJournalHandler).Methods("POST")
	router.HandleFunc("/{user_id}/journals", controllers.GetJournalHandler).Methods("GET")
	router.HandleFunc("/{user_id}/journal/{journal_id}/photo", controllers.HandlePhotoUpload).Methods("POST")
	http.HandleFunc("/static/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, r.URL.Path[1:])
	})

	http.Handle("/", router)
	http.ListenAndServe(":8080", nil)
}
