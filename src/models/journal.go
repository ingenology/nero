package models

import "github.com/coopernurse/gorp"

type Journal struct {
	Id         int32   `db:"id"`
	UserId     int32   `db:"user_id"`
	Title      string  `db:"title"`
	Latitude   float64 `db:"latitude"`
	Longitude  float64 `db:"longitude"`
	CreateDate int64   `db:"create_date"`
	Azimuth    float64 `db:"azimuth"`
	Altitude   float64 `db:"altitude"`
}

func InsertJournal(journal *Journal) error {
	_, err := dbTemplate(func(datasource *gorp.DbMap) (interface{}, error) {
		err := datasource.Insert(journal)

		return nil, err
	})

	return err
}

const GetJournalSQL = `
	SELECT j.id, j.user_id, j.title, j.latitude, j.longitude, j.create_date, j.azimuth, j.altitude
	FROM journals j
	WHERE j.id = ?
`
func GetJournals(journalId int32) (*Journal, error) {
	result, err := dbTemplate(func(datasource *gorp.DbMap) (interface{}, error) {
		container := &Journal{}
		err := datasource.SelectOne(container, GetJournalSQL, journalId)

		return container, err
	})

	return result.(*Journal), err
}

const DeleteJournalSQL = `
	DELETE FROM journals WHERE id = ?
`
func deleteJournal(journalId int32) (int64, error) {
	rowCount, err := dbTemplate(func(datasource *gorp.DbMap) (interface{}, error) {
		result, err := datasource.Exec(DeleteJournalSQL, journalId)

		if err != nil {
			return nil, err
		}

		return result.RowsAffected()
	})

	return rowCount.(int64), err
}
