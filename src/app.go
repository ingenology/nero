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
	router.Path("/{user_id}/journals").HandlerFunc(controllers.AddJournalHandler).Methods("POST")
	router.Path("/{user_id}/journals").HandlerFunc(controllers.GetJournalHandler).Methods("GET")

	http.HandleFunc("/static/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, r.URL.Path[1:])
	})

	http.Handle("/", router)
	http.ListenAndServe(":8080", nil)
}
