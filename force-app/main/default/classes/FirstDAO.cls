public with sharing class FirstDAO {
    public static List<First__c> fetchAll(Integer maximum, Integer offset) {
        Integer max = maximum;
        Integer step = offset;
        return [SELECT
            Name,
            Second__r.Name,
            Second__r.Third__r.Name 
            FROM First__c
            ORDER BY Name
            LIMIT :max
            OFFSET :step
        ];

    }
}
