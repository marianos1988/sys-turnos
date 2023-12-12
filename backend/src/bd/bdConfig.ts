import mySql from "mysql";

const dbConfig = {
	host: "localhost",
	user: "root",
	password: "",
	database: "sys-turnos"
}

const pool = mySql.createPool(dbConfig);

export default pool;