# Activity 1

```xml
<employeeList xmlns="urn:corp:list" xmlns:employee="urn:corp:emp" xmlns:department="urn:corp:dep">
  <personList >
    <employee:empID>E0000001</employee:empID>
    <department:name>Sales</department:name>
    <employee:name>John Smith</employee:name>
  </personList>
  <personList>
    <employee:empID>E0000002</employee:empID>
    <department:name>Development</department:name>
    <employee:name>Ichiro Tanaka</employee:name>
  </personList>
  <personList>
    <employee:empID>E0000003</employee:empID>
    <department:name>Development</department:name>
    <employee:name>Jiro Suzuki</employee:name>
  </personList>
  <personList>
    <employee:empID>E0000004</employee:empID>
    <department:name>Administrative</department:name>
    <employee:name>Saburo Takahashi</employee:name>
  </personList>
</employeeList>
```

Resolve naming collision by adding namepsaces

- `employeeList` and `personList` - list schema
- `empId` and second `name` - employee schema
- first `name` - department schema

---

- list schema - urn:corp:list
- employee schema - urn:corp:emp
- department schema - urn:corp:dep

Save file as `module-3/asssignments/activity-1.xml`
