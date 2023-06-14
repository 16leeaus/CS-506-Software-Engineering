import javax.xml.crypto.dsig.keyinfo.KeyValue;

/**
 * Each quiz in the ShmeequelEntity has a unique idQuiz
 * This Quiz class is used to manage each quiz and the quizItem inside this
 * quiz.
 *
 * @author Vivian Zhang (JUnit tests) and Austin Lee (Method Implementations)
 * @version 2022.11.28
 */
public class Quiz extends ShmeequelEntity {

    private int idQuiz;
    private String quizName;
    private int allowShuffleItems;
    private int allowShuffleAnswers;
    private int allowReview;

    /**
     * Create a new blank quiz, with certain administrative values.
     * This will use a SQL INSERT statement to add a new item to the table.
     * 
     * @param dbName     Name of the database that will be accessed.
     * @param tableName  A new quiz entry will be created in a specified database
     *                   table, this should be the quiz table.
     * @param fieldName  The table column that any information will be placed into.
     * @param fieldValue Specific details regarding the quiz, i.e. idQuiz, title,
     *                   and others...
     * 
     * @return If and only if a insert call is usccessful, the createQuiz method
     *         will return the primary key
     *         value of the new quiz. Which can be used to find questions in the
     *         quizItems table.
     */
    public int createQuiz(String dbName, String tableName, String fieldName, String fieldValue) {
        // try {
        // create table QUIZZES
        // } catch {exception e}

        // try {
        // insert into QUIZZES(...)
        // } catch (exception e) {
        // print("error")
        // }

        // return quizID
    }

    /**
     * Add an item to the quiz entry in the given database. This will use a
     * SQL INSERT statement to add a new item to the table.
     * 
     * @param dbName    Name of the database that will be accessed.
     * @param tableName the specific quiz table to be accessed.
     * @param idQuiz    Quiz id of the quiz that we wish to add the quiz item.
     * @param itemValue The values that is associated with this quiz item
     * 
     * @return
     */
    public boolean addItem(String dbName, String tableName, String idQuiz, HashMap<String, String> itemValue) {
        // try {
        // create table QUIZITEMS
        // } catch {exception e}

        // try {
        // insert into QUIZITEMS(...)
        // } catch (exception e) {
        // print("error")
        // }

        // return result
    }

    /**
     * Remove an item from a specified quiz. This will delete a single row from the
     * table using a SQL DELETE statement.
     * 
     * @param dbName    Name of the database that will be accessed.
     * @param tableName Name of the table witin the database that will be accessed.
     * @param idQuiz    Id of the quiz that will be modified.
     * @param itemKey   Key of the item that will be deleted.
     * 
     * @return
     */
    public boolean removeItem(String dbName, String tableName, String idQuiz, String itemKey) {
        // try {
        // DELETE FROM table WHERE itemKey = itemKey
        // } catch (exception e) {
        // print (error)
        // }

        // return result
    }

    /**
     * Duplicate a quiz, along with all associated items.
     * 
     * @param dbName    Name of the database that will be accessed.
     * @param tableName Name of the table inside the database that will be accessed.
     * @param idQuiz    Id number of the quiz that will be copied, this will also be
     *                  used to copy all associated quiz items within their own
     *                  respective table.
     * 
     * @return
     */
    public int duplicateQuiz(String dbName, String tableName, String idQuiz) {
        // try {
        // INSERT INTO QUIZZES (...)
        // SELECT (quizID)
        // } catch (exception e) {
        // print ("error")
        // }

        // return quizID
    }

    /**
     * Change the order of a quiz item (move it from position X to position Y --
     * which implies changing the itemNumber field of other items).
     *
     * @param dbName         Name of the database that will be accessed.
     * @param tableName      the specific quiz table to be accessed.
     * @param idQuiz         Quiz id of the quiz that we wish to add the quiz item.
     * @param originalNumber The position of the item to be moved from.
     * @param destNumber     The position of the item to be moved to
     */
    public boolean changeOrder(String dbName, String tableName, String idQuiz, int orginalNumber, int destNumber) {
        // try {
        // UPDATE QUIZITEMS
        // SET quizItem (... , destNumber)
        // WHERE originalNumber = original Number
        // } catch (exception e) {
        // print(error)
        // }

        // return result
    }

    /**
     * Set a flag indicating whether to allow items to be presented in a shuffled
     * order.
     *
     * @param dbName            Name of the database that will be accessed.
     * @param tableName         the specific quiz table to be accessed.
     * @param idQuiz            Quiz id of the quiz that we wish to add the quiz
     *                          item.
     * @param allowShuffleItems True to allow item to be presented in a shuffled
     *                          order, False otherwise
     */
    public boolean setFlagShuffleItem(String dbName, String tableName, String idQuiz, int allowShuffleItems) {
        // try {
        // UPDATE QUIZITEMS
        // SET allowShuffleItems = allowShuffleItems
        // WHERE quizID
        // } catch (exception e) {
        // print (error)
        // }

        // return result
    }

    /**
     * Set a flag indicating whether to allow the choices within individual items to
     * be presented in a shuffled order.
     *
     * @param dbName              Name of the database that will be accessed.
     * @param tableName           the specific quiz table to be accessed.
     * @param idQuiz              Quiz id of the quiz that we wish to add the quiz
     *                            item.
     * @param allowShuffleAnswers True to allow the choices to be presented in a
     *                            shuffled order, False otherwise
     */
    public boolean setFlagShuffleAnswers(String dbName, String tableName, String idQuiz, int allowShuffleAnswers) {
        // try {
        // UPDATE QUIZITEMS
        // SET allowShuffleAnswers = allowShuffleAnswers
        // WHERE quizID
        // } catch (exception e) {
        // print (error)
        // }

        // return result
    }

    /**
     * Set a flag indicating whether students are allowed to go back and review
     * items.
     *
     * @param dbName      Name of the database that will be accessed.
     * @param tableName   the specific quiz table to be accessed.
     * @param idQuiz      Quiz id of the quiz that we wish to add the quiz item.
     * @param allowReview True to allow students to to go back and review items.,
     *                    False otherwise
     */
    public boolean setFlagReview(String dbName, String tableName, String idQuiz, int allowReview) {
        // try {
        // UPDATE QUIZITEMS
        // SET allowReview = allowReview
        // WHERE quizID
        // } catch (exception e) {
        // print (error)
        // }

        // return result
    }

    /**
     * Test the correctness of createQuiz method
     */
    @Test
    public void testcreateQuiz() {
        // Quiz quiz = new Quiz();
        // quiz.createQuiz(...);
        // test whether this quiz is empty
    }

    /**
     * Test the correctness of addItem method
     */
    @Test
    public void testaddItem() {
        // Quiz quiz = new Quiz();
        // quiz.addItem(...);
        // quiz.addItem(...);
        // list the quiz
        // test the size and quizItems in this quiz
    }

    /**
     * Test the correctness of removeItem method
     */
    @Test
    public void testremoveItem() {
        // Quiz quiz = new Quiz();
        // quiz.addItem(...);
        // quiz.addItem(...);
        // quiz.removeItem(...);
        // also do the erroe checking
        // list the quiz
        // test the size and quizItems in this quiz
    }

    /**
     * Test the correctness of duplicateQuiz method
     */
    @Test
    public void testduplicateQuiz() {
        // Quiz quiz = new Quiz();
        // quiz.addItem(...);
        // quiz.addItem(...);
        // Quiz quizDup = quiz.duplicateQuiz(...);
        // list the quiz
        // test the size and quizItems by comparing these two quizes
    }

    /**
     * Test the correctness of changeOrder method
     */
    @Test
    public void testchangeOrder() {
        // Quiz quiz = new Quiz();
        // quiz.addItem(...);
        // quiz.addItem(...);
        // quiz.changeOrder(...);
        // list the quiz
        // test the size, order, and quizItems
    }

    /**
     * Test the correctness of setFlagShuffleItem method
     */
    @Test
    public void testsetFlagShuffleItem() {
        // Quiz quiz = new Quiz();
        // quiz.addItem(...);
        // quiz.addItem(...);
        // quiz.setFlagShuffleItem(...);
        // test the size, quizItems, and the allowShuffleItems flag
    }

    /**
     * Test the correctness of setFlagShuffleChoices method
     */
    @Test
    public void setFlagShuffleAnswers() {
        // Quiz quiz = new Quiz();
        // quiz.addItem(...);
        // quiz.addItem(...);
        // quiz.setFlagShuffleAnswers(...);
        // test the size, quizItems, and the allowShuffleAnswers flag
    }

    /**
     * Test the correctness of setFlagReview method
     */
    @Test
    public void testsetFlagReview() {
        // Quiz quiz = new Quiz();
        // quiz.addItem(...);
        // quiz.addItem(...);
        // quiz.testsetFlagReview(...);
        // test the size, quizItems, and the allowShuffleReview flag
    }

}
