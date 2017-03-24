import axios from 'axios'

// Private

// -
// Fetch email list
// -
export function fetchEmailList () {
  let pm = axios.get(`http://email-api.dev/email/list`)
  return pm
}

// -
// Fetch email item
// -
export function fetchEmailItem (id) {
  let pm = axios.get(`http://email-api.dev/email/${id}`)
  return pm
}
