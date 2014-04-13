package models

import "github.com/coopernurse/gorp"

type Journal struct {
	Id         int32   `db:"id"`
	UserId     int32   `db:"user_id" json:"user_id"`
	Title      string  `db:"title" json:"title"`
	Latitude   float64 `db:"latitude" json:"latitude"`
	Longitude  float64 `db:"longitude" json:"longitude"`
	CreateDate int64   `db:"create_date" json:"create_date"`
	Azimuth    float64 `db:"azimuth" json:"azimuth"`
	Altitude   float64 `db:"altitude" json:"altitude"`
}

func InsertJournal(journal *Journal) error {
	_, err := dbTemplate(func(datasource *gorp.DbMap) (interface{}, error) {
		err := datasource.Insert(journal)

		return nil, err
	})

	return err
}

const GetJournalsByUserIdSQL = `
	SELECT j.id, j.user_id, j.title, j.latitude, j.longitude, j.create_date, j.azimuth, j.altitude
	FROM journals j
	WHERE j.user_id = ?
`
func GetJournalsByUserId(journalId int32) ([]*Journal, error) {
	result, err := dbTemplate(func(datasource *gorp.DbMap) (interface{}, error) {
		container := []*Journal{}
		_, err := datasource.Select(&container, GetJournalsByUserIdSQL, journalId)

		return container, err
	})

	return result.([]*Journal), err
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
