package jsonOutputs

import "models"

type JournalsOutput struct {
	Success    bool   `json:"success"`
	Statuscode int    `json:"statuscode"`
	Message    string `json:"message"`
	Journals   []*models.Journal
}

type JournalOutput struct {
	Success    bool   `json:"success"`
	Statuscode int    `json:"statuscode"`
	Message    string `json:"message"`
	JournalId  int32  `json:"journal_id"`
}
