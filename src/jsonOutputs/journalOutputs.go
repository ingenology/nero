package jsonOutputs

import "models"

type JournalsOutput struct {
	Success    bool
	Statuscode int
	Message    string
	Journals   []*models.Journal
}

type JournalOutput struct {
	Success    bool
	Statuscode int
	Message    string
	JournalId  int32
}
