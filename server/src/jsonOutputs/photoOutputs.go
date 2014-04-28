package jsonOutputs

type PhotoOutput struct {
	Success    bool   `json:"success"`
	Statuscode int    `json:"statuscode"`
	Message    string `json:"message"`
	PhotoId    int32  `json:"photo_id"`
}
