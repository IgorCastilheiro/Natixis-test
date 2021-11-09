public with sharing class TableTestController {

    @AuraEnabled(cacheable=true)
    public static List<TableTestWrapper> getListOfFirsts(Integer maximum, Integer offset) {
        List<First__c> listOfFirsts =  FirstDAO.fetchAll(maximum, offset);
        List<TableTestWrapper> wrappers = new List<TableTestWrapper>();
        for (First__c first : listOfFirsts) {
            wrappers.add(new TableTestWrapper(first.Name, first.Second__r.Name, first.Second__r.Third__r.Name));
        }

        return wrappers;
    }

    public class TableTestWrapper {
        @AuraEnabled
        public String firstName { get; set; }
        @AuraEnabled
        public String secondName { get; set; }
        @AuraEnabled
        public String thirdName { get; set; }
    
        public TableTestWrapper(String firstName, String secondName, String thirdName) {
            this.firstName = firstName;
            this.secondName = secondName;
            this.thirdName = thirdName;
        }
    }
}

