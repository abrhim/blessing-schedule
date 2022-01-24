import { GoogleSpreadsheet, GoogleSpreadsheetRow } from "google-spreadsheet"


import type { TableRow } from "../components/Table/"
const googleSheetUrl = "1-kBEaIBKMbVD9i7QLMBGXY_jrb4pzJEsU-bz5V0Xvmk"
export const getSchedule = async (): Promise<TableRow[]> => {
    const doc: GoogleSpreadsheet = new GoogleSpreadsheet(googleSheetUrl);
    await doc.useApiKey("AIzaSyC5MJSqr-IEevUCfufDnZvOHUIHlqJVFPw")
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
    const rows: GoogleSpreadsheetRow[] = await sheet.getRows()
    const schedule: TableRow[] = rows.map((row) => ({ date: row.Date, a: row.A, b: row.B }))
    return schedule
}
