/** Insert a new record into a database table, using a SQL INSERT statement
 * @param dbName        also called the schema
 * @param tableName     
 * @param colsAndValues A string containing a comma-separated list of column names,
 *                      followed by a comma-separated list of string values, e.g.:
 *                       "(ham, jam, spam) values('meat', 'treat', 'mystery')"
 * @return              iff insert succeeded, returns the primary key value of the new row
 *                      otherwise, returns 0
*/
public int shmeequelCreate(String dbName, String tableName, String fieldsStr, String valuesStr) {}

/** Read one or more records from a database table, using a SQL SELECT statement to
 *  obtain only rows with a matching designated key.
 * @param dbName      also called the schema
 * @param tableName
 * @param keyColumn   the name of the column in the table to be searched
 * @param queryKey    the value to be searched for in the keyColumn field
 * @return            iff the SELECT did not fail, an ArrayList of 0 or more HashMaps.
 *                    Each HashMap corresponds to a single matching row in the table,
 *                    with each entity in the HashMap being the name and (String) value
 *                    of a field in the row.
 *                    null, if the SELECT failed for any reason
*/
public ArrayList<HashMap<String,String>> shmeequelRead(String dbName, String tableName, String keyColumn, String queryKey) {}

/** Modifies the values stored in a database record, using a SQL UPDATE statement.
 * @param dbName        also called the schema
 * @param tableName     
 * @param primaryKeyCol Name of the column that is the table's primary key.
 * @param queryKey      Value of the primary key of the record to update.
 * @param colsAndValues A string containing a comma-separated list of column names,
 *                      followed by a comma-separated list of string values, e.g.:
 *                       "(ham, jam, spam) values('meat', 'treat', 'mystery')"
 * @return              iff the UPDATE succeeded, returns true
 *                      otherwise, returns false
*/
public boolean shmeequelUpdate(String dbName, String tableName, String keyName, String keyValue, String fieldsStr, String valuesStr) {}

/** Deletes a single row from the database, using a SQL DELETE statement
 * @param dbName        also called the schema
 * @param tableName     
 * @param primaryKeyCol Name of the column that is the table's primary key.
 * @param queryKey      Value of the primary key of the record to update.
 * @return              iff the DELETE succeeded, returns true
 *                      otherwise, returns false
*/
public boolean shmeequelDelete(String dbName, String tableName, String keyName, String keyValue) {}


/**
 * ShmeequelEntity is an entity mapped to a mysql table.
 *
 * ShmeequelEntity supports CRUD operations via the shmeequel library methods,
 *   shmeequelCreate, shmeequelRead, shmeequelUpdate, and shmeequelDelete
 * ShmeequelEntity can only map to a table whose primary key is a single column
 *   containing an integer.
 * ShmeequelEntity has four abstract methods, described below.
 *
 * @author Scott Swanson
 * @version 2022.11.10
*/
public abstract class ShmeequelEntity
{
    private String booleanToSql(boolean theBoolean){
        return (theBoolean ? '1':'0');
    }

    private abstract String primaryKeyColumn();
    private abstract int getPrimaryKey(){}
    private abstract boolean setPrimaryKey(int primaryKey_new){}

    private boolean setPrimaryKey(String primaryKey_new){
        return this.setPrimaryKey(Integer.parseInt(primaryKey_new));
    }

    private boolean pickItUp(
        String dbName, String tableName, int queryPrimaryKey
    ) {
        // assume failure -- set result = false
        // call shmeequelRead to get a HashMap of the entry with
        //   primaryKey = queryPrimaryKey
        // if shmeequelRead returned a list with exactly one HashMap,
        //   invoke populateEntityFromTableHash with that HashMap
        //     set result = returned value from populateEntityFromTableHash
        // return result
    }

    private boolean putItDown(
        String dbName, String tableName
    ) {
        // assume failure -- set result = false
        // call buildColumnNamesAndValuesForSql to create the strings of
        //   column names and values used in INSERT and UPDATE commands
        // if primaryKey > 0
        //   call shmeequelUpdate to save to the existing record
        //   if shmeequelUpdate returned true, set result = true;
        // else
        //   call shmeequelCreate to save to the existing record
        //   if shmeequelCreate returned an int > 0
        //     set primaryKey to 0
        //     set result = true
        // return result
    }
    
    private boolean chuckItOut (String dbName, String tableName) {
    // assume failure -- set result = false
    // if primaryKey > 0
    //   call shmeequelDelete()
    //   if shmeequelDelete returned true
    //     set the primary key to 0
    //     set result to true
    // return result
    }
    
    private abstract boolean fillEntityFromSqlHash(HashMap<String,String> sqlHashMap){}
    private abstract String buildColumnNamesAndValuesForSql(){}

    public boolean save(String dbName, String tableName){
        this.putItDown(dbName, tableName);
    }

    public boolean read(String dbName, String tableName, int primaryKey){
        this.pickItUp(dbName, tableName, primaryKey);
    }

    public boolean delete(String dbName, String tableName){
        this.chuckItOut(dbName, tableName);
    }
}