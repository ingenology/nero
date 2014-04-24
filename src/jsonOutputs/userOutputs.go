package jsonOutputs

type UserOutput struct {
	Success    bool   `json:"success"`
	Message    string `json:"message"`
	Statuscode int    `json:"statuscode"`
	UserId     int    `json:"user_id"`
}
