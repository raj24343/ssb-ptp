/**
 * Google Apps Script - Form to Google Sheet
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet: https://sheets.google.com
 * 2. Go to Extensions > Apps Script
 * 3. Delete any code and paste this entire file
 * 4. Replace 'YOUR_SHEET_NAME' with your actual sheet name (or leave as is if using first sheet)
 * 5. Click Deploy > New deployment
 * 6. Select type: Web app
 * 7. Execute as: Me | Who has access: Anyone
 * 8. Click Deploy and copy the Web App URL
 * 9. Create .env in your project root and add:
 *    VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get form data - form-urlencoded from HTML form, or JSON from fetch
    let data = {};
    if (e.parameter) {
      data = e.parameter; // form-urlencoded POST
    } else if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (_) {}
    }

    const row = [
      data.timestamp || new Date().toISOString(),
      data.inquiryType || '',
      data.name || '',
      data.email || '',
      data.phone || '',
      data.qualification || '',
      data.programInterest || '',
      data.subject || '',
      data.message || ''
    ];

    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Inquiry Type', 'Name', 'Email', 'Phone', 'Qualification', 'Program Interest', 'Subject', 'Message']);
    }
    
    sheet.appendRow(row);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', message: 'Submitted' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// For GET requests (e.g. testing)
function doGet(e) {
  return ContentService
    .createTextOutput('Form endpoint. Use POST to submit data.')
    .setMimeType(ContentService.MimeType.TEXT);
}
