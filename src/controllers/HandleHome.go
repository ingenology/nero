package controllers

import (
	"net/http"
	"templateUtil"
)

func HandleIndexPage(res http.ResponseWriter, request *http.Request) {
	templateUtil.Display(res, "index", nil)
}
