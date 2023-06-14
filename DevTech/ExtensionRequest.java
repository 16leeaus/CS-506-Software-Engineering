public class ExtensionRequest extends ShmeequelEntity {
{
    enum ERStatus {
        PENDING,
        APPROVED,
        REJECTED
    }
    
    private int idExtensionRequest;
    private int idAssignment;
    private String studentId;
    private String explanation;
    private java.sql.TimeStamp timeOfRequest;
    private ERStatus status;

    public ExtensionRequest(){
    }
    
    private String primaryKeyColumn () {
        return "idExtensionRequest";
    }
    private int getPrimaryKey () {
        return idExtensionRequest;
    }
    private boolean setPrimaryKey(int primaryKey) {
        idExtensionRequest = primaryKey;
        return true;
    }
    
    private boolean fillEntityFromSqlHash(HashMap<String,String> sqlHashMap){
        boolean theResult = false;
        this.setPrimaryKey(sqlHashMap.get(this.primaryKeyColumn()));
        this.idAssignment = Integer.parseInt(sqlHashMap.get('idAssignment'));
        this.studentId = sqlHashMap.get('studentId');
        this.explanation = sqlHashMap.get('explanation');
        this.timeOfRequest = java.sql.TimeStamp.valueOf(sqlHashMap.get('timeOfRequest'));
        this.status = ERStatus.valueOf(sqlHashMap.get('status'));
        theResult = true;
        return theResult;
    }
    private String buildColumnNamesAndValuesForSql(){
        String theResult = "";
        String columnNames = 
          '(' +
          join(',',
               'idAssignment', 'studentId',
               'explanation', 'timeOfRequest', 'status'
               )
          + ")";
        String values = 
                  "(" +
          join(",",
               this.idAssignment, this.studentId,
               this.explanation, this.timeOfRequest, this.status
               )
          + ")";
        theResult = columnName + " values " + values;
        return theResult;
    }
    public boolean approve(){
        this.status = ERStatus.APPROVED;
    }
    public boolean reject(){
        this.status = ERStatus.REJECTED;
    }
}