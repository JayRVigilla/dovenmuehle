/**
 * Generate a selective update query based on a request body:
 *
 * - table: where to make the query
 * - items: an object with keys of columns you want to update and values with
 *          updated values
 * - key: the column that we query by (e.g. username, handle, id)
 * - id: current record ID
 *
 * Returns object containing a DB query as a string, and array of
 * string values to be updated
 *
 */

function sqlForPartialUpdate(table, items, key, id) {
  // keep track of item indexes
  // store all the columns we want to update and associate with vals

  let idx = 1;
  const columns = [];
  const columnNames = []; // added

  // filter out keys that start with "_" -- we don't want these in DB
  for (const key in items) {
    if (key.startsWith('_')) {
      delete items[key];
    }
  }

  for (const column in items) {
    columns.push(`${column}=$${idx}`);
    columnNames.push(column); // added
    idx += 1;
  }

  columnNames.push(key);

  // example of columns ['username=$1', 'handle=$2', 'id=$3', 'phone=$3']
  // build query
  const cols = columns.join(', ');
  const colNames = columnNames.join(', '); // added

  // cols looks like "username=$1, handle=$2, id=$3, phone=$3"
  const query = `UPDATE ${table} SET ${cols} WHERE ${key}=$${idx} RETURNING ${colNames}`; // changed from * to ${columnNames}, wanted to return JUST what was changed, not everything for security concerns

  const values = Object.values(items);
  values.push(id);

  // only creates query, doesn't send it
  // we should use this in the models?
  return { query, values };
}

module.exports = sqlForPartialUpdate;
