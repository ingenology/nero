package models

import "testing"

func TestJournalModel(t *testing.T) {
	Init(100)

	journal := &Journal{
		UserId:     1,
		Title:      "Test Journal",
		Latitude:   float64(1.2),
		Longitude:  float64(3.4),
		CreateDate: int64(12345),
		Azimuth:    float64(4.5),
		Altitude:   float64(6.7),
	}

	err := InsertJournal(journal)

	if err != nil {
		t.Errorf("Cannot insert journal")
	}

	if journal.Id == 0 {
		t.Error("Journal should have id!")
	}

	journals, err := GetJournalsByUserId(1)

	if len(journals) == 0 {
		t.Error("Should have test journal in DB!")
	}

	count, err := deleteJournal(journal.Id)

	if count == 0 {
		t.Error("Test journal should be removed!")
	}

	if count != 1 {
		t.Error("Only one test journal is removed!")
	}
}
