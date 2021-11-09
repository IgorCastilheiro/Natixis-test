# Salesforce Natixix Table test project

This project uses Salesforce-CLI.
It contains 3 Custom Ojbects definitions:
First, Second and Third.
    -First object contains a lookup field to Second object
    -Second object contains a lookup field to Third object

Contains also a LWC Component called Table Test.
This table has inifite loading and it shows all the records of First object with related records of Second and Third.

Contains a FlexiPage to show the Table.

Contains a JSON Plan with demo data:
    To import data with Salesforce-CLI afted authorizing your default org, use the command bellow:
    sfdx force:data:tree:import -p data/First__c-plan.json -u *Default Org Alias*

Contains Package.xml ready to deploy
Remember to allow permission of object and its fields to user after deploy and activate FlexiPage in App Builder.

Happy testing ;)